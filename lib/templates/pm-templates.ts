import swmsLibrary from "./swms-library.json";

/** Reusable form definitions only. This module creates no projects or completed records. */
export type PMTemplateId =
  | "site-preparation" | "site-inspection" | "installation" | "commissioning"
  | "completion" | "warranty" | "nonconformity" | "swms";
export type PMApplicability = "applicable" | "not_applicable" | "review_required";
export type PMSupplyModel = "supply_only" | "supply_installation" | "supply_commissioning" | "supply_installation_commissioning";
export interface PMScope {
  supplyModel?: PMSupplyModel | string | null;
  installationIncluded?: boolean | null;
  commissioningIncluded?: boolean | null;
  processorIncluded?: boolean | null;
  mediaPlayerIncluded?: boolean | null;
  cmsIncluded?: boolean | null;
  touchIncluded?: boolean | null;
  sparePartsIncluded?: boolean | null;
  accessEquipmentRequired?: boolean | null;
  electricalIsolationRequired?: boolean | null;
}
export type PMScopeFlag = Exclude<keyof PMScope, "supplyModel">;
export interface PMTemplate {
  id: PMTemplateId;
  title: string;
  referencePrefix: string;
  audience: "client" | "internal" | "site-parties";
  trackerVisibility: "finalised-only" | "never";
  editor: "pre-filled-pack" | "continuous-checklist" | "evidence-wizard" | "review" | "certificate" | "observation-form" | "swms-tabs";
  scope: "project";
  applicability: "always" | "installation" | "commissioning";
  prefill: readonly string[];
  editableFields: readonly string[];
  requiresSignature: false;
  finaliseLabel: string;
  retainIssuedVersions: true;
}

const projectPrefill = ["project.number", "project.name", "project.siteAddress", "project.infs", "quote.acceptedReference", "user.name", "user.position", "system.issueDate"] as const;
export const pmTemplates: Readonly<Record<PMTemplateId, PMTemplate>> = {
  "site-preparation": {
    id: "site-preparation", title: "Client Site Preparation Pack", referencePrefix: "SP",
    audience: "client", trackerVisibility: "finalised-only", editor: "pre-filled-pack", scope: "project", applicability: "installation",
    prefill: [...projectPrefill, "project.installationDate", "project.pmContact", "production.releasedSchematics", "production.releasedDeploymentProfiles"],
    editableFields: ["reviewByDate", "productionAttachmentRevisions"], requiresSignature: false, finaliseLabel: "Issue & open PDF", retainIssuedVersions: true,
  },
  "site-inspection": {
    id: "site-inspection", title: "Pre-installation Inspection", referencePrefix: "PSIR",
    audience: "internal", trackerVisibility: "never", editor: "continuous-checklist", scope: "project", applicability: "installation",
    prefill: [...projectPrefill, "project.installationDate", "project.installers", "project.electricalContact"],
    editableFields: ["inspectionDate", "checks"], requiresSignature: false, finaliseLabel: "Record & open PDF", retainIssuedVersions: true,
  },
  installation: {
    id: "installation", title: "Installation Completion Record", referencePrefix: "ICR",
    audience: "client", trackerVisibility: "finalised-only", editor: "evidence-wizard", scope: "project", applicability: "installation",
    prefill: [...projectPrefill, "project.installationDate", "project.installers", "quote.installationScope", "production.approvedDrawings", "production.spareParts"],
    editableFields: ["evidence", "notApplicableRequests", "finalConfirmation"], requiresSignature: false, finaliseLabel: "Finalise & open PDF", retainIssuedVersions: true,
  },
  commissioning: {
    id: "commissioning", title: "Commissioning & UAT Record", referencePrefix: "UAT",
    audience: "client", trackerVisibility: "finalised-only", editor: "evidence-wizard", scope: "project", applicability: "commissioning",
    prefill: [...projectPrefill, "quote.commissioningScope", "project.commissioningPartner", "production.approvedSchematics"],
    editableFields: ["evidence", "notApplicableRequests", "finalConfirmation"], requiresSignature: false, finaliseLabel: "Finalise & open PDF", retainIssuedVersions: true,
  },
  completion: {
    id: "completion", title: "Project Completion Form", referencePrefix: "PC",
    audience: "client", trackerVisibility: "finalised-only", editor: "review", scope: "project", applicability: "always",
    prefill: [...projectPrefill, "installation.latestIssuedRevision", "commissioning.latestIssuedRevision", "production.dispatchRecord", "project.practicalCompletionDate", "project.handoverDate"],
    editableFields: ["practicalCompletionDate", "handoverDate", "finalConfirmation"], requiresSignature: false, finaliseLabel: "Finalise & open PDF", retainIssuedVersions: true,
  },
  warranty: {
    id: "warranty", title: "Warranty & Care Certificate", referencePrefix: "WC",
    audience: "client", trackerVisibility: "finalised-only", editor: "certificate", scope: "project", applicability: "always",
    prefill: [...projectPrefill, "quote.clientName", "quote.infWarrantyTerms", "quote.infCareTerms", "project.practicalCompletionDate", "project.handoverDate"],
    editableFields: ["practicalCompletionDate", "handoverDate"], requiresSignature: false, finaliseLabel: "Issue & open PDF", retainIssuedVersions: true,
  },
  nonconformity: {
    id: "nonconformity", title: "Non-conformity & Improvement Report", referencePrefix: "NCIR",
    audience: "internal", trackerVisibility: "never", editor: "observation-form", scope: "project", applicability: "always",
    prefill: projectPrefill, editableFields: ["observationDate", "observations"], requiresSignature: false, finaliseLabel: "Record & open PDF", retainIssuedVersions: true,
  },
  swms: {
    id: "swms", title: "Safe Work Method Statement", referencePrefix: "SWMS",
    audience: "site-parties", trackerVisibility: "never", editor: "swms-tabs", scope: "project", applicability: "installation",
    prefill: [...projectPrefill, "project.productCategories", "project.installationDate", "project.installers", "project.installationCompany", "user.employer", "system.issueTimestamp"],
    editableFields: ["installerPersonnel", "selectedActivities", "siteSpecificDetails"], requiresSignature: false, finaliseLabel: "Issue & open PDF", retainIssuedVersions: true,
  },
};

export const pmTemplateOrder: readonly PMTemplateId[] = ["site-preparation", "site-inspection", "swms", "installation", "commissioning", "completion", "warranty", "nonconformity"];

export interface SitePreparationInstruction { id: string; title: string; items: readonly string[]; requires?: PMScopeFlag; }
export const sitePreparationInstructions: readonly SitePreparationInstruction[] = [
  { id: "access", title: "Access, parking & arrival", items: [
    "Confirm the site access route, parking or loading area, permitted hours and key or security arrangements with your TINNOX PM.",
    "Provide building access and induction requirements before the visit. Keep agreed access routes and emergency exits clear.",
  ] },
  { id: "work-area", title: "Work area, lighting & exclusion zone", items: [
    "Clear the agreed installation area, provide existing site lighting and identify finishes or occupied areas that need protection.",
    "Agree the work exclusion area with your TINNOX PM and arrange for occupants to stay outside it during the work.",
  ] },
  { id: "noise", title: "Working hours, noise & neighbours", items: [
    "Confirm permitted work hours and building restrictions. Inform affected neighbours, tenants or other occupants before the agreed work period.",
    "Tell your TINNOX PM about noise-sensitive activities and any restrictions on service interruptions.",
  ] },
  { id: "delivery", title: "Delivery, unloading & storage", items: [
    "Confirm on-site unloading access, arrival instructions and the site receiving contact with your TINNOX PM before the site delivery.",
    "Identify any access restrictions and agree protected storage if equipment will remain on site before installation.",
  ] },
  { id: "access-equipment", title: "Access equipment, where required", requires: "accessEquipmentRequired", items: [
    "If access equipment is required, confirm the available entry route, access restrictions and work area with your TINNOX PM.",
    "Equipment selection and operating arrangements are coordinated by the installation team. Refer technical suitability questions to your TINNOX PM.",
  ] },
  { id: "technical", title: "Power, data & mounting preparation", items: [
    "Arrange the customer-responsible power, data and building preparation shown in the attached Production documents. Coordinate the required work with your nominated trades.",
    "The schematic defines connections; the deployment profile defines the relevant mounting and site preparation. Tell your TINNOX PM if site conditions differ before affected work proceeds.",
  ] },
  { id: "protection", title: "Protection, dust, waste & clean-up", items: [
    "Identify areas, finishes or equipment requiring protection and any dust-sensitive activities.",
    "Agree waste locations, packaging removal and any building clean-up requirements with your TINNOX PM.",
  ] },
  { id: "emergency", title: "Site contacts & emergency arrangements", items: [
    "Provide the site arrival contact, emergency arrangements and any building-specific induction or permit requirements.",
    "Inform your TINNOX PM about other trades working in the same area and any planned access or service interruptions.",
  ] },
];

export const sitePreparationAttachmentRequirements = [
  { id: "schematic", title: "Project System Schematic", owner: "production", source: "production.releasedSchematics", required: true, per: "project", content: ["INF-specific system connections", "Power and data connection schedule", "Equipment and interface references", "Technical notes and revision record"] },
  { id: "deployment", title: "Deployment Profile", owner: "production", source: "production.releasedDeploymentProfiles", required: true, per: "product-line-or-custom-INF", content: ["Mounting, support and restraint arrangement", "Wall, cavity, reinforcement and footing requirements where applicable", "Power and data entry locations", "Service access and handling requirements"] },
] as const;
export const sitePreparationClientFields = ["project.number", "project.name", "project.siteAddress", "project.infs", "project.installationDate", "project.pmContact", "document.reviewByDate"] as const;

export interface PMCheckbox { id: string; label: string; allowNA: boolean; requires?: PMScopeFlag; }
export interface PMChecklistSection { id: string; title: string; items: readonly PMCheckbox[]; }
export const siteInspectionSections: readonly PMChecklistSection[] = [
  { id: "access", title: "Access & work area", items: [
    { id: "access", label: "Access routes and emergency exits are clear.", allowNA: false },
    { id: "arrival", label: "Parking, unloading and site access are arranged.", allowNA: false },
    { id: "area", label: "Work area, lighting and exclusion zone are in place.", allowNA: false },
  ] },
  { id: "people", title: "People & site briefing", items: [
    { id: "induction", label: "Crew inductions and relevant training records are checked.", allowNA: false },
    { id: "briefing", label: "Toolbox talk and applicable work documents are covered.", allowNA: false },
    { id: "contacts", label: "Emergency contacts and incident reporting are known.", allowNA: false },
  ] },
  { id: "housekeeping", title: "Housekeeping & environment", items: [
    { id: "housekeeping", label: "Materials, tools and walkways are orderly.", allowNA: false },
    { id: "noise", label: "Dust, noise and required neighbour notices are addressed.", allowNA: false },
    { id: "waste", label: "Protection, waste and clean-up arrangements are in place.", allowNA: false },
  ] },
  { id: "emergency", title: "Emergency provisions & PPE", items: [
    { id: "emergency", label: "Required first-aid and fire equipment are accessible.", allowNA: false },
    { id: "ppe", label: "Required PPE is available, suitable and in use.", allowNA: false },
    { id: "signage", label: "Required warning signs and barriers are in place.", allowNA: false },
  ] },
  { id: "equipment", title: "Tools & access equipment", items: [
    { id: "tools", label: "Tools, leads and applicable test/tag records are checked.", allowNA: false },
    { id: "isolation", label: "Required electrical isolation is confirmed with the responsible trade.", allowNA: true, requires: "electricalIsolationRequired" },
    { id: "equipment", label: "Applicable access equipment, operators and pre-start checks are verified.", allowNA: true, requires: "accessEquipmentRequired" },
  ] },
];

export interface PMEvidenceStep {
  id: string;
  group: string;
  title: string;
  task: string;
  detail: string;
  media: "photo" | "video";
  requires: readonly PMScopeFlag[];
}
export const installationEvidenceSteps: readonly PMEvidenceStep[] = [
  { id: "i1", group: "Installation", media: "photo", title: "Overall installation", task: "Photograph the installed INF", detail: "Show the complete installed equipment in its agreed position, with the surrounding area visible.", requires: ["installationIncluded"] },
  { id: "i2", group: "Finish", media: "photo", title: "Alignment and finish", task: "Photograph the finish and alignment", detail: "Show the edges, joins and visible finish of the installed equipment.", requires: ["installationIncluded"] },
  { id: "i3", group: "Mounting", media: "photo", title: "Mounting and fixings", task: "Photograph the mounting", detail: "Show the agreed mounting arrangement. Use an installation-stage photo for concealed fixings.", requires: ["installationIncluded"] },
  { id: "i4", group: "Cabling", media: "photo", title: "Cable routing and connections", task: "Photograph the installed cabling", detail: "Show cable routing and connections within TINNOX’s agreed installation scope.", requires: ["installationIncluded"] },
  { id: "i5", group: "Equipment identity", media: "photo", title: "Equipment identification", task: "Photograph the INF label", detail: "Show the accessible INF label clearly so it can be matched to the INF record.", requires: ["installationIncluded"] },
  { id: "i6", group: "Spare kit", media: "photo", title: "Spare kit and storage", task: "Photograph the spare kit in storage", detail: "Show the spare kit, its label and its recorded storage location. Kit details are linked from Production’s order confirmation and verified QC counts.", requires: ["installationIncluded", "sparePartsIncluded"] },
];
export const commissioningEvidenceSteps: readonly PMEvidenceStep[] = [
  { id: "p1", group: "Display & processor", media: "photo", title: "Display configuration", task: "Photograph the configured display", detail: "Show the full display with the agreed test image and correct mapping.", requires: ["commissioningIncluded", "processorIncluded"] },
  { id: "p2", group: "Display & processor", media: "video", title: "Input and image operation", task: "Record the agreed input working", detail: "Show the agreed source playing correctly across the complete display.", requires: ["commissioningIncluded", "processorIncluded"] },
  { id: "m1", group: "Media player", media: "photo", title: "Player configuration", task: "Photograph the player setup", detail: "Show the assigned device and the agreed configuration. Keep passwords out of view.", requires: ["commissioningIncluded", "mediaPlayerIncluded"] },
  { id: "m2", group: "Media player", media: "video", title: "Content playback", task: "Record content playback", detail: "Show the agreed content playing from the media player on the display.", requires: ["commissioningIncluded", "mediaPlayerIncluded"] },
  { id: "c1", group: "CMS", media: "photo", title: "CMS device connection", task: "Capture the device in the CMS", detail: "Show the correct device online in the agreed customer account.", requires: ["commissioningIncluded", "cmsIncluded"] },
  { id: "c2", group: "CMS", media: "video", title: "Publishing and scheduling", task: "Record the publishing test", detail: "Show agreed content being published or scheduled and appearing on the display.", requires: ["commissioningIncluded", "cmsIncluded"] },
  { id: "t1", group: "Touch", media: "video", title: "Touch interaction", task: "Record the touch interaction", detail: "Show touch response and the agreed application operating on the customer equipment.", requires: ["commissioningIncluded", "touchIncluded"] },
];

const supplyDefaults: Record<PMSupplyModel, Pick<PMScope, "installationIncluded" | "commissioningIncluded">> = {
  supply_only: { installationIncluded: false, commissioningIncluded: false },
  supply_installation: { installationIncluded: true, commissioningIncluded: false },
  supply_commissioning: { installationIncluded: false, commissioningIncluded: true },
  supply_installation_commissioning: { installationIncluded: true, commissioningIncluded: true },
};

/** Explicit accepted scope wins. Unclassified scope is never silently treated as excluded. */
export function scopeFlag(scope: PMScope, flag: PMScopeFlag): boolean | undefined {
  const explicit = scope[flag];
  if (typeof explicit === "boolean") return explicit;
  if ((flag === "installationIncluded" || flag === "commissioningIncluded") && scope.supplyModel && Object.prototype.hasOwnProperty.call(supplyDefaults, scope.supplyModel)) {
    return supplyDefaults[scope.supplyModel as PMSupplyModel][flag] ?? undefined;
  }
  return undefined;
}
export function resolvePMApplicability(id: PMTemplateId, scope: PMScope): PMApplicability {
  const kind = pmTemplates[id].applicability;
  if (kind === "always") return "applicable";
  const included = scopeFlag(scope, kind === "installation" ? "installationIncluded" : "commissioningIncluded");
  return included === true ? "applicable" : included === false ? "not_applicable" : "review_required";
}
export function resolveEvidenceApplicability(step: PMEvidenceStep, scope: PMScope): PMApplicability {
  const flags = step.requires.map(flag => scopeFlag(scope, flag));
  if (flags.some(value => value === false)) return "not_applicable";
  return flags.every(value => value === true) ? "applicable" : "review_required";
}

export interface PMEvidenceINF { id: string; number?: string; name?: string; scope: PMScope; }
export interface PMEvidenceTask extends PMEvidenceStep { key: string; infId: string; infNumber?: string; infName?: string; applicability: PMApplicability; }
/** Expand evidence within one project record. Never create a separate document for each INF. */
export function projectEvidenceChecklist(kind: "installation" | "commissioning", infs: readonly PMEvidenceINF[]): PMEvidenceTask[] {
  const steps = kind === "installation" ? installationEvidenceSteps : commissioningEvidenceSteps;
  return infs.flatMap(inf => steps.map(step => ({ ...step, key: `${inf.id}:${step.id}`, infId: inf.id, infNumber: inf.number, infName: inf.name, applicability: resolveEvidenceApplicability(step, inf.scope) })));
}
export interface PMEvidenceEntry {
  attachmentIds: readonly string[];
  skipped?: boolean;
  naRequest?: { reason: string; status: "requested" | "approved" | "declined"; approvedBy?: string; approvedAt?: string };
}
export type PMEvidenceStatus = "not_applicable" | "scope_review" | "na_requested" | "evidence_saved" | "skipped" | "missing";
export function evidenceStatus(task: PMEvidenceTask, entry?: PMEvidenceEntry): PMEvidenceStatus {
  if (task.applicability === "not_applicable") return "not_applicable";
  if (entry?.naRequest?.status === "approved" && entry.naRequest.approvedBy && entry.naRequest.approvedAt) return "not_applicable";
  if (entry?.naRequest?.status === "requested") return "na_requested";
  if (task.applicability === "review_required") return "scope_review";
  if (entry?.attachmentIds.length) return "evidence_saved";
  return entry?.skipped ? "skipped" : "missing";
}
export const pmEvidencePolicy = {
  preflightChecklist: true, oneTaskPerScreen: true, allowBackNext: true, allowSkip: true,
  cameraAndExistingUpload: true, allowReplace: true, allowRemove: true, allowReupload: true,
  showResultField: false, uploadImpliesTechnicalPass: false,
  overrideRequiresReason: true, overrideMustNotRewriteAcceptedScope: true,
  pendingNARequestBlocksFinalisation: true, finalConfirmationRequired: true,
  oneDocumentPerProject: true, preserveIssuedRevisionUntilNewRevisionIsFinalised: true,
} as const;
export const pmFinalConfirmations = {
  installation: "I confirm that the quoted installation work for this project is complete, matches the approved scope, and is supported by the attached photographs.",
  commissioning: "I confirm that the agreed commissioning and UAT scope for this project is complete and the attached evidence supports the completed checks.",
  completion: "I confirm that the project information and applicable completion records are correct for this handover.",
} as const;

export const projectCompletionSections = [
  { id: "project", title: "Project", source: "project" },
  { id: "infs", title: "Infrastructure", source: "project.infs" },
  { id: "installation", title: "Installation", source: "installation.latestIssuedRevision", allowScopeNA: true },
  { id: "commissioning", title: "Commissioning & UAT", source: "commissioning.latestIssuedRevision", allowScopeNA: true },
  { id: "handover", title: "Handover", source: "project.handoverDate" },
  { id: "recorded-by", title: "Recorded by", source: "system.issuerNamePositionDate" },
] as const;
export const warrantyCertificateLayout = {
  title: "Warranty & Care Certificate", brand: "TINNOX", paper: "A4", orientation: "portrait",
  headerLogo: true, borderedCertificate: true, prefillOnlyTerms: true,
  rowsPer: "INF", termsSource: "accepted-quote", commencementSource: "project.handoverDate",
  fields: ["certificateReference", "projectNumber", "projectName", "clientName", "siteAddress", "acceptedQuoteReference", "handoverDate", "INFNumber", "productModel", "warrantyDuration", "warrantyTerms", "carePlan", "careDuration", "careTerms", "issuerName", "issuerPosition", "issueDate"],
  missingTerms: "require-source-confirmation", careNotPurchased: "Not purchased",
  fabricateDuration: false, requiresSignature: false,
} as const;
/** Dates remain ISO local dates, without converting through UTC. */
export function effectiveHandoverDate(practicalCompletionDate?: string | null, separateHandoverDate?: string | null): string | null {
  return separateHandoverDate?.trim() || practicalCompletionDate?.trim() || null;
}
export interface PMNonconformityObservation {
  id: string;
  type: "nonconformity" | "improvement";
  infIds: string[];
  context: string;
  actionOutcome?: string;
  attachmentIds: string[];
}
export const nonconformityFields = [
  { id: "type", label: "Type", type: "select", required: true, options: ["Non-conformity", "Improvement"] },
  { id: "infIds", label: "Applies to", type: "project-or-infs", required: true },
  { id: "context", label: "What was observed?", type: "short-text", required: true, maxLength: 1500 },
  { id: "attachmentIds", label: "Photos", type: "photo", required: false },
  { id: "actionOutcome", label: "Action / outcome", type: "short-text", required: false, maxLength: 1500 },
] as const;
export const siteInspectionPolicy = { continuousForm: true, photosRequired: false, photosEnabled: false, uncheckedMeans: "not-confirmed", recordDoesNotCertifyPass: true, noSignature: true } as const;
export const pmDocumentPolicy = { output: "PDF", openIn: "separate-window", allowPrint: true, allowSave: true, retainRevisions: true, issueMetadata: ["name", "position", "date"], clientGetsDrafts: false, displayTutorialPanels: false } as const;

export interface SWMSParagraph { text: string; style: "body" | "compact" | "bullet" | "subbullet" | "heading"; }
export interface SWMSControlRow { job: string; hazard: string; ir: string; rr: string; risks: string[][]; controls: SWMSParagraph[]; sourcePage: number; }
export interface SWMSContent { heading?: string; paragraphs?: SWMSParagraph[]; rows?: SWMSControlRow[]; figures?: string[]; figureCaptions?: Record<string, string>; hierarchy?: (string | null)[][]; }
export interface SWMSActivity {
  id: string; title: string; core: boolean; defaultSelected: boolean;
  sourceFamily: "internal" | "supplementary"; requires: string[]; content: SWMSContent; startNewPage: true;
}
export interface SWMSLibrary {
  schemaVersion: number; title: string; sections: SWMSActivity[];
  format: { pageSize: string; orientation: string; fontFamily: string; fontSizePt: number; lineHeightPt: number; startEachSectionOnNewPage: boolean; allowContinuationPages: boolean; bulletMarker: string };
  figures: { id: string; url: string; sha256: string }[];
  notes: { code: string; sectionId?: string; detail: string }[];
  attribution: { internal: string; supplementary: string };
}
export const swmsActivityLibrary = swmsLibrary as SWMSLibrary;
export const swmsActivities = swmsActivityLibrary.sections;
export const swmsDocumentPolicy = {
  tabs: ["Project & personnel", "Activities", "Preview"],
  activityReview: "separate-window", fullPreview: "complete-document",
  representativeSource: "current-PM", preparerReviewerApprover: "same-current-PM",
  installerSource: "project.installationPersonnel", allowPersonnelEdit: true,
  workDateSource: "project.installationDate", issueDateSource: "system.issueTimestamp",
  employerSource: "personnel.company", projectActivitySource: "project.productCategories + installation",
  signatureStyle: "printed-name-position-timestamp", generateHandwrittenSignature: false,
  acknowledgement: "installer-checkbox", acknowledgementBlocksIssue: false,
  acknowledgementBlocksTracker: false, publishSWMSToTracker: false,
  sourceTextMustRemainVerbatim: true, sourceDiagramsMustRemainUnchanged: true,
  firstPageContainsOnlyCurrentProjectData: true, selectionAloneIsNotSafetyAssessment: true,
} as const;
export function swmsDocumentNumber(projectNumber: string): string {
  return projectNumber.trim() ? `SWMS-${projectNumber.trim()}` : "";
}
/** Supplemental controls keep their own scale; core pages are never silently excluded. */
export function resolveSWMSActivitySelection(selectedIds: readonly string[]): SWMSActivity[] {
  const ids = new Set([...selectedIds, ...swmsActivities.filter(activity => activity.core).map(activity => activity.id)]);
  for (const activity of swmsActivities) if (ids.has(activity.id)) for (const requirement of activity.requires) ids.add(requirement);
  return swmsActivities.filter(activity => ids.has(activity.id));
}

export const pmSourceDocumentAccess = [
  { id: "signed-quote", title: "Signed Quote / Contract", owner: "sales", pmAccess: "read-only", tracker: false },
  { id: "order-confirmation", title: "Order Confirmation", owner: "production", pmAccess: "signed-PDF-only", tracker: false },
  { id: "qc-report", title: "Internal QC Report", owner: "production", pmAccess: "read-only", tracker: false },
  { id: "itp", title: "Inspection Test Plan", owner: "production", pmAccess: "read-only", tracker: "issued-client-version" },
  { id: "packing-list", title: "Packing List", owner: "production", pmAccess: "TINNOX-issued-version-only", tracker: "issued-client-version" },
  { id: "insurance", title: "Insurance Certificates", owner: "company-register", pmAccess: "released-copies-only", tracker: "released-client-copies" },
] as const;
