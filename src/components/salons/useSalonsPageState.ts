import { useState, useRef } from "react";
import { Salon } from "./types";
import { ToastItem } from "./list/SalonToasts";
import useClickOutside from "./hooks/useClickOutside";

export function useSalonsPageState(salons: Salon[]) {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedPlan, setSelectedPlan] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All regions");
  const [selectedCity, setSelectedCity] = useState("All cities");
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [isPlanDropdownOpen, setIsPlanDropdownOpen] = useState(false);
  const [regionSearch, setRegionSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [selectedSalonIds, setSelectedSalonIds] = useState<string[]>([]);
  const [activeActionMenuId, setActiveActionMenuId] = useState<string | null>(null);

  const [isReactivateModalOpen, setIsReactivateModalOpen] = useState(false);
  const [reactivateSalonId, setReactivateSalonId] = useState<string | null>(null);
  const [deleteSalonId, setDeleteSalonId] = useState<string | null>(null);
  const [suspendSalonId, setSuspendSalonId] = useState<string | null>(null);
  const [resetPasswordSalonId, setResetPasswordSalonId] = useState<string | null>(null);
  const [mailsSentSalonId, setMailsSentSalonId] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addModalStep, setAddModalStep] = useState<1 | 2>(1);
  const [addModalType, setAddModalType] = useState<"invite" | "manual" | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const triggerToast = (message: string, type: "success" | "info" | "error" = "success") => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  };

  const regionRef = useRef<HTMLDivElement>(null);
  const cityRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const planRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside([regionRef, cityRef, statusRef, planRef, menuRef], [() => setIsRegionDropdownOpen(false), () => setIsCityDropdownOpen(false), () => setIsStatusDropdownOpen(false), () => setIsPlanDropdownOpen(false), () => setActiveActionMenuId(null)]);

  const regions = ["All regions", ...Array.from(new Set(salons.map(s => s.region)))];
  const cities = ["All cities", ...Array.from(new Set(salons.map(s => s.city)))];
  const filteredRegions = regions.filter(r => r.toLowerCase().includes(regionSearch.toLowerCase()));
  const filteredCities = cities.filter(c => c.toLowerCase().includes(citySearch.toLowerCase()));

  const filteredSalons = salons.filter(s => {
    if (selectedStatus !== "All" && s.status !== selectedStatus) return false;
    if (selectedPlan !== "All" && s.plan !== selectedPlan) return false;
    if (selectedRegion !== "All regions" && s.region !== selectedRegion) return false;
    if (selectedCity !== "All cities" && s.city !== selectedCity) return false;
    return true;
  });

  const totalItems = filteredSalons.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedSalons = filteredSalons.slice(startIndex, startIndex + itemsPerPage);

  const handleSelectAll = () => {
    const paginatedIds = paginatedSalons.map(s => s.id);
    const allSelected = paginatedIds.every(id => selectedSalonIds.includes(id));
    setSelectedSalonIds(prev => allSelected ? prev.filter(id => !paginatedIds.includes(id)) : Array.from(new Set([...prev, ...paginatedIds])));
  };

  return {
    selectedStatus, setSelectedStatus, selectedPlan, setSelectedPlan, selectedRegion, setSelectedRegion,
    selectedCity, setSelectedCity, isRegionDropdownOpen, setIsRegionDropdownOpen, isCityDropdownOpen,
    setIsCityDropdownOpen, isStatusDropdownOpen, setIsStatusDropdownOpen, isPlanDropdownOpen, setIsPlanDropdownOpen,
    regionSearch, setRegionSearch, citySearch, setCitySearch, selectedSalonIds, setSelectedSalonIds,
    activeActionMenuId, setActiveActionMenuId, isReactivateModalOpen, setIsReactivateModalOpen, reactivateSalonId,
    setReactivateSalonId, deleteSalonId, setDeleteSalonId, suspendSalonId, setSuspendSalonId, resetPasswordSalonId,
    setResetPasswordSalonId, mailsSentSalonId, setMailsSentSalonId, isAddModalOpen, setIsAddModalOpen, addModalStep,
    setAddModalStep, addModalType, setAddModalType, currentPage, setCurrentPage, itemsPerPage, setItemsPerPage,
    toasts, triggerToast, regionRef, cityRef, statusRef, planRef, menuRef, filteredRegions, filteredCities,
    totalItems, totalPages, startIndex, paginatedSalons, handleSelectAll
  };
}
