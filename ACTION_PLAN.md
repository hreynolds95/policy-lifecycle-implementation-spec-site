# GitHub DMS Action Plan

This is the editable Action Plan for turning the GitHub DMS implementation spec into an executable delivery plan. Use pull requests to propose updates so owner assignments, decisions, and sequencing remain reviewable.

## How to Collaborate

1. Review the workstream table below.
2. Replace `Unassigned` with the accountable DRI or team once confirmed.
3. Add target dates only after they are committed by the accountable team.
4. Link GitHub issues, decision records, or meeting notes in the `Collaboration Notes` column.
5. Submit changes through a pull request so updates have review history.

## Planning Fields

| Field | Meaning |
| --- | --- |
| `DRI` | Accountable owner or team for driving the workstream to an accepted output. |
| `Collaboration Need` | What must be resolved next: owner, decision, build scope, evidence, or sequencing. |
| `Next Action` | The concrete next move for the working group. |
| `Target Date` | Leave blank until committed by the DRI. |
| `Collaboration Notes` | Links to issues, PRs, decision records, meeting notes, or open questions. |

## Workstream Action Plan

| ID | Workstream | Phase | DRI | Collaboration Need | Next Action | Target Date | Collaboration Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| DMS-01 | Architecture Overview | Phase 0 Discovery | hreynolds | Decision | Confirm target-state topology, system boundaries, and readiness criteria with Platform, Security, and Compliance Governance. |  |  |
| DMS-02 | Repository Taxonomy | Phase 1 Foundation | Unassigned | Build scope | Finalize canonical repository layout, domain taxonomy, metadata registry, and archive link model. |  |  |
| DMS-03 | Access Control | Phase 1 Foundation | Unassigned | Decision | Resolve GitHub Teams, SSO group mapping, CODEOWNERS coverage, and portal role gates. |  |  |
| DMS-04 | Governance Workflow | Phase 2 Governed Workflow | Unassigned | Decision | Select the enforceable approval pattern for PoP tollgates and tiered approval parity. |  |  |
| DMS-05 | Exception Handling | Phase 2 Governed Workflow | Unassigned | Build scope | Draft issue forms, exception records, approval path, expiry rules, and renewal logic. |  |  |
| DMS-06 | Template Enforcement | Phase 2 Governed Workflow | Unassigned | Build scope | Build validator fixtures from the official Policy and Standard templates and define hard-fail rules. |  |  |
| DMS-07 | GitHub Pages Portal | Phase 3 Portal | Unassigned | Build scope | Define staff-facing library, search, request initiation, conflict warnings, and role-gated actions. |  |  |
| DMS-08 | Awareness Communications | Phase 3 Portal | Unassigned | Decision | Confirm Slack/email baseline, stakeholder group source, and material-change notification evidence. |  |  |
| DMS-09 | Orphaned Documents | Phase 3 Controls | Unassigned | Decision | Confirm owner deactivation signal, reassignment workflow, escalation path, and evidence capture. |  |  |
| DMS-10 | Non-Governed Controls | Phase 3 Controls | Unassigned | Decision | Define routing criteria for procedures, SOPs, job aids, and documents without regulatory or policy connection. |  |  |
| DMS-11 | Gap Analysis | Phase 4 Readiness | Unassigned | Evidence | Convert BRD and PoP requirements into a gap register with mitigation owners and acceptance evidence. |  |  |
| DMS-12 | Legacy Migration | Phase 4 Readiness | Unassigned | Evidence | Inventory legacy archive references and prove traceability across prior versions, approvals, and published records. |  |  |
| DMS-13 | Roadmap | Program Management | Unassigned | Sequencing | Sequence phases, dependencies, delivery milestones, and acceptance checkpoints. |  |  |
| DMS-14 | Open Decisions | Program Management | Unassigned | Decision | Assign decision owners and target resolution path for governance, security, tooling, and operating model choices. |  |  |

## Review Cadence

| Cadence | Purpose | Output |
| --- | --- | --- |
| Weekly working review | Confirm owner assignments, decisions, and new risks. | Updated Action Plan PR or merged Action Plan change. |
| Decision review | Resolve choices that change architecture, approval parity, or audit evidence. | Decision record linked from the workstream row. |
| Readiness review | Confirm whether GitHub can replace LogicGate for governed documents. | Evidence-backed cutover recommendation. |

