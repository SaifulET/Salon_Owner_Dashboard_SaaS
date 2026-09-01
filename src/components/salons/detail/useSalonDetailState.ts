import { useState } from "react";
import { Salon } from "../types";
import { SalonTabType } from "./SalonDetailTabBar";

export function useSalonDetailState(salon: Salon) {
  const [activeTab, setActiveTab] = useState<SalonTabType>("basic");
  const [salonStatus, setSalonStatus] = useState(salon.status);
  const [editName, setEditName] = useState(salon.name);
  const [editBusinessType, setEditBusinessType] = useState(salon.tag === "SPA" ? "SPA" : salon.tag === "SRL" ? "SRL" : "Sole Proprietorship");
  const [editVtaNumber, setEditVtaNumber] = useState("IT44556677889");
  const [editEmployees, setEditEmployees] = useState("12");
  const [editOwnerFirst, setEditOwnerFirst] = useState(salon.manager.split(" ")[0] || "Roberto");
  const [editOwnerLast, setEditOwnerLast] = useState(salon.manager.split(" ").slice(1).join(" ") || "Marini");
  const [editEmail, setEditEmail] = useState(salon.email);
  const [editPhone, setEditPhone] = useState("+39 02 1234 5678");
  const [editCountry, setEditCountry] = useState("Italy");
  const [editCity, setEditCity] = useState(salon.city);
  const [editProvince, setEditProvince] = useState(salon.city);
  const [editZip, setEditZip] = useState("40126");
  const [editPlan, setEditPlan] = useState<"Basic" | "Premium" | "Enterprise">(salon.plan);
  const [editNotes, setEditNotes] = useState("VIP customer, very engaged with support team");

  const [subscribedCapital, setSubscribedCapital] = useState("€ 10.000");
  const [paidUpCapital, setPaidUpCapital] = useState("€ 10.000");
  const [companyDuration, setCompanyDuration] = useState("Indefinite period");
  const [shareDivision, setShareDivision] = useState("Quote ordinarie");
  const [contactPec, setContactPec] = useState("info@beautywellnesscenter.pec.it");
  const [contactEmail, setContactEmail] = useState(salon.email);
  const [contactLandline, setContactLandline] = useState("+39 051 3333 4444");
  const [contactMobile, setContactMobile] = useState("+39 339 3333 4444");
  const [contactWebsite, setContactWebsite] = useState("https://beautywellnesscenter.com");
  const [bankIban, setBankIban] = useState("IT60 X054 2811 1010 0000 0123 456");
  const [bankName, setBankName] = useState("Intesa Sanpaolo Bank");
  const [bankBic, setBankBic] = useState("BCITITMM");
  const [turnover, setTurnover] = useState("€ 450,000");
  const [investedCapital, setInvestedCapital] = useState("€ 15,000");
  const [primaryAteco, setPrimaryAteco] = useState("96.02.01 - Barber and hairdressing services");
  const [secondaryAteco, setSecondaryAteco] = useState("96.02.02 - Beauty salon services");
  const [corporateObject, setCorporateObject] = useState("Beauty and wellness activities");

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isShareCapitalModalOpen, setIsShareCapitalModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [isFinancialModalOpen, setIsFinancialModalOpen] = useState(false);
  const [isOtherDataModalOpen, setIsOtherDataModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isReactivateModalOpen, setIsReactivateModalOpen] = useState(false);
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const [paymentMethods, setPaymentMethods] = useState([{ id: "pay-1", type: "Visa ending in ****1234", provider: "visa", isDefault: true }]);
  const [locations, setLocations] = useState([{ id: "loc-1", name: "HQ - Bologna", address: "Via Indipendenza 45", zip: "40126", city: "Bologna", province: "Bologna (BO)", country: "Italy", registrationDate: "14/03/2020", isHQ: true }]);
  const [documentsList, setDocumentsList] = useState([
    { id: "doc-1", title: "Business Registration.pdf", size: "2.4 MB", type: "PDF", updated: "Aug 15, 2025" },
    { id: "doc-2", title: "VAT Certificate.pdf", size: "1.1 MB", type: "PDF", updated: "Aug 15, 2025" }
  ]);
  const [membersList, setMembersList] = useState([{ id: "mem-1", name: "Roberto Marini", company: "Beauty Wellness Center", cfPiva: "RSSMRA85M01H501Z", type: "Natural Person", possession: "100%", role: "Sole Director", dob: "01/03/1985", pob: "Milan (MI)", residence: "Via Giuseppe Verdi 123, Milan", appointmentDate: "15/03/2020" }]);

  return {
    activeTab, setActiveTab, salonStatus, setSalonStatus, editName, setEditName, editBusinessType, setEditBusinessType,
    editVtaNumber, setEditVtaNumber, editEmployees, setEditEmployees, editOwnerFirst, setEditOwnerFirst, editOwnerLast, setEditOwnerLast,
    editEmail, setEditEmail, editPhone, setEditPhone, editCountry, setCountry: setEditCountry, editCity, setEditCity,
    editProvince, setEditProvince, editZip, setEditZip, editPlan, setEditPlan, editNotes, setEditNotes,
    subscribedCapital, setSubscribedCapital, paidUpCapital, setPaidUpCapital, companyDuration, setCompanyDuration,
    shareDivision, setShareDivision, contactPec, setContactPec, contactEmail, setContactEmail, contactLandline, setContactLandline,
    contactMobile, setContactMobile, contactWebsite, setContactWebsite, bankIban, setBankIban, bankName, setBankName,
    bankBic, setBankBic, turnover, setTurnover, investedCapital, setInvestedCapital, primaryAteco, setPrimaryAteco,
    secondaryAteco, setSecondaryAteco, corporateObject, setCorporateObject, isEditModalOpen, setIsEditModalOpen,
    isShareCapitalModalOpen, setIsShareCapitalModalOpen, isPaymentModalOpen, setIsPaymentModalOpen, isActivityModalOpen, setIsActivityModalOpen,
    isContactModalOpen, setIsContactModalOpen, isBankModalOpen, setIsBankModalOpen, isFinancialModalOpen, setIsFinancialModalOpen,
    isOtherDataModalOpen, setIsOtherDataModalOpen, isLocationModalOpen, setIsLocationModalOpen, isReactivateModalOpen, setIsReactivateModalOpen,
    isAddMemberModalOpen, setIsAddMemberModalOpen, selectedMember, setSelectedMember, paymentMethods, setPaymentMethods,
    locations, setLocations, documentsList, setDocumentsList, membersList, setMembersList
  };
}
