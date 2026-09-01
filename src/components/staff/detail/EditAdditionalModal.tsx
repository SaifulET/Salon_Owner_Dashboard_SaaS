import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { Language } from "./AdditionalDataCard";
import EditCertCoursesSection from "./EditCertCoursesSection";
import EditLanguagesSection from "./EditLanguagesSection";

interface EditAdditionalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCertifications: string[];
  initialCourses: string[];
  initialLanguages: Language[];
  initialManager: string;
  onSave: (data: {
    certifications: string[];
    courses: string[];
    languages: Language[];
    manager: string;
  }) => void;
}

export default function EditAdditionalModal({
  isOpen,
  onClose,
  initialCertifications,
  initialCourses,
  initialLanguages,
  initialManager,
  onSave
}: EditAdditionalModalProps) {
  const [certifications, setCertifications] = useState<string[]>(initialCertifications);
  const [courses, setCourses] = useState<string[]>(initialCourses);
  const [languages, setLanguages] = useState<Language[]>(initialLanguages);
  const [manager, setManager] = useState(initialManager);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ certifications, courses, languages, manager });
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-[540px] shadow-2xl flex flex-col relative overflow-hidden animate-in zoom-in-95 duration-200 text-left font-semibold text-xs font-sans">
        <div className="px-7 pt-7 pb-5 flex items-center justify-between border-b border-slate-100">
          <h3 className="text-base font-bold text-slate-800">Edit Additional Data</h3>
          <button type="button" onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors cursor-pointer">
            <HugeiconsIcon icon={Cancel01Icon} size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-7 pb-7 pt-5 max-h-[75vh] flex flex-col gap-6">
          <EditCertCoursesSection
            certifications={certifications}
            setCertifications={setCertifications}
            courses={courses}
            setCourses={setCourses}
          />
          <EditLanguagesSection
            languages={languages}
            setLanguages={setLanguages}
          />

          <div className="flex flex-col gap-3 border-t border-slate-200 pt-5">
            <span className="text-sm font-semibold text-slate-700">Direct Manager</span>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-slate-500">User *</label>
              <div className="relative">
                <select value={manager} onChange={(e) => setManager(e.target.value)} className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-lg px-3 py-2.5 text-sm text-slate-700 bg-white appearance-none cursor-pointer">
                  <option value="">Select user</option>
                  <option>Maria Rodriguez</option><option>Dr. Marco Rossi</option><option>Roberto Marini</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-2 pt-4 border-t border-slate-100">
            <button type="submit" className="px-6 py-2.5 bg-[#5e53fc] hover:bg-[#4d42eb] text-white rounded-lg text-xs font-bold transition-all shadow-md cursor-pointer">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
