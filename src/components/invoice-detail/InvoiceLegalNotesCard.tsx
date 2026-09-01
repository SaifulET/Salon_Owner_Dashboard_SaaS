import React from "react";

export default function InvoiceLegalNotesCard() {
  const notes = [
    "Invoice issued pursuant to art. 21 of Presidential Decree 26 October 1972, n. 633 and subsequent amendments.",
    "VAT paid by the purchaser pursuant to art. 17, paragraph 6, of Presidential Decree 26 October 1972, n. 633.",
    "Digitally signed electronic document pursuant to Legislative Decree 82/2005.",
    "Replacement storage of documents pursuant to the Ministerial Decree of 17 June 2014.",
    "Competent court: Milan. Applicable law: Italian.",
    "Company subject to the management and coordination of [Holding Company]."
  ];

  return (
    <>
      <div
        className="flex flex-col items-start w-full"
        style={{
          padding: "30px",
          gap: "16px",
          background: "#FFFFFF",
          boxShadow: "0px 2px 4px -1px rgba(175, 182, 201, 0.2)",
          borderRadius: "12px"
        }}
      >
        <h2 style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: "22px", lineHeight: "26px", color: "#29343D" }}>
          Legal Notes
        </h2>
        <ul className="flex flex-col gap-2 text-[12px] font-medium text-slate-450 leading-relaxed list-none pl-0 w-full">
          {notes.map((note, idx) => (
            <li key={idx} className="flex gap-2.5 items-start">
              <span className="text-[#9aa7b8] text-sm">•</span>
              <span style={{ fontFamily: "Manrope", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "#999999" }}>
                {note}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center text-[11px] font-semibold text-slate-400 mt-2 flex flex-col gap-1 leading-normal w-full" style={{ color: "#98A4AE", fontFamily: "Manrope" }}>
        <p>SalonFlow Srl - Via Roma, 123 - 20121 Milan (MI) - VAT number: IT12345678901</p>
        <p>Share Capital: € 10,000.00 iv - REA MI-1234567 - SDI Code: XXXXXXX</p>
        <p>
          <a href="https://www.salonflow.it" target="_blank" rel="noreferrer" className="hover:text-[#635BFF] transition-colors">www.salonflow.it</a>
          {" - "}
          <a href="mailto:info@salonflow.it" className="hover:text-[#635BFF] transition-colors">info@salonflow.it</a>
          {" - Tel: +39 02 1234567"}
        </p>
      </div>
    </>
  );
}
