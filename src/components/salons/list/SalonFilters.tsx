import React from "react";
import StatusFilter from "./StatusFilter";
import PlanFilter from "./PlanFilter";
import RegionFilter from "./RegionFilter";
import CityFilter from "./CityFilter";

interface SalonFiltersProps {
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  selectedPlan: string;
  setSelectedPlan: (plan: string) => void;
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  setCurrentPage: (page: number) => void;
  isRegionDropdownOpen: boolean;
  setIsRegionDropdownOpen: (open: boolean) => void;
  isCityDropdownOpen: boolean;
  setIsCityDropdownOpen: (open: boolean) => void;
  isStatusDropdownOpen: boolean;
  setIsStatusDropdownOpen: (open: boolean) => void;
  isPlanDropdownOpen: boolean;
  setIsPlanDropdownOpen: (open: boolean) => void;
  regionSearch: string;
  setRegionSearch: (search: string) => void;
  citySearch: string;
  setCitySearch: (search: string) => void;
  filteredRegions: string[];
  filteredCities: string[];
  regionRef: React.RefObject<HTMLDivElement | null>;
  cityRef: React.RefObject<HTMLDivElement | null>;
  statusRef: React.RefObject<HTMLDivElement | null>;
  planRef: React.RefObject<HTMLDivElement | null>;
}

export default function SalonFilters(props: SalonFiltersProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-end p-0 gap-6 w-full max-w-[1151px] h-auto pb-1 flex-none order-0 self-stretch grow-0">
        <StatusFilter
          selectedStatus={props.selectedStatus}
          setSelectedStatus={props.setSelectedStatus}
          setCurrentPage={props.setCurrentPage}
          isStatusDropdownOpen={props.isStatusDropdownOpen}
          setIsStatusDropdownOpen={props.setIsStatusDropdownOpen}
          statusRef={props.statusRef}
        />
        <PlanFilter
          selectedPlan={props.selectedPlan}
          setSelectedPlan={props.setSelectedPlan}
          setCurrentPage={props.setCurrentPage}
          isPlanDropdownOpen={props.isPlanDropdownOpen}
          setIsPlanDropdownOpen={props.setIsPlanDropdownOpen}
          planRef={props.planRef}
        />
        <RegionFilter
          selectedRegion={props.selectedRegion}
          setSelectedRegion={props.setSelectedRegion}
          setCurrentPage={props.setCurrentPage}
          isRegionDropdownOpen={props.isRegionDropdownOpen}
          setIsRegionDropdownOpen={props.setIsRegionDropdownOpen}
          regionSearch={props.regionSearch}
          setRegionSearch={props.setRegionSearch}
          filteredRegions={props.filteredRegions}
          regionRef={props.regionRef}
        />
        <CityFilter
          selectedCity={props.selectedCity}
          setSelectedCity={props.setSelectedCity}
          setCurrentPage={props.setCurrentPage}
          isCityDropdownOpen={props.isCityDropdownOpen}
          setIsCityDropdownOpen={props.setIsCityDropdownOpen}
          citySearch={props.citySearch}
          setCitySearch={props.setCitySearch}
          filteredCities={props.filteredCities}
          cityRef={props.cityRef}
        />
      </div>
    </div>
  );
}
