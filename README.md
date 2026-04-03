# GitHub Policy Lifecycle Implementation Spec Site

Static GitHub Pages site for the compliance policy/standard lifecycle implementation spec.

## Files
- `index.html` - Website with collapsible sections aligned to the implementation spec.
- `block-brand-site.css` - Block-brand theme stylesheet cloned from local MCP token conventions for static rendering.
- `GitHub_Policy_Lifecycle_Implementation_Spec.txt` - Source text used to structure the site content.
- `GitHub_Policy_Lifecycle_Implementation_Spec.pdf` - Shareable PDF version.

## Publish on GitHub Pages
1. Push this folder to a GitHub repository.
2. Open repository **Settings** -> **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose:
   - **Branch**: `main` (or your default branch)
   - **Folder**: `/ (root)`
5. Click **Save**.
6. Wait for deployment and share the generated Pages URL.

## Local Preview
Open `index.html` directly in a browser.

## Governance Notes
- Source-of-record assumption: GitHub fully replaces LogicGate.
- In-scope governance objects: Policies and Standards.
- Procedures are reference/dependency only for Policy Team lifecycle governance.
- Approval and lifecycle behavior should remain config-driven and versioned.

## Last Updated
- Date: 2026-04-03
- Updated by: Codex (implementation support)
- Change summary:
  - Created GitHub Pages website with collapsible spec sections.
  - Added tollgate-focused section shortcuts and expand/collapse controls.
  - Added this README with publishing and maintenance guidance.
