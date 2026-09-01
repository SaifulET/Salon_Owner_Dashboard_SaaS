"use client";

import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import AppViewRouter from "./AppViewRouter";
import SalonSubViewRouter from "./SalonSubViewRouter";
import { Salon, Employee } from "./types";
import { initialSalons } from "./mockData";

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [dateRange, setDateRange] = useState("All Time");
  const [selectedSalonId, setSelectedSalonId] = useState<string | null>(null);
  const [salonSubTab, setSalonSubTab] = useState<string>("overview");
  const [activePermissionEmployeeId, setActivePermissionEmployeeId] = useState<string | null>(null);
  const [impersonatingSalon, setImpersonatingSalon] = useState<string | null>(null);
  const [salons, setSalons] = useState<Salon[]>(initialSalons);
  const [employeesBySalon, setEmployeesBySalon] = useState<Record<string, Employee[]>>({});

  const activeSalon = activeTab === "salons" && selectedSalonId !== null ? salons.find((s) => s.id === selectedSalonId) : null;

  return (
    <Layout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      selectedSalonId={selectedSalonId}
      setSelectedSalonId={setSelectedSalonId}
      salonSubTab={salonSubTab}
      setSalonSubTab={setSalonSubTab}
      impersonatingSalon={impersonatingSalon}
      setImpersonatingSalon={setImpersonatingSalon}
    >
      {activeSalon ? (
        <SalonSubViewRouter
          salon={activeSalon}
          salonSubTab={salonSubTab}
          setSalonSubTab={setSalonSubTab}
          onBack={() => { setSelectedSalonId(null); setSalonSubTab("overview"); }}
          onImpersonate={(name, silent) => { if (!silent) setImpersonatingSalon(name); }}
          activePermissionEmployeeId={activePermissionEmployeeId}
          setActivePermissionEmployeeId={setActivePermissionEmployeeId}
          employeesBySalon={employeesBySalon}
          setEmployeesBySalon={setEmployeesBySalon}
        />
      ) : (
        <AppViewRouter
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          salons={salons}
          setSalons={setSalons}
          selectedSalonId={selectedSalonId}
          setSelectedSalonId={setSelectedSalonId}
          setSalonSubTab={setSalonSubTab}
          impersonatingSalon={impersonatingSalon}
          setImpersonatingSalon={setImpersonatingSalon}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
      )}
    </Layout>
  );
}
