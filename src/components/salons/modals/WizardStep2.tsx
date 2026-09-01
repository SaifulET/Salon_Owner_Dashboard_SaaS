import React from "react";
import { TrashIcon } from "../icons/SalonIcons";

export interface Owner {
  id: string;
  firstName: string;
  lastName: string;
}

interface WizardStep2Props {
  manualOwners: Owner[];
  setManualOwners: React.Dispatch<React.SetStateAction<Owner[]>>;
  handleDeleteOwner: (id: string) => void;
}

export default function WizardStep2({
  manualOwners,
  setManualOwners,
  handleDeleteOwner
}: WizardStep2Props) {
  return (
    <div className="flex flex-col gap-4 animate-in fade-in duration-200 max-h-[30vh] overflow-y-auto pr-1">
      {manualOwners.map((owner, index) => (
        <div key={owner.id} className="flex items-end gap-3 group">
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-600">
                {index === 0 ? "Owner's First Name *" : `Owner's ${index + 1} First Name *`}
              </label>
              <input
                type="text"
                required
                placeholder="Enter owner's first name"
                value={owner.firstName}
                onChange={(e) => {
                  const val = e.target.value;
                  setManualOwners(prev => prev.map(o => o.id === owner.id ? { ...o, firstName: val } : o));
                }}
                className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 placeholder:text-slate-300"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-600">
                {index === 0 ? "Owner's Last Name *" : `Owner's ${index + 1} Last Name *`}
              </label>
              <input
                type="text"
                required
                placeholder="Enter owner's last name"
                value={owner.lastName}
                onChange={(e) => {
                  const val = e.target.value;
                  setManualOwners(prev => prev.map(o => o.id === owner.id ? { ...o, lastName: val } : o));
                }}
                className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 placeholder:text-slate-300"
              />
            </div>
          </div>
          {manualOwners.length > 1 && (
            <div className="flex items-center self-end mb-1">
              <button
                type="button"
                onClick={() => handleDeleteOwner(owner.id)}
                className="p-2.5 bg-rose-50 hover:bg-rose-100 text-rose-500 rounded-xl transition-colors relative group cursor-pointer"
                title="Delete Owner"
              >
                <TrashIcon />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
