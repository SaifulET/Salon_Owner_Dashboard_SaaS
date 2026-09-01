export interface DeviceItem {
  id: number;
  name: string;
  location: string;
  type: string;
}

export interface SecurityData {
  sessionTimeout: string;
  minPasswordLength: string;
  maxLoginAttempts: string;
  lockoutDuration: string;
  twoFactorEnabled: boolean;
  impersonateSalons: boolean;
  recoveryEmail: string;
  recoveryPhone: string;
  devices: DeviceItem[];
}

export interface SystemData {
  platformName: string;
  supportEmail: string;
  trialDays: string;
  maxSalons: string;
  defaultPlan: string;
  maintenanceMode: boolean;
  newSignupsEnabled: boolean;
  autoBackup: boolean;
}

export interface BillingData {
  enableStripe: boolean;
  stripePublishableKey: string;
  stripeSecretKey: string;
  currency: string;
  taxRate: string;
  invoicePrefix: string;
  gracePeriod: string;
}

export interface NotificationData {
  paymentFailures: boolean;
  newSignups: boolean;
  systemAlerts: boolean;
  weeklyReports: boolean;
  monthlyReports: boolean;
  webhookUrl: string;
  stripeSecretKey: string;
}
