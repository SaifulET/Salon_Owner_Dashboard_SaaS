import React from "react";
import { PlusIcon, TrashIcon } from "../icons/SalonIcons";

interface DocumentItem {
  id: string;
  title: string;
  size: string;
  type: string;
  updated: string;
  fileUrl?: string;
}

interface DocumentsTabProps {
  documentsList: DocumentItem[];
  setDocumentsList: React.Dispatch<React.SetStateAction<DocumentItem[]>>;
}

export default function DocumentsTab({
  documentsList,
  setDocumentsList
}: DocumentsTabProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(1) + " MB";
      const ext = file.name.split(".").pop()?.toUpperCase() || "PDF";
      const fileUrl = URL.createObjectURL(file);
      setDocumentsList(prev => [
        ...prev,
        {
          id: `doc-${Date.now()}`,
          title: file.name,
          size: sizeInMB,
          type: ext,
          updated: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
          fileUrl: fileUrl
        }
      ]);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-6 animate-in fade-in duration-200">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h3 className="text-sm font-bold text-slate-800 font-sans">Company Documentation</h3>
        
        <input 
          type="file" 
          id="file-upload-input" 
          style={{ display: "none" }} 
          onChange={handleFileChange}
        />

        <button 
          onClick={() => document.getElementById("file-upload-input")?.click()}
          className="px-4 py-2 bg-[#5e53fc] hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
        >
          <PlusIcon />
          <span>Upload Document</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-semibold">
        {documentsList.map((doc) => (
          <div key={doc.id} className="border border-slate-100 rounded-2xl p-5 bg-slate-50/10 flex flex-col items-center text-center relative hover:shadow-sm transition-all group">
            <div className="w-12 h-12 rounded-full bg-indigo-50 text-[#5e53fc] flex items-center justify-center mb-3.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>

            <h4 className="text-xs font-bold text-slate-800 line-clamp-1 mb-1">{doc.title}</h4>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{doc.type} • {doc.size}</span>
            <span className="text-[10px] font-semibold text-slate-400 mb-5">Updated: {doc.updated}</span>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => window.open(doc.fileUrl || "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "_blank")}
                className="w-8 h-8 rounded-full bg-indigo-50 text-[#5e53fc] hover:bg-indigo-100 transition-colors flex items-center justify-center cursor-pointer"
                title="View"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
              <button 
                onClick={() => setDocumentsList(prev => prev.filter(d => d.id !== doc.id))}
                className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 hover:bg-rose-100 transition-colors flex items-center justify-center cursor-pointer"
                title="Delete"
              >
                <TrashIcon />
              </button>
              <button 
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = doc.fileUrl || "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
                  link.download = doc.title;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="w-8 h-8 rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100 transition-colors flex items-center justify-center cursor-pointer"
                title="Download"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
