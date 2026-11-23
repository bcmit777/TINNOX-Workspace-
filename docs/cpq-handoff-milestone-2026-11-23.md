# Copied Ultimate CPQ → Workspace

The copied Ultimate CPQ now hands an accepted frozen quotation and its PDF directly to Workspace. The original CPQ and original records remain untouched. The owner-private audience is preserved.

## Acceptance contract

- The CPQ project number is retained. The saved quote ID, root identity, revision, acceptance source and PDF digest are recorded.
- Each agreed physical screen becomes one INF. Geometry and component references come from its own frozen group, never the combined option's first-screen geometry.
- Combined quotation totals are taken from the combined price, not added from individual groups.
- Stakeholders, invoice recipient, quoted warranty/care, timing assumptions and supply scope accompany the handover.
- Workspace creates one supplier order confirmation per product line, QC per product category, the logistics record and the PM plan/document records.
- Signed-source PDFs remain internal. The public tracker receives only its existing issued-document allowlist.
- Repeating the same accepted packet returns the same project and INF records. A different acceptance revision for the same root project cannot overwrite agreed scope.
- Network delivery failures remain in CPQ's durable outbox with a retry action.

## Parramatta review

The review uses the copied CPQ's normal calculation and formal quotation routines: one PrecisionMicro P1.25 wall, 2,400 × 1,350 mm with 16 cabinets, and one EdgePro 55-inch portrait kiosk. Example Retail and its contacts/site description are explicitly illustrative. Phone numbers and customer-agreed dates are not invented.

The document is labelled TEST. The acceptance event records the actual management actor without claiming a customer signature or a PandaDoc completion. It has its own `test_accepted` status. No invoice, email, supplier order or customer notification is sent by this test.

## Future PandaDoc connection

The common accepted-document pipeline is shared by the test adapter and a server-side PandaDoc verification adapter. The latter checks `document.completed`, verifies metadata `tinnox_quote_id` and `tinnox_quote_version`, and downloads the protected completed PDF. It requires the runtime secret `PANDADOC_API_KEY`, which is not configured in this milestone. No PandaDoc document creation or webhook subscription is claimed. A production signing rollout still needs document creation/binding, credentials, completion delivery (webhook or scheduled polling) and an account-level integration test.

Official references: [completed PDFs](https://developers.pandadoc.com/docs/how-to-download-completed-document), [document state](https://developers.pandadoc.com/reference/handledocumentstatechanged).

## Access and navigation

Public previews are in **Tools → Public page previews**, filtered to staff modules, with a management directory for all entries. Previews open a separate tab. Helpdesk submission is disabled in preview mode. University still has a separate copy; its customer preview/sign-in connection is deferred to that module's review. The actual review Sites remain private.

## Verification

- TypeScript and both production builds.
- Local real CPQ quotation creation, PDF printing and receiver handover.
- `node scripts/verify-cpq-handoff.mjs` covers authentication, stale messages, PDF integrity, duplicate delivery, scope overwrite rejection, two INFs, product-line OCs, category-specific QC and contacts.
- Existing `node scripts/verify-milestone.mjs` covers supplier OC, QC/ITP, dispatch gating, public document filtering, controlled counts and finance queue behavior.
- Desktop and mobile review, no mobile page overflow, preview submissions disabled.

Runtime secrets remain in Sites settings, never in source. The CPQ source changes are retained with its own Sites repository; the companion patch in `integrations/ultimate-cpq` records this milestone against the preserved copy baseline.
