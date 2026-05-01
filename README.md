# GitHub DMS Replacement Hub

A GitHub Pages site for evaluating and planning a GitHub-native compliance document management system (DMS) to replace LogicGate for governed compliance policies and standards.

The site is designed as a quiet decision hub: start with the proposal, validate whether the replacement can meet governance expectations, then move into the implementation action plan.

Live site: https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/

## First Review Path

| Stage | Page | Use it to |
| --- | --- | --- |
| 01 | [Frame the decision](https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/executive-summary.html) | Understand the proposal, decision ask, operating model, risks, and sponsor-facing summary. |
| 02 | [Check the evidence](https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/validation-packet.html) | Validate approval parity, audit traceability, operating ownership, and cutover readiness. |
| 03 | [Assign the work](https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/implementation/) | Review workstreams, dependencies, collaboration needs, and next actions. |

## Primary Pages

| Page | Purpose |
| --- | --- |
| [Replacement Hub](https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/) | Landing page with one three-stage review path. |
| [Executive Summary](https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/executive-summary.html) | Sponsor-ready framing for the LogicGate replacement proposal. |
| [Validation Packet](https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/validation-packet.html) | Evidence checklist for deciding whether the GitHub DMS is cutover-ready. |
| [Action Plan](https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/implementation/) | Editable workstream view for owners, dependencies, decisions, and evidence. |
| [Reference Spec](https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/spec-explorer.html#specExplorer) | Detailed technical workflow, controls, approval gates, and implementation design. |
| [Navigation Model](https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/navigation-model.html) | Page directory and audience-based routing for deeper review. |

## Supporting Reference Pages

| Page | Purpose |
| --- | --- |
| [Two Surfaces](https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/two-surfaces.html) | Explains the staff-facing portal and GitHub governance backend. |
| [Role Experience](https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/role-experience.html) | Shows how employees, owners, submitters, approvers, and the Policy Governance Team interact with the DMS. |
| [Governance Gates](https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/governance-gates.html) | Maps PoP tollgates to enforceable GitHub controls. |
| [Readiness Matrix](https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/readiness-matrix.html) | Separates proof-of-concept evidence from Phase 2 enterprise requirements. |
| [Automation Catalog](https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/automation-catalog.html) | Catalogs scheduled governance checks, reminders, digests, and lifecycle controls. |
| [Auditability](https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/auditability-source.html) | Traces source, approvals, checks, publication, and audit records. |
| [Policy Change Story](https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/policy-change-story.html) | Walks through one policy change from intake to publication evidence. |
| [Brief Crosswalk](https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/brief-crosswalk.html) | Maps DMS brief concepts to implementation workstreams and reference pages. |
| [Phase 2 Inputs](https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/phase-2-input-checklist.html) | Lists inputs needed before enterprise implementation can begin. |
| [Glossary](https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/glossary.html) | Translates GitHub and DMS terms for non-technical reviewers. |
| [Demo Walkthrough](https://hreynolds95.github.io/policy-lifecycle-implementation-spec-site/demo-walkthrough.html) | Provides a guided demo path for presenting the concept. |

## Repository Structure

| Path | Description |
| --- | --- |
| `index.html` | Simplified Replacement Hub landing page. |
| `block-brand-site.css` | Shared Block-styled static site stylesheet. |
| `_includes/site-nav.html` | Shared top-level navigation rendered by GitHub Pages/Jekyll. |
| `implementation/` | Action Plan page plus DMS-01 through DMS-14 workstream detail pages. |
| `.github/ISSUE_TEMPLATE/` | Issue forms for workstream updates, decisions, and evidence links. |
| `ACTION_PLAN.md` | Markdown source for the implementation workstream action plan. |
| `docs/collaboration-model.md` | Notes on the GitHub issue-form collaboration model. |
| `GitHub_Policy_Lifecycle_Implementation_Spec.pdf` | Shareable PDF version of the original implementation plan. |
| `GitHub_Policy_Lifecycle_Implementation_Spec.txt` | Source text used to seed the original implementation spec. |

## Collaboration Model

This repo uses GitHub Issue Forms as the execution update layer. The static site is intentionally read-only; collaborators submit structured updates through GitHub so changes leave an auditable trail.

| Issue Form | Use it for |
| --- | --- |
| [Update Workstream](https://github.com/hreynolds95/policy-lifecycle-implementation-spec-site/issues/new?template=workstream-update.yml) | Owner, target date, dependency, risk, blocker, or next-action updates. |
| [Log Decision](https://github.com/hreynolds95/policy-lifecycle-implementation-spec-site/issues/new?template=decision-record.yml) | Architecture, governance, tooling, approval, or operating model decisions. |
| [Add Evidence](https://github.com/hreynolds95/policy-lifecycle-implementation-spec-site/issues/new?template=evidence-link.yml) | Audit support, readiness proof, QC evidence, or implementation evidence. |

Issue forms are assigned only to `hreynolds95` by default. They do not seed live issues or notify additional owners unless a user submits a form.

## Governance Scope

| Assumption | Current framing |
| --- | --- |
| Target state | GitHub replaces LogicGate for governed compliance policy and standard lifecycle management. |
| In scope | Policies and Standards. |
| Linked but not directly governed | Procedures, SOPs, job aids, playbooks, and team workflows unless they implement policy, are regulator-submitted, or have regulatory implications. |
| Critical proof points | PoP approval parity, audit traceability, role clarity, exception handling, migration readiness, and operating ownership. |

## Local Preview

Because GitHub Pages renders the shared navigation with Jekyll, the most reliable review path is the deployed site. For quick local visual checks, open `index.html` directly in a browser. Pages that use `{% include site-nav.html %}` need Jekyll rendering to show the shared navigation exactly as deployed.

## Maintenance Notes

- Keep the homepage focused on first-time reviewer routing.
- Put technical detail in `spec-explorer.html`, not on the homepage.
- Put execution detail in `implementation/` and `ACTION_PLAN.md`.
- Put reviewer evidence and cutover proof in `validation-packet.html`.
- Run `sq agents review --intent "<summary>"` after committing and before pushing.

## Last Updated

- Date: 2026-05-01
- Update summary: Reframed the repo around the simplified Replacement Hub, three-stage review path, validation packet, action plan, and reference spec.
