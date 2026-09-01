import React from "react";
import EditIdentificationModal from "./modals/EditIdentificationModal";
import EditShareCapitalModal from "./modals/EditShareCapitalModal";
import EditActivityModal from "./modals/EditActivityModal";
import EditContactsModal from "./modals/EditContactsModal";
import EditBankModal from "./modals/EditBankModal";
import EditFinancialModal from "./modals/EditFinancialModal";
import EditOtherDataModal from "./modals/EditOtherDataModal";
import AddLocationModal from "./modals/AddLocationModal";
import AddPaymentModal from "./modals/AddPaymentModal";
import MemberDetailModals from "./MemberDetailModals";
import { Salon } from "../types";

interface SalonDetailModalsContainerProps {
  salon: Salon;
  isEditModalOpen: boolean; setIsEditModalOpen: (open: boolean) => void;
  editBusinessType: string; editVtaNumber: string; editEmployees: string;
  editOwnerFirst: string; editOwnerLast: string; editEmail: string; editPhone: string;
  editCountry: string; editCity: string; editProvince: string; editZip: string;
  editPlan: "Basic" | "Premium" | "Enterprise"; editNotes: string;
  handleEditSave: (data: any) => void;
  isShareCapitalModalOpen: boolean; setIsShareCapitalModalOpen: (open: boolean) => void;
  subscribedCapital: string; setSubscribedCapital: (v: string) => void;
  paidUpCapital: string; setPaidUpCapital: (v: string) => void;
  companyDuration: string; setCompanyDuration: (v: string) => void;
  shareDivision: string; setShareDivision: (v: string) => void;
  isActivityModalOpen: boolean; setIsActivityModalOpen: (open: boolean) => void;
  primaryAteco: string; setPrimaryAteco: (v: string) => void;
  secondaryAteco: string; setSecondaryAteco: (v: string) => void;
  corporateObject: string; setCorporateObject: (v: string) => void;
  isContactModalOpen: boolean; setIsContactModalOpen: (open: boolean) => void;
  contactPec: string; setContactPec: (v: string) => void;
  contactEmail: string; setContactEmail: (v: string) => void;
  contactLandline: string; setContactLandline: (v: string) => void;
  contactMobile: string; setContactMobile: (v: string) => void;
  contactWebsite: string; setContactWebsite: (v: string) => void;
  isBankModalOpen: boolean; setIsBankModalOpen: (open: boolean) => void;
  bankIban: string; setBankIban: (v: string) => void;
  bankName: string; setBankName: (v: string) => void;
  bankBic: string; setBankBic: (v: string) => void;
  isFinancialModalOpen: boolean; setIsFinancialModalOpen: (open: boolean) => void;
  turnover: string; setTurnover: (v: string) => void;
  setEditEmployees: (v: string) => void;
  setEditPlan: (v: "Basic" | "Premium" | "Enterprise") => void;
  isOtherDataModalOpen: boolean; setIsOtherDataModalOpen: (open: boolean) => void;
  investedCapital: string; setInvestedCapital: (v: string) => void;
  setEditNotes: (v: string) => void;
  isLocationModalOpen: boolean; setIsLocationModalOpen: (open: boolean) => void;
  setLocations: React.Dispatch<React.SetStateAction<any[]>>;
  isPaymentModalOpen: boolean; setIsPaymentModalOpen: (open: boolean) => void;
  setPaymentMethods: React.Dispatch<React.SetStateAction<any[]>>;
  isAddMemberModalOpen: boolean; setIsAddMemberModalOpen: (open: boolean) => void;
  selectedMember: any; setSelectedMember: (m: any) => void;
  membersList: any[]; setMembersList: React.Dispatch<React.SetStateAction<any[]>>;
  triggerToast: (msg: string, type: "success" | "info" | "error") => void;
}

export default function SalonDetailModalsContainer(props: SalonDetailModalsContainerProps) {
  return (
    <>
      <EditIdentificationModal isOpen={props.isEditModalOpen} onClose={() => props.setIsEditModalOpen(false)} salon={props.salon} editBusinessType={props.editBusinessType} editVtaNumber={props.editVtaNumber} editEmployees={props.editEmployees} editOwnerFirst={props.editOwnerFirst} editOwnerLast={props.editOwnerLast} editEmail={props.editEmail} editPhone={props.editPhone} editCountry={props.editCountry} editCity={props.editCity} editProvince={props.editProvince} editZip={props.editZip} editPlan={props.editPlan} editNotes={props.editNotes} onSave={props.handleEditSave} />
      <EditShareCapitalModal isOpen={props.isShareCapitalModalOpen} onClose={() => props.setIsShareCapitalModalOpen(false)} subscribedCapital={props.subscribedCapital} paidUpCapital={props.paidUpCapital} companyDuration={props.companyDuration} shareDivision={props.shareDivision} onSave={(d) => { props.setSubscribedCapital(d.subscribedCapital); props.setPaidUpCapital(d.paidUpCapital); props.setCompanyDuration(d.companyDuration); props.setShareDivision(d.shareDivision); props.setIsShareCapitalModalOpen(false); props.triggerToast("Share capital updated.", "success"); }} />
      <EditActivityModal isOpen={props.isActivityModalOpen} onClose={() => props.setIsActivityModalOpen(false)} primaryAteco={props.primaryAteco} secondaryAteco={props.secondaryAteco} corporateObject={props.corporateObject} onSave={(d) => { props.setPrimaryAteco(d.primaryAteco); props.setSecondaryAteco(d.secondaryAteco); props.setCorporateObject(d.corporateObject); props.setIsActivityModalOpen(false); props.triggerToast("Activity ateco codes updated.", "success"); }} />
      <EditContactsModal isOpen={props.isContactModalOpen} onClose={() => props.setIsContactModalOpen(false)} contactPec={props.contactPec} contactEmail={props.contactEmail} contactLandline={props.contactLandline} contactMobile={props.contactMobile} contactWebsite={props.contactWebsite} onSave={(d) => { props.setContactPec(d.contactPec); props.setContactEmail(d.contactEmail); props.setContactLandline(d.contactLandline); props.setContactMobile(d.contactMobile); props.setContactWebsite(d.contactWebsite); props.setIsContactModalOpen(false); props.triggerToast("Main contacts updated.", "success"); }} />
      <EditBankModal isOpen={props.isBankModalOpen} onClose={() => props.setIsBankModalOpen(false)} bankIban={props.bankIban} bankName={props.bankName} bankBic={props.bankBic} onSave={(d) => { props.setBankIban(d.bankIban); props.setBankName(d.bankName); props.setBankBic(d.bankBic); props.setIsBankModalOpen(false); props.triggerToast("Bank details updated.", "success"); }} />
      <EditFinancialModal isOpen={props.isFinancialModalOpen} onClose={() => props.setIsFinancialModalOpen(false)} turnover={props.turnover} editEmployees={props.editEmployees} editPlan={props.editPlan} onSave={(d) => { props.setTurnover(d.turnover); props.setEditEmployees(d.editEmployees); props.setEditPlan(d.editPlan); props.setIsFinancialModalOpen(false); props.triggerToast("Financial indicators updated.", "success"); }} />
      <EditOtherDataModal isOpen={props.isOtherDataModalOpen} onClose={() => props.setIsOtherDataModalOpen(false)} investedCapital={props.investedCapital} editNotes={props.editNotes} onSave={(d) => { props.setInvestedCapital(d.investedCapital); props.setEditNotes(d.editNotes); props.setIsOtherDataModalOpen(false); props.triggerToast("Other data updated.", "success"); }} />
      <AddLocationModal isOpen={props.isLocationModalOpen} onClose={() => props.setIsLocationModalOpen(false)} onAdd={(d) => { props.setLocations(prev => [...prev, { id: `loc-${Date.now()}`, name: "Secondary Branch", address: d.address, zip: d.zip, city: d.city, province: d.province, country: d.country, registrationDate: new Date().toLocaleDateString(), isHQ: false }]); props.setIsLocationModalOpen(false); props.triggerToast("Location added successfully.", "success"); }} />
      <AddPaymentModal isOpen={props.isPaymentModalOpen} onClose={() => props.setIsPaymentModalOpen(false)} onAdd={(d) => { props.setPaymentMethods(prev => [...prev, { id: `pay-${Date.now()}`, type: `${d.payProvider} ending in ****${d.cardNumber.slice(-4)}`, provider: d.payProvider.toLowerCase(), isDefault: false }]); props.setIsPaymentModalOpen(false); props.triggerToast("Payment method added.", "success"); }} />
      <MemberDetailModals isAddMemberModalOpen={props.isAddMemberModalOpen} setIsAddMemberModalOpen={props.setIsAddMemberModalOpen} selectedMember={props.selectedMember} setSelectedMember={props.setSelectedMember} membersList={props.membersList} setMembersList={props.setMembersList} salonName={props.salon.name} />
    </>
  );
}
