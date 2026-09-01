import React from "react";

export interface Language {
  lang: string;
  level: string;
}

interface AdditionalDataCardProps {
  certifications: string[];
  languages: Language[];
  courses: string[];
  manager: string;
  setIsEditAdditionalOpen: (open: boolean) => void;
}

export default function AdditionalDataCard({
  certifications,
  languages,
  courses,
  manager,
  setIsEditAdditionalOpen
}: AdditionalDataCardProps) {
  return (
    <div className="border border-slate-100 rounded-3xl p-6 bg-white flex flex-col relative">
      <button
        onClick={() => setIsEditAdditionalOpen(true)}
        className="absolute right-6 top-6 px-4.5 py-1.5 border border-slate-100 hover:bg-slate-50 text-[#5e53fc] rounded-xl text-[11px] font-bold transition-all cursor-pointer"
      >
        Edit
      </button>
      <h3 className="text-sm font-extrabold text-slate-800 mb-6 uppercase tracking-wider">Additional Data</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Certifications</span>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, idx) => (
                <span key={idx} className="bg-slate-100/60 text-slate-600 px-3 py-1.5 rounded-xl text-[10px] font-bold">
                  {cert}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Languages</span>
            <div className="flex flex-col gap-1.5">
              {languages.map((l, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-slate-700 font-bold">{l.lang}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[8px] font-extrabold uppercase ${
                      l.level === "Native"
                        ? "bg-purple-50 text-purple-600"
                        : l.level === "Advanced"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-orange-50 text-orange-600"
                    }`}
                  >
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Completed Courses</span>
            <div className="flex flex-col gap-1 font-bold text-slate-700">
              {courses.map((course, idx) => (
                <span key={idx} className="block leading-relaxed">
                  {course}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Direct Manager</span>
            <span className="text-slate-700 font-bold">{manager}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
