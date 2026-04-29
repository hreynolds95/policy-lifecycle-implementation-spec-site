# GitHub DMS Action Plan

This is the editable Action Plan for turning the GitHub DMS implementation spec into an executable delivery plan. Use the site links or GitHub Issue Forms to submit owner assignments, decisions, evidence, and sequencing updates.

## How to Collaborate

1. Review the workstream table below.
2. Replace `Unassigned` with the accountable DRI or team once confirmed.
3. Add target dates only after they are committed by the accountable team.
4. Link GitHub issues, decision records, or meeting notes in the `Collaboration Notes` column.
5. Submit execution updates through GitHub Issue Forms. Use pull requests for direct source-file changes only.

## Interaction Paths

| Path | Purpose | Link |
| --- | --- | --- |
| Update Workstream | Submit owner, date, dependency, risk, or next-action updates. | [Open form](https://github.com/hreynolds95/policy-lifecycle-implementation-spec-site/issues/new?template=workstream-update.yml) |
| Log Decision | Capture or request architecture, governance, tooling, or control decisions. | [Open form](https://github.com/hreynolds95/policy-lifecycle-implementation-spec-site/issues/new?template=decision-record.yml) |
| Add Evidence | Attach audit support, readiness proof, QC results, or links. | [Open form](https://github.com/hreynolds95/policy-lifecycle-implementation-spec-site/issues/new?template=evidence-link.yml) |

Issue forms default to `hreynolds95` and do not assign issues to anyone else. No live issues are created by this setup.

## Planning Fields

| Field | Meaning |
| --- | --- |
| `DRI` | Accountable owner or team for driving the workstream to an accepted output. |
| `Collaboration Need` | What must be resolved next: owner, decision, build scope, evidence, or sequencing. |
| `Next Action` | The concrete next move for the working group. |
| `Target Date` | Leave blank until committed by the DRI. |
| `Collaboration Notes` | Links to issues, PRs, decision records, meeting notes, or open questions. |

## Workstream Action Plan

| ID | Workstream | Phase | DRI | Collaboration Need | Dependency | Next Action | Target Date | Collaboration Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DMS-01 | Architecture Overview | Phase 0 Discovery | hreynolds | Decision | Baseline input for target topology and readiness criteria. | Confirm target-state topology, system boundaries, and readiness criteria with Platform, Security, and Compliance Governance. |  |  |
| DMS-02 | Repository Taxonomy | Phase 1 Foundation | Unassigned | Build scope | Unlocks DMS-08 awareness automation; needs stakeholder group metadata source. | Finalize canonical repository layout, domain taxonomy, metadata registry, and archive link model. |  |  |
| DMS-03 | Access Control | Phase 1 Foundation | Unassigned | Decision | Unlocks DMS-07 portal role gates; needs SSO and role mapping decisions. | Resolve GitHub Teams, SSO group mapping, CODEOWNERS coverage, and portal role gates. |  |  |
| DMS-04 | Governance Workflow | Phase 2 Governed Workflow | Unassigned | Decision | Depends on DMS-06 template gate; unlocks DMS-11 migration readiness. | Select the enforceable approval pattern for PoP tollgates and tiered approval parity. |  |  |
| DMS-05 | Exception Handling | Phase 2 Governed Workflow | Unassigned | Build scope | No mapped sequencing dependency yet. | Draft issue forms, exception records, approval path, expiry rules, and renewal logic. |  |  |
| DMS-06 | Template Enforcement | Phase 2 Governed Workflow | Unassigned | Build scope | Unlocks DMS-04 Policy Team QC; needs parser fixture scope and QC handoff criteria. | Build validator fixtures from the official Policy and Standard templates and define hard-fail rules. |  |  |
| DMS-07 | GitHub Pages Portal | Phase 3 Portal | Unassigned | Build scope | Depends on DMS-03 access-control decisions. | Define staff-facing library, search, request initiation, conflict warnings, and role-gated actions. |  |  |
| DMS-08 | Awareness Communications | Phase 3 Portal | Unassigned | Decision | Depends on DMS-02 stakeholder group metadata. | Confirm Slack/email baseline, stakeholder group source, and material-change notification evidence. |  |  |
| DMS-09 | Orphaned Documents | Phase 3 Controls | Unassigned | Decision | No mapped sequencing dependency yet. | Confirm owner deactivation signal, reassignment workflow, escalation path, and evidence capture. |  |  |
| DMS-10 | Non-Governed Controls | Phase 3 Controls | Unassigned | Decision | No mapped sequencing dependency yet. | Define routing criteria for procedures, SOPs, job aids, and documents without regulatory or policy connection. |  |  |
| DMS-11 | Gap Analysis | Phase 4 Readiness | Unassigned | Evidence | Depends on DMS-04 tiered approval parity. | Convert BRD and PoP requirements into a gap register with mitigation owners and acceptance evidence. |  |  |
| DMS-12 | Legacy Migration | Phase 4 Readiness | Unassigned | Evidence | No mapped sequencing dependency yet. | Inventory legacy archive references and prove traceability across prior versions, approvals, and published records. |  |  |
| DMS-13 | Roadmap | Program Management | Unassigned | Sequencing | Maintains sequencing across DMS-01 through DMS-12. | Sequence phases, dependencies, delivery milestones, and acceptance checkpoints. |  |  |
| DMS-14 | Open Decisions | Program Management | Unassigned | Decision | Captures decisions that may block DMS-03, DMS-04, and DMS-08. | Assign decision owners and target resolution path for governance, security, tooling, and operating model choices. |  |  |

## Review Cadence

| Cadence | Purpose | Output |
| --- | --- | --- |
| Weekly working review | Confirm owner assignments, decisions, and new risks. | Submitted issue form or merged source-file PR. |
| Decision review | Resolve choices that change architecture, approval parity, or audit evidence. | Decision record linked from the workstream row. |
| Readiness review | Confirm whether GitHub can replace LogicGate for governed documents. | Evidence-backed cutover recommendation. |
