import React from "react";
import { Salon } from "../types";
import ReactivateSalonModal from "./ReactivateSalonModal";
import DeleteSalonModal from "./DeleteSalonModal";
import SuspendSalonModal from "./SuspendSalonModal";
import ResetPasswordModal from "./ResetPasswordModal";

interface ActionModalsProps {
  isReactivateModalOpen: boolean;
  setIsReactivateModalOpen: (open: boolean) => void;
  reactivateSalonId: string | null;
  setSalons: React.Dispatch<React.SetStateAction<Salon[]>>;
  deleteSalonId: string | null;
  setDeleteSalonId: (id: string | null) => void;
  setSelectedSalonIds: React.Dispatch<React.SetStateAction<string[]>>;
  suspendSalonId: string | null;
  setSuspendSalonId: (id: string | null) => void;
  resetPasswordSalonId: string | null;
  setResetPasswordSalonId: (id: string | null) => void;
  triggerToast: (msg: string, type: "success" | "info" | "error") => void;
}

export default function ActionModals({
  isReactivateModalOpen,
  setIsReactivateModalOpen,
  reactivateSalonId,
  setSalons,
  deleteSalonId,
  setDeleteSalonId,
  setSelectedSalonIds,
  suspendSalonId,
  setSuspendSalonId,
  resetPasswordSalonId,
  setResetPasswordSalonId,
  triggerToast
}: ActionModalsProps) {
  return (
    <>
      <ReactivateSalonModal
        isOpen={isReactivateModalOpen}
        onClose={() => setIsReactivateModalOpen(false)}
        salonId={reactivateSalonId}
        setSalons={setSalons}
        triggerToast={triggerToast}
      />
      <DeleteSalonModal
        deleteSalonId={deleteSalonId}
        setDeleteSalonId={setDeleteSalonId}
        setSalons={setSalons}
        setSelectedSalonIds={setSelectedSalonIds}
        triggerToast={triggerToast}
      />
      <SuspendSalonModal
        suspendSalonId={suspendSalonId}
        setSuspendSalonId={setSuspendSalonId}
        setSalons={setSalons}
        triggerToast={triggerToast}
      />
      <ResetPasswordModal
        resetPasswordSalonId={resetPasswordSalonId}
        setResetPasswordSalonId={setResetPasswordSalonId}
        triggerToast={triggerToast}
      />
    </>
  );
}
