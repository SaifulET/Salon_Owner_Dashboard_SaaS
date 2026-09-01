import { SystemData, SecurityData, BillingData, NotificationData } from "./types";

export const initialSystemData: SystemData = {
  platformName: "Yourcompany",
  supportEmail: "support@yourcompany.com",
  trialDays: "14",
  maxSalons: "10",
  defaultPlan: "Basic",
  maintenanceMode: true,
  newSignupsEnabled: true,
  autoBackup: true
};

export const initialSecurityData: SecurityData = {
  sessionTimeout: "30",
  minPasswordLength: "8",
  maxLoginAttempts: "5",
  lockoutDuration: "15",
  twoFactorEnabled: false,
  impersonateSalons: true,
  recoveryEmail: "test@test.com",
  recoveryPhone: "3482938493",
  devices: [
    { id: 1, name: "iPhone 14", location: "London UK, Oct 23 at 1:15 AM", type: "mobile" },
    { id: 2, name: "Macbook Air", location: "Gujarat India, Oct 24 at 3:15 AM", type: "desktop" }
  ]
};

export const initialBillingData: BillingData = {
  enableStripe: true,
  stripePublishableKey: "••••••••",
  stripeSecretKey: "••••••••",
  currency: "EUR (€)",
  taxRate: "22",
  invoicePrefix: "INV-",
  gracePeriod: "3"
};

export const initialNotificationData: NotificationData = {
  paymentFailures: true,
  newSignups: true,
  systemAlerts: true,
  weeklyReports: false,
  monthlyReports: true,
  webhookUrl: "",
  stripeSecretKey: ""
};
