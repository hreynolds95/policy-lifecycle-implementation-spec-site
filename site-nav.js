(() => {
  const navItems = [
    { href: './', label: 'Home', match: 'index.html' },
    { href: 'two-surfaces.html', label: 'Two Surfaces' },
    { href: 'role-experience.html', label: 'Role Experience' },
    { href: 'governance-gates.html', label: 'Governance Gates' },
    { href: 'readiness-matrix.html', label: 'Readiness Matrix' },
    { href: 'automation-catalog.html', label: 'Automation Catalog' },
    { href: 'auditability-source.html', label: 'Auditability' },
    { href: 'demo-walkthrough.html', label: 'Demo Walkthrough' },
    { href: 'phase-2-input-checklist.html', label: 'Phase 2 Inputs' },
    { href: 'glossary.html', label: 'Glossary' },
    { href: 'policy-change-story.html', label: 'Policy Change Story' },
    { href: 'implementation/', label: 'Action Plan' },
    { href: 'spec-explorer.html#specExplorer', label: 'Reference Spec' },
  ];

  const currentPath = window.location.pathname.replace(/\/+$/, '/');
  const currentPage = currentPath.split('/').pop() || 'index.html';

  const isCurrentItem = (item) => {
    if (item.href === 'implementation/') {
      return currentPath.endsWith('/implementation/') || currentPath.endsWith('/implementation/index.html');
    }

    const target = item.match || item.href.split('#')[0];
    return target === currentPage;
  };

  document.querySelectorAll('[data-site-nav]').forEach((nav) => {
    nav.innerHTML = navItems
      .map((item) => {
        const isCurrent = isCurrentItem(item);
        const currentAttr = isCurrent ? ' aria-current="page"' : '';
        return `<a href="${item.href}"${currentAttr}>${item.label}</a>`;
      })
      .join('');
  });
})();
