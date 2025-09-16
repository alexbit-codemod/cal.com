export enum Resource {
  All = "*",
  EventType = "eventType",
  Team = "team",
  Organization = "organization",
  Attributes = "organization.attributes",
  Booking = "booking",
  Insights = "insights",
  Role = "role",
  RoutingForm = "routingForm",
  Workflow = "workflow",
}

export enum CrudAction {
  All = "*",
  Create = "create",
  Read = "read",
  Update = "update",
  Delete = "delete",
  Manage = "manage",
}

export enum CustomAction {
  Invite = "invite",
  Remove = "remove",
  ChangeMemberRole = "changeMemberRole",
  ListMembers = "listMembers",
  ManageBilling = "manageBilling",
  ReadTeamBookings = "readTeamBookings",
  ReadOrgBookings = "readOrgBookings",
  ReadRecordings = "readRecordings",
}

export enum Scope {
  Team = "team",
  Organization = "organization",
}

export interface PermissionDetails {
  description: string;
  category: string;
  i18nKey: string;
  descriptionI18nKey: string;
  scope?: Scope[]; // Optional for backward compatibility
}

export type ResourceConfig = {
  _resource?: {
    i18nKey: string;
  };
} & {
  [key in CrudAction | CustomAction]?: PermissionDetails;
};

export type PermissionRegistry = {
  [key in Resource]: ResourceConfig;
};

export type PermissionString = `${Resource}.${CrudAction | CustomAction}`;

/**
 * Helper function to filter out the _resource property from a ResourceConfig
 * @param config The ResourceConfig to filter
 * @returns A new object without the _resource property
 */
export const filterResourceConfig = (config: ResourceConfig): Omit<ResourceConfig, "_resource"> => {
  const { _resource, ...rest } = config;
  return rest;
};

/**
 * Filter resources and actions based on scope
 * @param scope The scope to filter by (Team or Organization)
 * @returns Filtered permission registry
 */
export const getPermissionsForScope = (scope: Scope): PermissionRegistry => {
  const filteredRegistry: Partial<PermissionRegistry> = {};

  Object.entries(PERMISSION_REGISTRY).forEach(([resource, config]) => {
    const filteredConfig: ResourceConfig = { _resource: config._resource };

    Object.entries(config).forEach(([action, details]) => {
      if (action === "_resource") return;

      const permissionDetails = details as PermissionDetails;
      // If no scope is defined, include in both Team and Organization (backward compatibility)
      // If scope is defined, only include if it matches the requested scope
      if (!permissionDetails.scope || permissionDetails.scope.includes(scope)) {
        filteredConfig[action as CrudAction | CustomAction] = permissionDetails;
      }
    });

    // Only include resource if it has at least one action for this scope
    const hasActions = Object.keys(filteredConfig).length > 1; // > 1 because _resource is always there
    if (hasActions) {
      filteredRegistry[resource as Resource] = filteredConfig;
    }
  });

  return filteredRegistry as PermissionRegistry;
};

// Keep in mind these are on a team/organization level, not a user level
export const PERMISSION_REGISTRY: PermissionRegistry = {
  [Resource.All]: {
    _resource: {
      i18nKey: "pbac_resource_all",
    },
    [CrudAction.All]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "system",
      i18nKey: "pbac_resource_all",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      scope: [Scope.Organization], // Only organizations should have "All" permissions
    },
  },
  [Resource.Role]: {
    _resource: {
      i18nKey: "pbac_resource_role",
    },
    [CrudAction.Create]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "role",
      i18nKey: "pbac_action_create",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Read]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "role",
      i18nKey: "pbac_action_read",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Update]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "role",
      i18nKey: "pbac_action_update",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Delete]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "role",
      i18nKey: "pbac_action_delete",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Manage]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "role",
      i18nKey: "pbac_action_manage",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      scope: [Scope.Organization], // Only organizations should have "Manage" permissions
    },
  },
  [Resource.EventType]: {
    _resource: {
      i18nKey: "pbac_resource_event_type",
    },
    [CrudAction.Create]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "event",
      i18nKey: "pbac_action_create",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Read]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "event",
      i18nKey: "pbac_action_read",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Update]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "event",
      i18nKey: "pbac_action_update",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Delete]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "event",
      i18nKey: "pbac_action_delete",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Manage]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "event",
      i18nKey: "pbac_action_manage",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      scope: [Scope.Organization], // Only organizations should have "Manage" permissions
    },
  },
  [Resource.Team]: {
    _resource: {
      i18nKey: "pbac_resource_team",
    },
    [CrudAction.Create]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "team",
      i18nKey: "pbac_action_create",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      scope: [Scope.Organization],
    },
    [CrudAction.Read]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "team",
      i18nKey: "pbac_action_read",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Update]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "team",
      i18nKey: "pbac_action_update",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Delete]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "team",
      i18nKey: "pbac_action_delete",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CustomAction.Invite]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "team",
      i18nKey: "pbac_action_invite",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CustomAction.Remove]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "team",
      i18nKey: "pbac_action_remove",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CustomAction.ChangeMemberRole]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "team",
      i18nKey: "pbac_action_change_member_role",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Manage]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "team",
      i18nKey: "pbac_action_manage",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      scope: [Scope.Organization], // Only organizations should have "Manage" permissions
    },
  },
  [Resource.Organization]: {
    _resource: {
      i18nKey: "pbac_resource_organization",
    },
    [CrudAction.Create]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "org",
      i18nKey: "pbac_action_create",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      scope: [Scope.Organization],
    },
    [CrudAction.Read]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "org",
      i18nKey: "pbac_action_read",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      scope: [Scope.Organization],
    },
    [CustomAction.ListMembers]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "org",
      i18nKey: "pbac_action_list_members",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      scope: [Scope.Organization],
    },
    [CustomAction.Invite]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "org",
      i18nKey: "pbac_action_invite",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      scope: [Scope.Organization],
    },
    [CustomAction.Remove]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "org",
      i18nKey: "pbac_action_remove",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      scope: [Scope.Organization],
    },
    [CustomAction.ManageBilling]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "org",
      i18nKey: "pbac_action_manage_billing",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      scope: [Scope.Organization],
    },
    [CustomAction.ChangeMemberRole]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "org",
      i18nKey: "pbac_action_change_member_role",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      scope: [Scope.Organization],
    },
    [CrudAction.Update]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "org",
      i18nKey: "pbac_action_update",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      scope: [Scope.Organization],
    },
  },
  [Resource.Booking]: {
    _resource: {
      i18nKey: "pbac_resource_booking",
    },
    [CrudAction.Read]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "booking",
      i18nKey: "pbac_action_read",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CustomAction.ReadTeamBookings]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "booking",
      i18nKey: "pbac_action_read_team_bookings",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      scope: [Scope.Team],
    },
    [CustomAction.ReadOrgBookings]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "booking",
      i18nKey: "pbac_action_read_org_bookings",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      scope: [Scope.Organization],
    },
    [CustomAction.ReadRecordings]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "booking",
      i18nKey: "pbac_action_read_recordings",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Update]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "booking",
      i18nKey: "pbac_action_update",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Manage]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "booking",
      i18nKey: "pbac_action_manage",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      scope: [Scope.Organization], // Only organizations should have "Manage" permissions
    },
  },
  [Resource.Insights]: {
    _resource: {
      i18nKey: "pbac_resource_insights",
    },
    [CrudAction.Read]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "insights",
      i18nKey: "pbac_action_read",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
  },
  [Resource.Workflow]: {
    _resource: {
      i18nKey: "pbac_resource_workflow",
    },
    [CrudAction.Create]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "workflow",
      i18nKey: "pbac_action_create",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Read]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "workflow",
      i18nKey: "pbac_action_read",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Update]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "workflow",
      i18nKey: "pbac_action_update",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Delete]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "workflow",
      i18nKey: "pbac_action_delete",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Manage]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "workflow",
      i18nKey: "pbac_action_manage",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      scope: [Scope.Organization],
    },
  },
  [Resource.Attributes]: {
    _resource: {
      i18nKey: "pbac_resource_attributes",
    },
    [CrudAction.Read]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "attributes",
      i18nKey: "pbac_action_read",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Update]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "attributes",
      i18nKey: "pbac_action_update",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Delete]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "attributes",
      i18nKey: "pbac_action_delete",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Create]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "attributes",
      i18nKey: "pbac_action_create",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
  },
  [Resource.RoutingForm]: {
    _resource: {
      i18nKey: "pbac_resource_routing_form",
    },
    [CrudAction.Create]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "routing",
      i18nKey: "pbac_action_create",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Read]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "routing",
      i18nKey: "pbac_action_read",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Update]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "routing",
      i18nKey: "pbac_action_update",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Delete]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "routing",
      i18nKey: "pbac_action_delete",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    [CrudAction.Manage]: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      category: "routing",
      i18nKey: "pbac_action_manage",
      descriptionI18nKey: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      scope: [Scope.Organization],
    },
  },
};
