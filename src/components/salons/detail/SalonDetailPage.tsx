"use client";

import React from "react";
import { HomeIcon } from "../icons/SalonIcons";
import SalonDetailHeader from "./SalonDetailHeader";
import SalonDetailTabBar from "./SalonDetailTabBar";
import BasicTab from "./BasicTab";
import LocationsTab from "./LocationsTab";
import ContactsTab from "./ContactsTab";
import TaxTab from "./TaxTab";
import DocumentsTab from "./DocumentsTab";
import MembersTab from "./MembersTab";
import SalonDetailModalsContainer from "./SalonDetailModalsContainer";
import SalonReactivateModal from "./SalonReactivateModal";
import { useSalonDetailState } from "./useSalonDetailState";
import { Salon } from "../types";

interface SalonDetailPageProps {
  salon: Salon;
  onBack: () => void;
  onImpersonate: (name: string, val: boolean) => void;
}

export default function SalonDetailPage({ salon, onBack, onImpersonate }: SalonDetailPageProps) {
  const s = useSalonDetailState(salon);

  const handleEditSave = (data: any) => {
    s.setEditName(data.name); s.setEditBusinessType(data.businessType); s.setEditVtaNumber(data.vtaNumber);
    s.setEditEmployees(data.employees); s.setEditOwnerFirst(data.ownerFirst); s.setEditOwnerLast(data.ownerLast);
    s.setEditEmail(data.email); s.setEditPhone(data.phone); s.setCountry(data.country); s.setEditCity(data.city);
    s.setEditProvince(data.province); s.setEditZip(data.zip); s.setEditPlan(data.plan); s.setEditNotes(data.notes);
    salon.name = data.name; salon.manager = `${data.ownerFirst} ${data.ownerLast}`; salon.email = data.email;
    salon.city = data.city; salon.plan = data.plan; s.setIsEditModalOpen(false);
  };

  return (
    <div className="flex w-full flex-col gap-5 text-left text-[#283442] animate-in fade-in duration-300">
      <div className="rounded-2xl bg-white px-5 py-4 shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex items-center justify-between w-full">
        <div className="text-base font-bold leading-none tracking-normal text-[#1f2937] font-sans">{salon.name}</div>
        <div className="flex items-center gap-2 text-xs font-semibold">
          <button onClick={onBack} className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors inline-flex cursor-pointer"><HomeIcon /></button>
          <span className="text-slate-350">/</span>
          <button onClick={onBack} className="bg-[#e4e2ff] text-[#5e53fc] px-3 py-1 rounded-full text-[10px] font-extrabold transition-all hover:bg-[#d8d5ff] cursor-pointer">Salon Beauty</button>
        </div>
      </div>

      <SalonDetailHeader salon={salon} salonStatus={s.salonStatus} editEmployees={s.editEmployees} setIsReactivateModalOpen={s.setIsReactivateModalOpen} />
      <SalonDetailTabBar activeTab={s.activeTab} setActiveTab={s.setActiveTab} />

      <div className="grid grid-cols-1 gap-6">
        {s.activeTab === "basic" && <BasicTab salon={salon} editBusinessType={s.editBusinessType} editVtaNumber={s.editVtaNumber} subscribedCapital={s.subscribedCapital} paidUpCapital={s.paidUpCapital} companyDuration={s.companyDuration} shareDivision={s.shareDivision} paymentMethods={s.paymentMethods} setPaymentMethods={s.setPaymentMethods} primaryAteco={s.primaryAteco} secondaryAteco={s.secondaryAteco} corporateObject={s.corporateObject} setIsEditModalOpen={s.setIsEditModalOpen} setIsShareCapitalModalOpen={s.setIsShareCapitalModalOpen} setIsPaymentModalOpen={s.setIsPaymentModalOpen} setIsActivityModalOpen={s.setIsActivityModalOpen} triggerToast={() => {}} />}
        {s.activeTab === "locations" && <LocationsTab locations={s.locations} setLocations={s.setLocations} setIsLocationModalOpen={s.setIsLocationModalOpen} />}
        {s.activeTab === "contacts" && <ContactsTab contactPec={s.contactPec} contactEmail={s.contactEmail} contactLandline={s.contactLandline} contactMobile={s.contactMobile} contactWebsite={s.contactWebsite} setIsContactModalOpen={s.setIsContactModalOpen} />}
        {s.activeTab === "tax" && <TaxTab bankIban={s.bankIban} bankName={s.bankName} bankBic={s.bankBic} turnover={s.turnover} editEmployees={s.editEmployees} editPlan={s.editPlan} investedCapital={s.investedCapital} editNotes={s.editNotes} setIsBankModalOpen={s.setIsBankModalOpen} setIsFinancialModalOpen={s.setIsFinancialModalOpen} setIsOtherDataModalOpen={s.setIsOtherDataModalOpen} />}
        {s.activeTab === "documents" && <DocumentsTab documentsList={s.documentsList} setDocumentsList={s.setDocumentsList} />}
        {s.activeTab === "members" && <MembersTab membersList={s.membersList} setSelectedMember={s.setSelectedMember} setIsAddMemberModalOpen={s.setIsAddMemberModalOpen} />}
      </div>

      <SalonDetailModalsContainer
        salon={salon} isEditModalOpen={s.isEditModalOpen} setIsEditModalOpen={s.setIsEditModalOpen}
        editBusinessType={s.editBusinessType} editVtaNumber={s.editVtaNumber} editEmployees={s.editEmployees}
        editOwnerFirst={s.editOwnerFirst} editOwnerLast={s.editOwnerLast} editEmail={s.editEmail} editPhone={s.editPhone}
        editCountry={s.editCountry} editCity={s.editCity} editProvince={s.editProvince} editZip={s.editZip}
        editPlan={s.editPlan} editNotes={s.editNotes} handleEditSave={handleEditSave}
        isShareCapitalModalOpen={s.isShareCapitalModalOpen} setIsShareCapitalModalOpen={s.setIsShareCapitalModalOpen}
        subscribedCapital={s.subscribedCapital} setSubscribedCapital={s.setSubscribedCapital}
        paidUpCapital={s.paidUpCapital} setPaidUpCapital={s.setPaidUpCapital}
        companyDuration={s.companyDuration} setCompanyDuration={s.setCompanyDuration}
        shareDivision={s.shareDivision} setShareDivision={s.setShareDivision}
        isActivityModalOpen={s.isActivityModalOpen} setIsActivityModalOpen={s.setIsActivityModalOpen}
        primaryAteco={s.primaryAteco} setPrimaryAteco={s.setPrimaryAteco}
        secondaryAteco={s.secondaryAteco} setSecondaryAteco={s.setSecondaryAteco}
        corporateObject={s.corporateObject} setCorporateObject={s.setCorporateObject}
        isContactModalOpen={s.isContactModalOpen} setIsContactModalOpen={s.setIsContactModalOpen}
        contactPec={s.contactPec} setContactPec={s.setContactPec}
        contactEmail={s.contactEmail} setContactEmail={s.setContactEmail}
        contactLandline={s.contactLandline} setContactLandline={s.setContactLandline}
        contactMobile={s.contactMobile} setContactMobile={s.setContactMobile}
        contactWebsite={s.contactWebsite} setContactWebsite={s.setContactWebsite}
        isBankModalOpen={s.isBankModalOpen} setIsBankModalOpen={s.setIsBankModalOpen}
        bankIban={s.bankIban} setBankIban={s.setBankIban} bankName={s.bankName} setBankName={s.setBankName} bankBic={s.bankBic} setBankBic={s.setBankBic}
        isFinancialModalOpen={s.isFinancialModalOpen} setIsFinancialModalOpen={s.setIsFinancialModalOpen}
        turnover={s.turnover} setTurnover={s.setTurnover} setEditEmployees={s.setEditEmployees} setEditPlan={s.setEditPlan}
        isOtherDataModalOpen={s.isOtherDataModalOpen} setIsOtherDataModalOpen={s.setIsOtherDataModalOpen}
        investedCapital={s.investedCapital} setInvestedCapital={s.setInvestedCapital} setEditNotes={s.setEditNotes}
        isLocationModalOpen={s.isLocationModalOpen} setIsLocationModalOpen={s.setIsLocationModalOpen} setLocations={s.setLocations}
        isPaymentModalOpen={s.isPaymentModalOpen} setIsPaymentModalOpen={s.setIsPaymentModalOpen} setPaymentMethods={s.setPaymentMethods}
        isAddMemberModalOpen={s.isAddMemberModalOpen} setIsAddMemberModalOpen={s.setIsAddMemberModalOpen}
        selectedMember={s.selectedMember} setSelectedMember={s.setSelectedMember} membersList={s.membersList} setMembersList={s.setMembersList}
        triggerToast={() => {}}
      />
      <SalonReactivateModal isOpen={s.isReactivateModalOpen} onClose={() => s.setIsReactivateModalOpen(false)} onConfirm={() => { s.setSalonStatus("Active"); salon.status = "Active"; s.setIsReactivateModalOpen(false); onImpersonate(salon.name, true); }} />
    </div>
  );
}
