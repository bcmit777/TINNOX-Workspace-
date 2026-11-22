# TINNOX Workspace

**Milestone: reviewed workflows integrated — 22 November 2026.**

Live review Site: https://tinnox-workspace-review.tinnox-4852.chatgpt.site/

This repository contains the shared application, controlled templates, permissions, records, uploads and workflow handoffs. It never seeds demonstration projects, infrastructure, contacts, inspections or completed work. Test fixtures exist only in explicitly local verification scripts.

## Included spaces

- Sales & Commercial: accepted quote capture/import, signed quote, stakeholders, invoice email and PO reference, Finance request queue, and Sales handover.
- Production: automatic INF identities; product-line Order Confirmation and inheritance; supplier-signed PDF and invoice; payment stages; bilingual LED/kiosk QC; controlled counts; internal QC and client ITP; logistics, branded packing list and dispatch handover.
- Project Management: project summary, signed quote, stakeholders/personnel, receiving contacts, dates, kick-off calendar file, management cadence, controlled documents, customer tracker and Support handover.
- Technical Authority, Support, Field Service, Technician Directory, Marketing/Media, Knowledge/PR, University training requests, Finance, Management and Administration retain saved work, approvals, evidence and role-scoped access.

PM templates: Site Preparation, checkbox-only Pre-installation Inspection, SWMS, Installation, Commissioning/UAT, Project Completion, Warranty & Care and Non-conformity. Installation and commissioning each cover all project INFs in one document.

## Ownership and documents

Sales owns project identity and accepted scope. Handover creates INF identities and receiving work atomically and idempotently. Current INF format: `TNX-INF-YYYY-NNNN`; the final business numbering rule remains a later decision. Accepted scope and INF identity are immutable.

Production owns orders, QC and dispatch. Previous finalized order values inherit only within the same product line; current quote facts take precedence. Distinct configurations can have separate page sets in one product-line order. Spares are linked procurement information, not sold quote items. QC owns counted quantities; INF component views are read-only.

PM owns coordination and PM documents. Confirmed dispatch precedes installation confirmation. Original quote commitments remain separate from plans and forecasts. Practical completion defaults to handover; a separate handover date is supported.

Issued editions preserve snapshots and file references. Editing creates draft changes and issuing again creates another edition. Removing evidence from a draft does not destroy files needed by historical editions. Generated documents open as PDFs in a separate window for print/save.

QC uses four portrait evidence slots per page; additional photos are retained on further pages. Client ITP excludes photos, internal defects/rework and sign-off sections. Uploaded packing PDFs can be wrapped in TINNOX branding without re-entering their table. Spreadsheet sources use the editable packing table.

PM sees supplier-signed OC PDFs only, internal QC, client ITP and revised packing lists. Supplier invoices and OC draft data are restricted. The `/track/<unguessable-project-token>` route reads the latest designated customer editions. `/helpdesk?inf=<INF-number>` pre-fills a support request without exposing private asset data.

SWMS preserves reviewed text and original diagrams. Each activity starts on a new page; long content continues for readability. The original control referring to “Camden staff” remains verbatim, as recorded in fidelity notes. Issue is a deliberate PM action. Installer acknowledgements do not block issue.

## Protected copies and integration boundaries

Original applications and records remain untouched. Workspace launches these independently deployed copies:

| Application | Review copy | Original baseline |
|---|---|---|
| Ultimate CPQ | https://tinnox-workspace-cpq-copy.tinnox-4852.chatgpt.site | version 45 |
| Tracker reference copy | https://tinnox-workspace-project-tracker-copy.tinnox-4852.chatgpt.site | version 3 |
| University | https://tinnox-workspace-university-copy.tinnox-4852.chatgpt.site | version 7 |

The PM-linked customer tracker is the new Workspace `/track/…` route, reading central records. The preserved tracker copy retains independent storage; it is not silently synchronized.

CPQ handoff accepts structured JSON plus the signed PDF, or direct entry. Automatic CPQ push, HubSpot, Xero sending, automatic email/calendar delivery, University progress sync and proprietary CRM are **not connected**. Invoice buttons create Finance requests and never report an invoice sent. Kick-off scheduling creates a downloadable calendar invitation.

The Site remains owner-private. External customer/installer access needs an explicit later audience decision. Current hosting is Sites with Cloudflare D1/R2. AWS Sydney migration is a future milestone.

## Development

Node.js 22.13+, React/Vinext, TypeScript, Cloudflare Worker/D1/R2. Preserve `.openai/hosting.json` and the Sites build integration.

```text
npm ci
npm run check
npm run dev
npm run test:integration
npm run build
```

Apply SQL migrations to local D1 before local tests. An ignored `.dev.vars` can set `WORKSPACE_OWNER_EMAIL=seedy@sites.test` for loopback only. Hosted ownership is configured separately in runtime variables.

`scripts/verify-milestone.mjs` is hard-coded to loopback and creates local QA records. It checks handover identities, immutable scope, document separation, conflicts, supplier/QC/dispatch gates and Finance queueing. Never target production. Exclude `.wrangler/`, `.sites-runtime/`, `.dev.vars`, verification outputs and runtime records from Git and deployment packages.

Migration `0001_archive_empty_review_drafts` preserves old blank draft shells in an archive. Accepted or populated commercial projects are not archived.
