import React from "react";
import { planCardsData } from "./mockData";
import { Plan } from "./types";

interface BillingRevenuePlansProps {
  onOpenModal: () => void;
  onSelectPlan: (plan: Plan) => void;
}

export default function BillingRevenuePlans({ onOpenModal, onSelectPlan }: BillingRevenuePlansProps) {
  return (
    <section className="rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-bold text-[#253143]">Plan Distribution</h2>
          <p className="mt-1 text-xs font-medium text-[#9aa7b8]">Revenue breakdown by subscription plan</p>
        </div>
        <button
          onClick={onOpenModal}
          className="rounded-lg border border-[#635bff] px-4 py-2 text-[11px] font-bold text-[#635bff] hover:bg-[#635bff]/5 transition-all cursor-pointer"
        >
          View All
        </button>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {planCardsData.map((plan) => (
          <button
            key={plan.name}
            onClick={() => onSelectPlan(plan.name as Plan)}
            className="rounded-xl border border-[#edf1f6] bg-white px-7 py-5 text-left shadow-[0_5px_14px_rgba(17,31,56,0.04)] hover:border-slate-300 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-base font-extrabold">{plan.amount}</div>
                <div className="mt-1 text-xs text-[#9aa7b8]">{plan.salons}</div>
              </div>
              <span className={`${plan.label} rounded-md px-3 py-1 text-[10px] font-bold`}>{plan.name}</span>
            </div>
            <div className="mt-5 h-2 rounded-full bg-[#edf1f6]">
              <div className={`${plan.color} h-2 rounded-full`} style={{ width: plan.width }} />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
