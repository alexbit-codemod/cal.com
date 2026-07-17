// Re-export all services for backward compatibility
export { BillingPortalService } from "./services/base/BillingPortalService";
export { TeamBillingPortalService } from "./services/team/TeamBillingPortalService";
export { OrganizationBillingPortalService } from "./services/organization/OrganizationBillingPortalService";
export { UserBillingPortalService } from "./services/user/UserBillingPortalService";
export { BillingPortalServiceFactory } from "./services/factory/BillingPortalServiceFactory";

export type { TeamEntity, BillingPortalResult } from "./services/base/BillingPortalService";
