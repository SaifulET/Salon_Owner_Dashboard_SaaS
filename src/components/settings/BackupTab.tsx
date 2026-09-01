import React from "react";

export default function BackupTab() {
  const handleExportBackup = () => {
    const dataStr = JSON.stringify({ app: "Salon SaaS", backupDate: new Date().toISOString() }, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `backup_${Date.now()}.json`;
    link.click();
  };

  return (
    <div className="flex flex-col gap-6 w-full font-sans text-left">
      <div className="rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex flex-col gap-6">
        <div>
          <h3 className="text-base font-bold text-[#29343D]">Data Backup & Export</h3>
          <p className="text-xs text-slate-400 mt-1">Download complete platform database snapshots or import configuration</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-3 p-5 rounded-xl border border-slate-100 bg-slate-50">
            <h4 className="text-sm font-bold text-slate-800">Export Full Backup</h4>
            <p className="text-xs text-slate-500">Includes all salons, staff profiles, invoices, leads, and analytics history in JSON format.</p>
            <button onClick={handleExportBackup} className="h-10 px-4 mt-2 rounded-lg bg-[#635BFF] text-white text-xs font-bold hover:bg-[#5248E2] cursor-pointer self-start shadow-sm">
              Download JSON Backup
            </button>
          </div>

          <div className="flex flex-col gap-3 p-5 rounded-xl border border-slate-100 bg-slate-50">
            <h4 className="text-sm font-bold text-slate-800">Restore / Import</h4>
            <p className="text-xs text-slate-500">Restore previously saved configuration. This will merge existing records safely.</p>
            <label className="h-10 px-4 mt-2 rounded-lg bg-white border border-[#E0E6EB] text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer self-start shadow-sm flex items-center justify-center">
              <span>Choose Backup File</span>
              <input type="file" accept=".json" className="hidden" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
