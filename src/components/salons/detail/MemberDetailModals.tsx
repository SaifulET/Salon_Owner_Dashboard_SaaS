import React, { useState, useEffect } from "react";
import { Member } from "../types";
import MemberProfileViewModal from "./MemberProfileViewModal";
import AddEditMemberModal from "./AddEditMemberModal";

interface MemberDetailModalsProps {
  isAddMemberModalOpen: boolean;
  setIsAddMemberModalOpen: (open: boolean) => void;
  selectedMember: Member | null;
  setSelectedMember: (member: Member | null) => void;
  membersList: Member[];
  setMembersList: React.Dispatch<React.SetStateAction<Member[]>>;
  salonName: string;
}

export default function MemberDetailModals({
  isAddMemberModalOpen, setIsAddMemberModalOpen, selectedMember, setSelectedMember,
  membersList, setMembersList, salonName
}: MemberDetailModalsProps) {
  const [editingMemberId, setEditingMemberId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [type, setType] = useState("Natural Person");
  const [role, setRole] = useState("Sole Director");
  const [possession, setPossession] = useState("100%");
  const [cfPiva, setCfPiva] = useState("");
  const [dob, setDob] = useState("");
  const [pob, setPob] = useState("");
  const [residence, setResidence] = useState("");

  useEffect(() => {
    if (!isAddMemberModalOpen) {
      setEditingMemberId(null);
      setName(""); setType("Natural Person"); setRole("Sole Director");
      setPossession("100%"); setCfPiva(""); setDob(""); setPob(""); setResidence("");
    }
  }, [isAddMemberModalOpen]);

  const handleEditClick = () => {
    if (!selectedMember) return;
    setName(selectedMember.name); setType(selectedMember.type); setRole(selectedMember.role);
    setPossession(selectedMember.possession); setCfPiva(selectedMember.cfPiva);
    if (selectedMember.dob && selectedMember.dob.includes("/")) {
      const p = selectedMember.dob.split("/");
      setDob(p.length === 3 ? `${p[2]}-${p[1].padStart(2, "0")}-${p[0].padStart(2, "0")}` : "");
    } else {
      setDob(selectedMember.dob || "");
    }
    setPob(selectedMember.pob || ""); setResidence(selectedMember.residence || "");
    setEditingMemberId(selectedMember.id); setIsAddMemberModalOpen(true); setSelectedMember(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedDob = dob && dob.includes("-") ? dob.split("-").reverse().join("/") : dob || "01/01/1990";
    if (editingMemberId) {
      setMembersList(prev => prev.map(m => m.id === editingMemberId ? {
        ...m, name, cfPiva, type, possession, role, dob: formattedDob, pob, residence
      } : m));
    } else {
      setMembersList(prev => [
        ...prev,
        {
          id: `mem-${Date.now()}`, name, company: salonName,
          cfPiva: cfPiva || `RSSMRA${Math.floor(100000 + Math.random() * 900000)}H501Z`,
          type, possession, role, dob: formattedDob, pob: pob || "Milan (MI)",
          residence: residence || "Via Giuseppe Verdi 12, Milan", appointmentDate: new Date().toLocaleDateString("it-IT")
        }
      ]);
    }
    setIsAddMemberModalOpen(false);
  };

  return (
    <>
      <MemberProfileViewModal selectedMember={selectedMember} onClose={() => setSelectedMember(null)} onEdit={handleEditClick} />
      <AddEditMemberModal
        isOpen={isAddMemberModalOpen} onClose={() => setIsAddMemberModalOpen(false)} onSubmit={handleFormSubmit}
        editingMemberId={editingMemberId} name={name} setName={setName} type={type} setType={setType} role={role}
        setRole={setRole} possession={possession} setPossession={setPossession} cfPiva={cfPiva} setCfPiva={setCfPiva}
        dob={dob} setDob={setDob} pob={pob} setPob={setPob} residence={residence} setResidence={setResidence}
      />
    </>
  );
}
