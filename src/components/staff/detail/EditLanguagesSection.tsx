import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { Language } from "./AdditionalDataCard";

interface EditLanguagesSectionProps {
  languages: Language[];
  setLanguages: React.Dispatch<React.SetStateAction<Language[]>>;
}

export default function EditLanguagesSection({ languages, setLanguages }: EditLanguagesSectionProps) {
  const [newLang, setNewLang] = useState("French");
  const [newLangLevel, setNewLangLevel] = useState("Intermediate");

  return (
    <div className="border border-slate-200 rounded-xl p-5 flex flex-col gap-4">
      <span className="text-sm font-semibold text-slate-700">Languages</span>
      {languages.map((l, idx) => (
        <div key={idx} className="grid grid-cols-2 gap-4 relative">
          <button
            type="button"
            onClick={() => setLanguages(prev => prev.filter((_, i) => i !== idx))}
            className="absolute right-0 -top-2 text-rose-400 hover:text-rose-600 transition-colors cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
            </svg>
          </button>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-500">Language *</label>
            <div className="relative">
              <select
                value={l.lang}
                onChange={(e) => {
                  const val = e.target.value;
                  setLanguages(prev => prev.map((item, i) => i === idx ? { ...item, lang: val } : item));
                }}
                className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-lg px-3 py-2.5 text-sm text-slate-700 bg-white appearance-none cursor-pointer"
              >
                <option>Italian</option><option>English</option><option>Spanish</option><option>French</option><option>German</option><option>Portuguese</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-500">Level *</label>
            <div className="relative">
              <select
                value={l.level}
                onChange={(e) => {
                  const val = e.target.value;
                  setLanguages(prev => prev.map((item, i) => i === idx ? { ...item, level: val } : item));
                }}
                className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-lg px-3 py-2.5 text-sm text-slate-700 bg-white appearance-none cursor-pointer"
              >
                <option>Native</option><option>Advanced</option><option>Intermediate</option><option>Beginner</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex gap-2">
        <select value={newLang} onChange={(e) => setNewLang(e.target.value)} className="flex-1 border border-slate-200 rounded-lg px-3 py-1.5 text-xs bg-white">
          <option>French</option><option>German</option><option>Portuguese</option><option>Italian</option><option>English</option><option>Spanish</option>
        </select>
        <select value={newLangLevel} onChange={(e) => setNewLangLevel(e.target.value)} className="flex-1 border border-slate-200 rounded-lg px-3 py-1.5 text-xs bg-white">
          <option>Intermediate</option><option>Beginner</option><option>Native</option><option>Advanced</option>
        </select>
        <button
          type="button"
          onClick={() => { setLanguages(prev => [...prev, { lang: newLang, level: newLangLevel }]); }}
          className="px-4 py-1.5 bg-[#5e53fc] hover:bg-[#4d42eb] text-white rounded-lg text-xs font-semibold cursor-pointer"
        >
          Add
        </button>
      </div>
    </div>
  );
}
