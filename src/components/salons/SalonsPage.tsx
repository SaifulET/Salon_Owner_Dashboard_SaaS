"use client";

import React from "react";
import SalonsHeaderToolbar from "./list/SalonsHeaderToolbar";
import SalonFilters from "./list/SalonFilters";
import SalonListTable from "./list/SalonListTable";
import AddSalonModal from "./modals/AddSalonModal";
import InviteSalonForm from "./modals/InviteSalonForm";
import ManualSalonWizard from "./modals/ManualSalonWizard";
import MailsSentModal from "./modals/MailsSentModal";
import ActionModals from "./modals/ActionModals";
import SalonToasts from "./list/SalonToasts";
import { useSalonsPageState } from "./useSalonsPageState";
import { Salon } from "./types";

interface SalonsPageProps {
  salons: Salon[];
  setSalons: React.Dispatch<React.SetStateAction<Salon[]>>;
  selectedSalonId: string | null;
  setSelectedSalonId: (id: string | null) => void;
  impersonatingSalon: string | null;
  setImpersonatingSalon: (name: string | null) => void;
}

export default function SalonsPage({ salons, setSalons, selectedSalonId, setSelectedSalonId }: SalonsPageProps) {
  const s = useSalonsPageState(salons);

  return (
    <div className="flex w-full flex-col gap-5 text-left text-[#283442] animate-in fade-in slide-in-from-bottom-4 duration-300">
      <SalonsHeaderToolbar isRefreshing={false} handleRefresh={() => s.triggerToast("Data refreshed.", "success")} handleExport={() => s.triggerToast("Exporting data as CSV...", "info")} handleAddSalon={() => { s.setAddModalStep(1); s.setAddModalType(null); s.setIsAddModalOpen(true); }} />
      <SalonFilters
        selectedStatus={s.selectedStatus} setSelectedStatus={s.setSelectedStatus} selectedPlan={s.selectedPlan} setSelectedPlan={s.setSelectedPlan}
        selectedRegion={s.selectedRegion} setSelectedRegion={s.setSelectedRegion} selectedCity={s.selectedCity} setSelectedCity={s.setSelectedCity}
        setCurrentPage={s.setCurrentPage} isRegionDropdownOpen={s.isRegionDropdownOpen} setIsRegionDropdownOpen={s.setIsRegionDropdownOpen}
        isCityDropdownOpen={s.isCityDropdownOpen} setIsCityDropdownOpen={s.setIsCityDropdownOpen} isStatusDropdownOpen={s.isStatusDropdownOpen}
        setIsStatusDropdownOpen={s.setIsStatusDropdownOpen} isPlanDropdownOpen={s.isPlanDropdownOpen} setIsPlanDropdownOpen={s.setIsPlanDropdownOpen}
        regionSearch={s.regionSearch} setRegionSearch={s.setRegionSearch} citySearch={s.citySearch} setCitySearch={s.setCitySearch}
        filteredRegions={s.filteredRegions} filteredCities={s.filteredCities} regionRef={s.regionRef} cityRef={s.cityRef} statusRef={s.statusRef} planRef={s.planRef}
      />
      {s.selectedSalonIds.length > 0 && (
        <div className="bg-[#fcfcff] border border-[#e2dfff] px-6 py-3 rounded-2xl flex items-center justify-between shadow-sm">
          <span className="text-xs font-bold text-[#5e53fc]">{s.selectedSalonIds.length} salon{s.selectedSalonIds.length > 1 ? "s" : ""} selected</span>
          <button onClick={() => s.setSelectedSalonIds([])} className="text-xs font-bold text-[#5e53fc] hover:underline cursor-pointer">Unselect All</button>
        </div>
      )}
      <SalonListTable
        paginatedSalons={s.paginatedSalons} selectedSalonIds={s.selectedSalonIds} activeActionMenuId={s.activeActionMenuId} menuRef={s.menuRef}
        handleSelectAll={s.handleSelectAll} handleSelectRow={(id) => s.setSelectedSalonIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])}
        setSelectedSalonId={setSelectedSalonId} handleImpersonate={(id) => { s.setReactivateSalonId(id); s.setIsReactivateModalOpen(true); s.setActiveActionMenuId(null); }}
        setMailsSentSalonId={s.setMailsSentSalonId} setResetPasswordSalonId={s.setResetPasswordSalonId} setSuspendSalonId={s.setSuspendSalonId} setDeleteSalonId={s.setDeleteSalonId}
        setActiveActionMenuId={s.setActiveActionMenuId} itemsPerPage={s.itemsPerPage} setItemsPerPage={s.setItemsPerPage} currentPage={s.currentPage}
        setCurrentPage={s.setCurrentPage} totalItems={s.totalItems} totalPages={s.totalPages} startIndex={s.startIndex}
      />
      <AddSalonModal
        isOpen={s.isAddModalOpen} onClose={() => s.setIsAddModalOpen(false)} addModalStep={s.addModalStep} setAddModalStep={s.setAddModalStep} addModalType={s.addModalType} setAddModalType={s.setAddModalType}
        childrenStep2={s.addModalType === "invite" ? <InviteSalonForm onClose={() => s.setIsAddModalOpen(false)} triggerToast={s.triggerToast} /> : <ManualSalonWizard onClose={() => s.setIsAddModalOpen(false)} onAddSalon={(newSalon) => setSalons(prev => [newSalon, ...prev])} triggerToast={s.triggerToast} />}
      />
      <MailsSentModal isOpen={s.mailsSentSalonId !== null} onClose={() => s.setMailsSentSalonId(null)} salonName={salons.find(x => x.id === s.mailsSentSalonId)?.name || ""} triggerToast={s.triggerToast} />
      <ActionModals
        isReactivateModalOpen={s.isReactivateModalOpen} setIsReactivateModalOpen={s.setIsReactivateModalOpen} reactivateSalonId={s.reactivateSalonId} setSalons={setSalons}
        deleteSalonId={s.deleteSalonId} setDeleteSalonId={s.setDeleteSalonId} setSelectedSalonIds={s.setSelectedSalonIds} suspendSalonId={s.suspendSalonId}
        setSuspendSalonId={s.setSuspendSalonId} resetPasswordSalonId={s.resetPasswordSalonId} setResetPasswordSalonId={s.setResetPasswordSalonId} triggerToast={s.triggerToast}
      />
      <SalonToasts toasts={s.toasts} />
    </div>
  );
}
