// Progressive enhancement: every analysis remains readable without JavaScript.
(() => {
  const tabs = [...document.querySelectorAll('[data-competitor]')];
  const panels = [...document.querySelectorAll('.competitor-panel')];
  function selectCompetitor(index, moveFocus = false) {
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
      if (i === index && moveFocus) tab.focus();
    });
  }
  if (tabs.length && tabs.length === panels.length) {
    document.querySelector('.competitor-tabs').hidden = false;
    panels.forEach(panel => panel.setAttribute('role', 'tabpanel'));
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => selectCompetitor(i));
      tab.addEventListener('keydown', event => {
        const next = {ArrowRight:(i + 1) % tabs.length, ArrowLeft:(i + tabs.length - 1) % tabs.length, Home:0, End:tabs.length - 1}[event.key];
        if (next === undefined) return;
        event.preventDefault();
        selectCompetitor(next, true);
      });
    });
    selectCompetitor(0);
  }
  const filters = [...document.querySelectorAll('[data-audit-filter]')];
  const rows = [...document.querySelectorAll('[data-priority]')];
  function filterAudit(value) {
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.auditFilter === value)));
    rows.forEach(row => row.hidden = value !== 'all' && row.dataset.priority !== value);
    document.querySelector('#audit-count').textContent = `Показано замечаний: ${rows.filter(row => !row.hidden).length} из ${rows.length}`;
  }
  if (filters.length) {
    document.querySelector('.audit-filter').hidden = false;
    filters.forEach(button => button.addEventListener('click', () => filterAudit(button.dataset.auditFilter)));
    filterAudit('all');
  }
})();
