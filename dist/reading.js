// The complete article is rendered at build time: the reader works offline.
(() => {
  const dialog = document.querySelector('#document-viewer');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const close = document.querySelector('#document-close');
  let trigger, previousOverflow;
  document.querySelectorAll('[data-document]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      trigger = link;
      previousOverflow = document.body.style.overflow;
      dialog.classList.toggle('is-pointer-open', event.detail > 0);
      dialog.querySelector('.reading-toc').open = window.innerWidth > 700;
      dialog.showModal();
      document.body.style.overflow = 'hidden';
      dialog.querySelector('.reading-scroll').scrollTop = 0;
      close.focus();
    });
  });
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow || '';
    trigger?.focus({preventScroll:true});
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.querySelectorAll('.reading-toc a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const heading = dialog.querySelector(link.getAttribute('href'));
      if (window.innerWidth <= 700) dialog.querySelector('.reading-toc').open = false;
      heading.scrollIntoView({block:'start',behavior:'instant'});
      heading.focus({preventScroll:true});
    });
  });
})();
