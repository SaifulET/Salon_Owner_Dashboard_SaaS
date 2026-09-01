import React from "react";
import IdentificationCard from "./IdentificationCard";
import ShareCapitalCard from "./ShareCapitalCard";
import PaymentMethodCard from "./PaymentMethodCard";
import ActivityCard from "./ActivityCard";
import { Salon } from "../types";

interface BasicTabProps {
  salon: Salon;
  editBusinessType: string;
  editVtaNumber: string;
  subscribedCapital: string;
  paidUpCapital: string;
  companyDuration: string;
  shareDivision: string;
  paymentMethods: any[];
  setPaymentMethods: React.Dispatch<React.SetStateAction<any[]>>;
  primaryAteco: string;
  secondaryAteco: string;
  corporateObject: string;
  setIsEditModalOpen: (open: boolean) => void;
  setIsShareCapitalModalOpen: (open: boolean) => void;
  setIsPaymentModalOpen: (open: boolean) => void;
  setIsActivityModalOpen: (open: boolean) => void;
  triggerToast: (msg: string, type: "success" | "info" | "error") => void;
}

export default function BasicTab({
  salon,
  editBusinessType,
  editVtaNumber,
  subscribedCapital,
  paidUpCapital,
  companyDuration,
  shareDivision,
  paymentMethods,
  setPaymentMethods,
  primaryAteco,
  secondaryAteco,
  corporateObject,
  setIsEditModalOpen,
  setIsShareCapitalModalOpen,
  setIsPaymentModalOpen,
  setIsActivityModalOpen,
  triggerToast
}: BasicTabProps) {
  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in duration-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <IdentificationCard
          salon={salon}
          editBusinessType={editBusinessType}
          editVtaNumber={editVtaNumber}
          setIsEditModalOpen={setIsEditModalOpen}
        />
        <ShareCapitalCard
          subscribedCapital={subscribedCapital}
          paidUpCapital={paidUpCapital}
          companyDuration={companyDuration}
          shareDivision={shareDivision}
          setIsShareCapitalModalOpen={setIsShareCapitalModalOpen}
        />
      </div>
      <PaymentMethodCard
        paymentMethods={paymentMethods}
        setPaymentMethods={setPaymentMethods}
        setIsPaymentModalOpen={setIsPaymentModalOpen}
        triggerToast={triggerToast}
      />
      <ActivityCard
        primaryAteco={primaryAteco}
        secondaryAteco={secondaryAteco}
        corporateObject={corporateObject}
        setIsActivityModalOpen={setIsActivityModalOpen}
      />
    </div>
  );
}
