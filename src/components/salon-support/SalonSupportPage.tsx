"use client";

import React, { useState } from "react";
import SalonSupportHeader from "./SalonSupportHeader";
import SalonSupportTable from "./SalonSupportTable";
import NewTicketModal from "./NewTicketModal";
import ViewTicketModal from "./ViewTicketModal";
import DeleteTicketModal from "./DeleteTicketModal";
import { initialSalonTickets } from "./mockData";
import { SupportTicket } from "./types";

interface Salon {
  id: string;
  name: string;
  tag: string;
  manager: string;
  city: string;
  region: string;
  email: string;
  status: "Active" | "Trial" | "Cancelled" | "Leads" | "Past Due" | "Expired";
  plan: "Basic" | "Premium" | "Enterprise";
  revenue: string;
  ltv: string;
  lastActive: string;
  hasTicket: boolean;
  vip?: boolean;
  enterprise?: boolean;
}

interface SalonSupportPageProps {
  salon: Salon;
  onBack: () => void;
}

export default function SalonSupportPage({ salon, onBack }: SalonSupportPageProps) {
  const [tickets, setTickets] = useState<SupportTicket[]>(initialSalonTickets);
  const [isNewTicketModalOpen, setIsNewTicketModalOpen] = useState(false);
  const [viewingTicket, setViewingTicket] = useState<SupportTicket | null>(null);
  const [deleteTicketIndex, setDeleteTicketIndex] = useState<number | null>(null);

  const handleCreateTicket = (newT: SupportTicket) => {
    setTickets((prev) => [newT, ...prev]);
    setIsNewTicketModalOpen(false);
  };

  const handleConfirmDelete = () => {
    if (deleteTicketIndex !== null) {
      setTickets((prev) => prev.filter((_, i) => i !== deleteTicketIndex));
      setDeleteTicketIndex(null);
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300 w-full text-left font-sans">
      <SalonSupportHeader salonName={salon.name} onBack={onBack} />

      <div className="bg-white rounded-3xl border border-[#eef2f6] shadow-[0_2px_4px_-1px_rgba(175,182,201,0.08)] flex flex-col p-8 w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-slate-800">Support Tickets ({tickets.length})</h2>
          <button
            onClick={() => setIsNewTicketModalOpen(true)}
            className="px-6 py-2.5 bg-[#5e53fc] hover:bg-[#4d42eb] text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-100 cursor-pointer"
          >
            New Ticket
          </button>
        </div>

        <SalonSupportTable
          tickets={tickets}
          onViewTicket={setViewingTicket}
          onDeleteTicket={setDeleteTicketIndex}
        />
      </div>

      <NewTicketModal
        isOpen={isNewTicketModalOpen}
        totalTickets={tickets.length}
        onClose={() => setIsNewTicketModalOpen(false)}
        onCreate={handleCreateTicket}
      />
      <ViewTicketModal ticket={viewingTicket} onClose={() => setViewingTicket(null)} />
      <DeleteTicketModal
        isOpen={deleteTicketIndex !== null}
        onClose={() => setDeleteTicketIndex(null)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
