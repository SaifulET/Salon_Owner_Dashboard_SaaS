"use client";

import React, { useState } from "react";
import { Employee } from "./types";
import StaffHeader from "./list/StaffHeader";
import StaffToolbar from "./list/StaffToolbar";
import StaffTable from "./list/StaffTable";
import AddStaffModal from "./list/AddStaffModal";
import ViewStaffModal from "./list/ViewStaffModal";
import StaffConfirmModals from "./list/StaffConfirmModals";
import EmployeeDetailPage from "./EmployeeDetailPage";

interface UsersAndStaffPageProps {
  salon: any;
  onBack: () => void;
  activePermissionEmployeeId: string | null;
  setActivePermissionEmployeeId: (id: string | null) => void;
  setSalonSubTab: (tab: string) => void;
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
}

export default function UsersAndStaffPage({
  salon,
  onBack,
  activePermissionEmployeeId,
  setActivePermissionEmployeeId,
  setSalonSubTab,
  employees,
  setEmployees
}: UsersAndStaffPageProps) {
  const [activeEmployeeId, setActiveEmployeeId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTab, setFilterTab] = useState<"hired" | "out" | "all">("hired");

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const [deleteEmployeeId, setDeleteEmployeeId] = useState<string | null>(null);
  const [suspendEmployeeId, setSuspendEmployeeId] = useState<string | null>(null);
  const [resetPasswordEmployeeId, setResetPasswordEmployeeId] = useState<string | null>(null);

  const [toasts, setToasts] = useState<{ id: number; message: string; type: "success" | "error" | "info" }[]>([]);

  const triggerToast = (message: string, type: "success" | "error" | "info" = "success") => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
  };

  const handleSaveEmployee = (empData: Partial<Employee>) => {
    if (editingEmployee) {
      setEmployees(prev => prev.map(e => e.id === editingEmployee.id ? { ...e, ...empData } : e));
      triggerToast("Employee details updated successfully.", "success");
    } else {
      const newEmp: Employee = { id: `emp-${Date.now()}`, role: "Staff", status: "Pending", employmentStatus: "Currently Hired", lastLogin: "Never", ...empData } as Employee;
      setEmployees(prev => [newEmp, ...prev]);
      triggerToast("New employee added successfully.", "success");
    }
    setIsAddModalOpen(false);
    setEditingEmployee(null);
  };

  const handleViewPermissionsFromModal = () => {
    const targetId = editingEmployee ? editingEmployee.id : `emp-${Date.now()}`;
    setActivePermissionEmployeeId(targetId);
    setSalonSubTab("permissions");
    setIsAddModalOpen(false);
  };

  const filteredEmployees = employees.filter(emp => {
    if (filterTab === "hired" && emp.employmentStatus !== "Currently Hired") return false;
    if (filterTab === "out" && !emp.employmentStatus.startsWith("Out of Team")) return false;
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      return `${emp.firstName} ${emp.lastName}`.toLowerCase().includes(q) || emp.email.toLowerCase().includes(q);
    }
    return true;
  });

  const activeEmployee = employees.find(e => e.id === activeEmployeeId);

  if (activeEmployee) {
    return (
      <EmployeeDetailPage
        employee={activeEmployee}
        onBack={() => setActiveEmployeeId(null)}
        onViewPermissions={() => {
          setActivePermissionEmployeeId(activeEmployee.id);
          setSalonSubTab("permissions");
        }}
        onUpdateEmployee={updated => setEmployees(prev => prev.map(e => e.id === updated.id ? updated : e))}
      />
    );
  }

  return (
    <div className="flex flex-col gap-6 text-[#29343D] animate-in fade-in duration-300 font-sans">
      <StaffHeader salon={salon} onBack={onBack} />
      <StaffToolbar filterTab={filterTab} setFilterTab={setFilterTab} searchQuery={searchQuery} setSearchQuery={setSearchQuery} onAddUser={() => { setEditingEmployee(null); setIsAddModalOpen(true); }} />
      <div className="border border-slate-100 rounded-3xl overflow-hidden w-full bg-white flex flex-col shadow-[0_4px_18px_rgba(17,31,56,0.03)]"><StaffTable employees={filteredEmployees} onViewDetails={id => setSelectedEmployee(employees.find(e => e.id === id) || null)} onEdit={emp => { setEditingEmployee(emp); setIsAddModalOpen(true); }} onResetPassword={setResetPasswordEmployeeId} onSuspend={setSuspendEmployeeId} onDelete={setDeleteEmployeeId} /></div>

      <AddStaffModal isOpen={isAddModalOpen} onClose={() => { setIsAddModalOpen(false); setEditingEmployee(null); }} employee={editingEmployee} onSave={handleSaveEmployee} onViewPermissions={handleViewPermissionsFromModal} />
      <ViewStaffModal isOpen={!!selectedEmployee} onClose={() => setSelectedEmployee(null)} employee={selectedEmployee} salonName={salon.name} onEdit={() => { if (selectedEmployee) { setEditingEmployee(selectedEmployee); setIsAddModalOpen(true); setSelectedEmployee(null); } }} onViewPermissions={() => { if (selectedEmployee) { setActivePermissionEmployeeId(selectedEmployee.id); setSalonSubTab("permissions"); setSelectedEmployee(null); } }} />
      <StaffConfirmModals employees={employees} deleteEmployeeId={deleteEmployeeId} setDeleteEmployeeId={setDeleteEmployeeId} onDeleteConfirm={id => { setEmployees(prev => prev.filter(e => e.id !== id)); setDeleteEmployeeId(null); triggerToast("Employee deleted.", "success"); }} suspendEmployeeId={suspendEmployeeId} setSuspendEmployeeId={setSuspendEmployeeId} onSuspendConfirm={id => { setEmployees(prev => prev.map(e => e.id === id ? { ...e, status: e.status === "Active" ? "Inactive" : "Active" } : e)); setSuspendEmployeeId(null); triggerToast("Status updated.", "success"); }} resetPasswordEmployeeId={resetPasswordEmployeeId} setResetPasswordEmployeeId={setResetPasswordEmployeeId} onResetPasswordConfirm={() => { setResetPasswordEmployeeId(null); triggerToast("Password reset successfully.", "success"); }} triggerToast={triggerToast} />

      <div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-3 pointer-events-none">
        {toasts.map(t => (
          <div key={t.id} className={`flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl border text-xs font-bold bg-white pointer-events-auto ${t.type === "success" ? "border-emerald-100" : "border-rose-100"}`}>
            {t.type === "success" ? <div className="w-5 h-5 rounded-full bg-[#EBFAF0] text-[#36C76C] flex items-center justify-center font-bold">✓</div> : <div className="w-5 h-5 rounded-full bg-[#FFE5ED] text-[#FF6692] flex items-center justify-center font-black">!</div>}
            <span>{t.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
