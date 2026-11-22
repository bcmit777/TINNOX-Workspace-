# Accepted CPQ handoff

The current build imports JSON into a Sales draft. It does not read or change the protected CPQ database.

Supported transaction fields:

- `projectName`, `customer`, `site`, `acceptedReference`, `acceptedDate`
- `commercialContact`, `scopeNotes`, `invoiceEmail`
- `supplyModel`, `installationIncluded`, `commissioningIncluded`
- `processorIncluded`, `mediaPlayerIncluded`, `cmsIncluded`, `touchIncluded`
- `promisedDeliveryDate`, `promisedInstallationDate`
- `warrantyMonths`, `careMonths`, `carePlan`, `warrantyTerms`
- `entries`: `id`, `productLine`, `category`, `model`, `configuration`, `pixelPitch`, `dimensions`, `resolution`, `cabinetSize`, `cabinetQuantity`
- `stakeholders`: role, company, name, email, phone, position and involvement

Sales attaches the signed PDF inside Workspace and confirms handover. Cross-application file IDs cannot be imported; their storage and access boundaries differ. Attachment ownership is validated.

A future CPQ adapter should use the same authenticated, idempotent handover after mapping accepted scope. CRM/accounting IDs remain explicit source mappings.
