"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import {
  collection,
  query,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface Lead {
  id: string;
  name: string;
  companyName?: string;
  serviceNeeded?: string;
  brandDetails?: string;
  email: string;
  countryCode?: string;
  phone: string;
  fullPhoneNumber?: string;
  status?: string;
  createdAt?: Timestamp | any;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoadingLeads, setIsLoadingLeads] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [actionMessage, setActionMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // 1. Auth check & Route Protection
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/login");
      } else {
        setCurrentUser(user);
        setIsAuthChecking(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  // 2. Fetch leads from Firestore
  const fetchLeads = async () => {
    try {
      setIsLoadingLeads(true);
      const q = query(collection(db, "contacts"));
      const snapshot = await getDocs(q);
      const fetched: Lead[] = [];

      snapshot.forEach((docSnap) => {
        fetched.push({
          id: docSnap.id,
          ...(docSnap.data() as Omit<Lead, "id">),
        });
      });

      // Sort in-memory by date descending
      fetched.sort((a, b) => {
        const timeA = a.createdAt?.seconds
          ? a.createdAt.seconds * 1000
          : a.createdAt?.toDate
          ? a.createdAt.toDate().getTime()
          : 0;
        const timeB = b.createdAt?.seconds
          ? b.createdAt.seconds * 1000
          : b.createdAt?.toDate
          ? b.createdAt.toDate().getTime()
          : 0;
        return timeB - timeA;
      });

      setLeads(fetched);
    } catch (error: any) {
      console.error("Error fetching leads:", error);
      setActionMessage({
        type: "error",
        text: error?.message || "Failed to load leads from Firestore.",
      });
    } finally {
      setIsLoadingLeads(false);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchLeads();
    }
  }, [currentUser]);

  // 3. Status update
  const handleUpdateStatus = async (leadId: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, "contacts", leadId), {
        status: newStatus,
      });
      setLeads((prev) =>
        prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
      );
      if (selectedLead && selectedLead.id === leadId) {
        setSelectedLead((prev) => (prev ? { ...prev, status: newStatus } : null));
      }
      setActionMessage({ type: "success", text: "Lead status updated." });
      setTimeout(() => setActionMessage(null), 3000);
    } catch (err: any) {
      console.error("Failed to update status:", err);
      setActionMessage({ type: "error", text: "Could not update status." });
    }
  };

  // 4. Delete lead
  const handleDeleteLead = async (leadId: string) => {
    if (!confirm("Are you sure you want to delete this inquiry?")) return;
    try {
      await deleteDoc(doc(db, "contacts", leadId));
      setLeads((prev) => prev.filter((l) => l.id !== leadId));
      if (selectedLead?.id === leadId) setSelectedLead(null);
      setActionMessage({ type: "success", text: "Inquiry removed successfully." });
      setTimeout(() => setActionMessage(null), 3000);
    } catch (err: any) {
      console.error("Failed to delete lead:", err);
      setActionMessage({ type: "error", text: "Could not delete inquiry." });
    }
  };

  // 5. Sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.replace("/login");
    } catch (err) {
      console.error("Sign out error:", err);
    }
  };

  // Format date helper
  const formatDate = (val: any) => {
    if (!val) return "Recent";
    try {
      const date = val?.toDate ? val.toDate() : val?.seconds ? new Date(val.seconds * 1000) : new Date(val);
      return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }).format(date);
    } catch {
      return "Unknown date";
    }
  };

  // Filtered Leads
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        (lead.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (lead.email || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (lead.phone || "").includes(searchQuery) ||
        (lead.companyName || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (lead.brandDetails || "").toLowerCase().includes(searchQuery.toLowerCase());

      const matchesService =
        selectedService === "all" || lead.serviceNeeded === selectedService;

      const currentStatus = lead.status || "new";
      const matchesStatus =
        selectedStatus === "all" || currentStatus === selectedStatus;

      return matchesSearch && matchesService && matchesStatus;
    });
  }, [leads, searchQuery, selectedService, selectedStatus]);

  // Unique services list for filter
  const uniqueServices = useMemo(() => {
    const set = new Set<string>();
    leads.forEach((l) => {
      if (l.serviceNeeded) set.add(l.serviceNeeded);
    });
    return Array.from(set);
  }, [leads]);

  // Loading screen while verifying auth
  if (isAuthChecking) {
    return (
      <div className="min-h-screen bg-[#F5F4F3] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-[#536757] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-body text-neutral-500">Authenticating access...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F4F3] text-[#242424] flex flex-col selection:bg-[#536757]/20 selection:text-[#536757]">
      {/* Top Navbar */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-black/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-heading font-semibold text-xl text-[#242424] tracking-tight">
              SLAY<span className="text-[#536757]">.</span>
            </Link>
            <div className="h-4 w-px bg-neutral-300"></div>
            <span className="font-subheading text-xs uppercase tracking-widest text-[#536757] font-semibold bg-[#536757]/10 px-2.5 py-1 rounded-full">
              Admin Leads Portal
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* User Email Badge */}
            <div className="hidden sm:flex items-center gap-2 bg-[#F5F4F3] px-3 py-1.5 rounded-full border border-black/[0.04]">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-xs font-mono text-neutral-600 truncate max-w-[200px]">
                {currentUser?.email}
              </span>
            </div>

            {/* Back to Website */}
            <Link
              href="/"
              className="text-xs font-body font-medium text-neutral-500 hover:text-[#242424] px-3 py-1.5 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              View Site
            </Link>

            {/* Sign Out Button */}
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100/80 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Banner Notification */}
        {actionMessage && (
          <div
            className={`mb-6 p-3.5 rounded-[14px] text-xs sm:text-sm font-body flex items-center justify-between transition-all ${
              actionMessage.type === "success"
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            <span>{actionMessage.text}</span>
            <button
              onClick={() => setActionMessage(null)}
              className="text-neutral-400 hover:text-neutral-600 font-bold ml-4 cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* Header Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-[20px] p-5 border border-black/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <p className="text-xs font-subheading uppercase tracking-wider text-neutral-400 font-medium">
              Total Inquiries
            </p>
            <p className="font-heading font-medium text-3xl text-[#242424] mt-1">
              {leads.length}
            </p>
          </div>

          <div className="bg-white rounded-[20px] p-5 border border-black/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <p className="text-xs font-subheading uppercase tracking-wider text-neutral-400 font-medium">
              New Leads
            </p>
            <p className="font-heading font-medium text-3xl text-[#536757] mt-1">
              {leads.filter((l) => !l.status || l.status === "new").length}
            </p>
          </div>

          <div className="bg-white rounded-[20px] p-5 border border-black/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <p className="text-xs font-subheading uppercase tracking-wider text-neutral-400 font-medium">
              Contacted / Closed
            </p>
            <p className="font-heading font-medium text-3xl text-neutral-700 mt-1">
              {leads.filter((l) => l.status === "contacted" || l.status === "closed").length}
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-[20px] p-4 sm:p-5 border border-black/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.02)] mb-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <svg
              className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email, phone, company..."
              className="w-full bg-[#F5F4F3]/80 rounded-[12px] pl-10 pr-4 py-2.5 text-sm font-body text-[#242424] placeholder:text-neutral-400 border border-black/[0.05] focus:outline-none focus:ring-2 focus:ring-[#536757]/30"
            />
          </div>

          {/* Service Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="bg-[#F5F4F3]/80 rounded-[12px] px-3 py-2.5 text-xs sm:text-sm font-body text-[#242424] border border-black/[0.05] focus:outline-none focus:ring-2 focus:ring-[#536757]/30 cursor-pointer"
            >
              <option value="all">All Services</option>
              {uniqueServices.map((svc) => (
                <option key={svc} value={svc}>
                  {svc}
                </option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-[#F5F4F3]/80 rounded-[12px] px-3 py-2.5 text-xs sm:text-sm font-body text-[#242424] border border-black/[0.05] focus:outline-none focus:ring-2 focus:ring-[#536757]/30 cursor-pointer"
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="in_progress">In Progress</option>
              <option value="contacted">Contacted</option>
              <option value="closed">Closed</option>
            </select>

            {/* Refresh Button */}
            <button
              onClick={fetchLeads}
              disabled={isLoadingLeads}
              title="Refresh leads"
              className="p-2.5 rounded-[12px] bg-[#F5F4F3]/80 hover:bg-[#F5F4F3] text-neutral-600 hover:text-[#242424] border border-black/[0.05] transition-colors cursor-pointer"
            >
              <svg
                className={`w-4 h-4 ${isLoadingLeads ? "animate-spin" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        </div>

        {/* Leads List / Table */}
        <div className="bg-white rounded-[24px] border border-black/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.02)] overflow-hidden">
          {isLoadingLeads ? (
            <div className="py-20 flex flex-col items-center justify-center gap-3">
              <div className="w-8 h-8 border-3 border-[#536757] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm font-body text-neutral-400">Loading inquiries from Firestore...</p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="py-20 text-center px-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-100 text-neutral-400 mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="font-heading font-medium text-lg text-[#242424]">No inquiries found</h3>
              <p className="text-xs text-neutral-400 font-body mt-1">
                {searchQuery || selectedService !== "all" || selectedStatus !== "all"
                  ? "Try clearing your filters or search query."
                  : "Leads submitted via the contact page will appear here."}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-black/[0.05] bg-[#F5F4F3]/40 text-[11px] font-subheading uppercase tracking-wider text-neutral-400">
                    <th className="py-4 px-6 font-medium">Contact / Brand</th>
                    <th className="py-4 px-6 font-medium">Service Needed</th>
                    <th className="py-4 px-6 font-medium">Contact Details</th>
                    <th className="py-4 px-6 font-medium">Submitted</th>
                    <th className="py-4 px-6 font-medium">Status</th>
                    <th className="py-4 px-6 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.03] text-sm font-body">
                  {filteredLeads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="hover:bg-neutral-50/70 transition-colors group cursor-pointer"
                      onClick={() => setSelectedLead(lead)}
                    >
                      {/* Name & Company */}
                      <td className="py-4 px-6">
                        <div className="font-heading font-medium text-[#242424] text-base">
                          {lead.name}
                        </div>
                        {lead.companyName ? (
                          <div className="text-xs text-[#536757] font-medium mt-0.5">
                            {lead.companyName}
                          </div>
                        ) : (
                          <div className="text-xs text-neutral-400 italic">No company</div>
                        )}
                      </td>

                      {/* Service Needed */}
                      <td className="py-4 px-6">
                        <span className="inline-block bg-[#536757]/10 text-[#536757] text-xs font-medium px-3 py-1 rounded-full">
                          {lead.serviceNeeded || "General Inquiry"}
                        </span>
                      </td>

                      {/* Contact info */}
                      <td className="py-4 px-6" onClick={(e) => e.stopPropagation()}>
                        <div className="flex flex-col gap-1">
                          <a
                            href={`mailto:${lead.email}`}
                            className="text-xs sm:text-sm text-[#242424] hover:text-[#536757] transition-colors flex items-center gap-1.5"
                          >
                            <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {lead.email}
                          </a>
                          <a
                            href={`tel:${lead.fullPhoneNumber || `${lead.countryCode || ""}${lead.phone}`}`}
                            className="text-xs text-neutral-500 hover:text-[#242424] transition-colors flex items-center gap-1.5 font-mono"
                          >
                            <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {lead.fullPhoneNumber || `${lead.countryCode || ""} ${lead.phone}`}
                          </a>
                        </div>
                      </td>

                      {/* Submitted At */}
                      <td className="py-4 px-6 text-xs text-neutral-500 whitespace-nowrap">
                        {formatDate(lead.createdAt)}
                      </td>

                      {/* Status */}
                      <td className="py-4 px-6" onClick={(e) => e.stopPropagation()}>
                        <select
                          value={lead.status || "new"}
                          onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
                          className={`text-xs font-medium px-2.5 py-1 rounded-full border-0 focus:ring-1 focus:ring-[#536757]/40 cursor-pointer ${
                            (lead.status || "new") === "new"
                              ? "bg-emerald-100/70 text-emerald-800"
                              : lead.status === "in_progress"
                              ? "bg-amber-100/70 text-amber-800"
                              : lead.status === "contacted"
                              ? "bg-blue-100/70 text-blue-800"
                              : "bg-neutral-100 text-neutral-600"
                          }`}
                        >
                          <option value="new">New</option>
                          <option value="in_progress">In Progress</option>
                          <option value="contacted">Contacted</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setSelectedLead(lead)}
                            className="text-xs text-[#536757] hover:underline font-medium cursor-pointer"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleDeleteLead(lead.id)}
                            className="text-neutral-400 hover:text-red-600 p-1 transition-colors cursor-pointer"
                            title="Delete Lead"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedLead(null)}
        >
          <div
            className="bg-white rounded-[28px] max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-black/[0.06] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-black/[0.05] pb-4 mb-5">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#536757] bg-[#536757]/10 px-2.5 py-0.5 rounded-full">
                  {selectedLead.serviceNeeded || "Inquiry"}
                </span>
                <h2 className="font-heading font-medium text-2xl text-[#242424] mt-2">
                  {selectedLead.name}
                </h2>
                {selectedLead.companyName && (
                  <p className="text-sm font-subheading text-neutral-500">
                    Company: <span className="text-[#242424] font-medium">{selectedLead.companyName}</span>
                  </p>
                )}
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#F5F4F3]/60 p-4 rounded-[16px]">
                <div>
                  <p className="text-[11px] font-subheading uppercase tracking-wider text-neutral-400">
                    Email Address
                  </p>
                  <a
                    href={`mailto:${selectedLead.email}`}
                    className="text-sm font-body text-[#536757] hover:underline break-all"
                  >
                    {selectedLead.email}
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-subheading uppercase tracking-wider text-neutral-400">
                    Phone Number
                  </p>
                  <a
                    href={`tel:${selectedLead.fullPhoneNumber || `${selectedLead.countryCode || ""}${selectedLead.phone}`}`}
                    className="text-sm font-body text-[#536757] hover:underline font-mono"
                  >
                    {selectedLead.fullPhoneNumber || `${selectedLead.countryCode || ""} ${selectedLead.phone}`}
                  </a>
                </div>
              </div>

              {/* Brand Details / Message */}
              <div>
                <p className="text-xs font-subheading uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                  Brand Details / Message
                </p>
                <div className="bg-[#F5F4F3]/40 border border-black/[0.04] p-4 rounded-[16px] text-sm font-body text-[#242424] leading-relaxed whitespace-pre-wrap max-h-56 overflow-y-auto">
                  {selectedLead.brandDetails || "No additional brand details provided."}
                </div>
              </div>

              {/* Meta & Status */}
              <div className="flex items-center justify-between pt-2 text-xs text-neutral-500">
                <span>Submitted: {formatDate(selectedLead.createdAt)}</span>
                <div className="flex items-center gap-2">
                  <span>Status:</span>
                  <select
                    value={selectedLead.status || "new"}
                    onChange={(e) => handleUpdateStatus(selectedLead.id, e.target.value)}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-100 border-0 focus:ring-1 focus:ring-[#536757]"
                  >
                    <option value="new">New</option>
                    <option value="in_progress">In Progress</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-black/[0.05] flex justify-end gap-2">
              <a
                href={`mailto:${selectedLead.email}?subject=Re: Your Inquiry with Slay Agency`}
                className="cta-btn inline-flex items-center justify-center text-white text-xs font-body font-medium px-4 py-2.5 rounded-[12px] shadow-sm"
              >
                Reply via Email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
