import { HugeiconsIcon } from "@hugeicons/react";

export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedSalonId: string | null;
  setSelectedSalonId: (id: string | null) => void;
  salonSubTab: string;
  setSalonSubTab: (tab: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isExpanded?: boolean;
  setIsExpanded?: (val: boolean) => void;
}

export interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedSalonId: string | null;
  toggleSidebar: () => void;
  isSidebarExpanded?: boolean;
}

export interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedSalonId: string | null;
  setSelectedSalonId: (id: string | null) => void;
  salonSubTab: string;
  setSalonSubTab: (tab: string) => void;
  impersonatingSalon: string | null;
  setImpersonatingSalon: (name: string | null) => void;
}
