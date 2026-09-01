export interface SalonActivity {
  type: "upgrade" | "addUser" | "login" | "updateProfile";
  title: string;
  description: string;
  timestamp: string;
  performer: string;
  badgeBg: string;
  badgeText: string;
  iconBg: string;
  titleColor: string;
}
