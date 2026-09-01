"use client";

import React, { useState, useMemo } from "react";
import RecentActivityHeader from "./RecentActivityHeader";
import RecentActivityFilters from "./RecentActivityFilters";
import RecentActivityTable from "./RecentActivityTable";
import { initialRecentActivities } from "./mockData";
import { ActivityDetail } from "./types";

interface RecentActivityPageProps {
  currentRange: string;
  onRangeChange: (rangeStr: string) => void;
}

export default function RecentActivityPage({ currentRange, onRangeChange }: RecentActivityPageProps) {
  const [selectedSalon, setSelectedSalon] = useState("All Salons");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const [isSalonDropdownOpen, setIsSalonDropdownOpen] = useState(false);
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);

  const mockActivities: ActivityDetail[] = initialRecentActivities;

  const filteredActivities = useMemo(() => {
    return mockActivities.filter((item) => {
      if (selectedSalon !== "All Salons") {
        if (selectedSalon === "Elite Beauty Group S.p.A." && item.salonName !== "Elite Beauty Group S.p.A.") return false;
        if (selectedSalon === "Glamour Lounge SRL" && item.salonName !== "Glamour Lounge SRL") return false;
        if (item.salonName !== selectedSalon && !item.salonName.startsWith(selectedSalon)) return false;
      }
      if (selectedType !== "All Types" && item.activityType !== selectedType) return false;
      if (currentRange === "Today" && item.dateKey !== "Today") return false;
      if (currentRange === "Last 7 Days" && item.dateKey !== "Today" && item.dateKey !== "Last 7 Days") return false;
      return true;
    });
  }, [mockActivities, selectedSalon, selectedType, currentRange]);

  const totalPages = Math.ceil(filteredActivities.length / itemsPerPage) || 1;
  const paginatedActivities = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredActivities.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredActivities, currentPage, itemsPerPage]);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) setSelectedRows(paginatedActivities.map((item) => item.id));
    else setSelectedRows([]);
  };

  const handleSelectRow = (id: string, checked: boolean) => {
    if (checked) setSelectedRows((prev) => [...prev, id]);
    else setSelectedRows((prev) => prev.filter((rowId) => rowId !== id));
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <RecentActivityHeader />
      <RecentActivityFilters
        selectedSalon={selectedSalon} setSelectedSalon={setSelectedSalon}
        selectedType={selectedType} setSelectedType={setSelectedType}
        currentRange={currentRange} onRangeChange={onRangeChange}
        setCurrentPage={setCurrentPage}
        isSalonDropdownOpen={isSalonDropdownOpen} setIsSalonDropdownOpen={setIsSalonDropdownOpen}
        isTypeDropdownOpen={isTypeDropdownOpen} setIsTypeDropdownOpen={setIsTypeDropdownOpen}
      />
      <RecentActivityTable
        paginatedActivities={paginatedActivities}
        selectedRows={selectedRows}
        onSelectAll={handleSelectAll}
        onSelectRow={handleSelectRow}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        totalItems={filteredActivities.length}
      />
    </div>
  );
}
