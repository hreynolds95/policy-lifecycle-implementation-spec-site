# Collaboration Model

The GitHub DMS site uses GitHub Issue Forms as the interaction layer for execution updates. This keeps the static GitHub Pages site simple while giving collaborators structured ways to submit updates.

## Collaboration Paths

| Path | Use For | Result |
| --- | --- | --- |
| Update Workstream | Owner, date, dependency, risk, or next-action updates. | Creates a structured GitHub issue assigned to `hreynolds95`. |
| Log Decision | Architecture, governance, tooling, or control decisions. | Creates a decision issue assigned to `hreynolds95`. |
| Add Evidence | Audit support, readiness proof, QC results, or links. | Creates an evidence issue assigned to `hreynolds95`. |
| Source File | Direct markdown review of `ACTION_PLAN.md`. | No issue is created unless a user opens one manually. |

## Notification Guardrails

This implementation does not seed live issues, mention teams, or assign issues to anyone other than `hreynolds95`. Issue notifications only occur if a user submits an issue form through GitHub.

## Future Enhancement

A later version can read issues back into the static site to show live status by workstream. Direct webpage writes would require an authenticated backend or GitHub App and should not be implemented with a browser token.
