// Shared nav + footer injector
(function(){
  const links = [
    {href:'index.html', label:'Home', key:'home'},
    {href:'how-it-works.html', label:'How it works', key:'how'},
    {href:'Why.html', label:'Why', key:'why'},
    {href:'Pricing.html', label:'Pricing', key:'pricing'},
    {href:'Docs.html', label:'Docs', key:'docs'},
  ];
  const current = document.body.dataset.page || '';
  const navLinks = links
    .filter(l => l.key !== 'home')
    .map(l => `<a href="${l.href}"${l.key===current?' aria-current="page"':''}>${l.label}</a>`).join('');
  const navEl = document.querySelector('[data-slot="nav"]');
  if(navEl){
    navEl.outerHTML = `
      <header class="wrap">
        <nav class="nav">
          <a class="brand" href="index.html">
            <span class="brand-mark"></span>
            <span class="brand-name">Neuropetitorius</span>
          </a>
          <div class="nav-links">${navLinks}</div>
          <div class="nav-cta">
            <a href="#" class="btn btn-sm btn-ghost" style="border:none;color:var(--text-2)">Sign in</a>
            <a href="#" class="btn btn-sm btn-primary">Start free</a>
          </div>
        </nav>
      </header>`;
  }
  const footEl = document.querySelector('[data-slot="footer"]');
  if(footEl){
    footEl.outerHTML = `
      <footer class="wrap">
        <div class="foot">
          <div>
            <a class="brand" href="index.html" style="margin-bottom:14px">
              <span class="brand-mark"></span>
              <span class="brand-name">Neuropetitorius</span>
            </a>
            <p style="margin:14px 0 0;color:var(--text-2);font-size:14px;line-height:1.55;max-width:34ch">The AI-powered training engine for businesses that don't have time to write the docs.</p>
          </div>
          <div>
            <h6>Product</h6>
            <ul>
              <li><a href="how-it-works.html">How it works</a></li>
              <li><a href="Why.html">Why</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
          <div>
            <h6>Pricing</h6>
            <ul>
              <li><a href="Pricing.html">Plans</a></li>
              <li><a href="Pricing.html#edtech">For EdTech</a></li>
              <li><a href="Pricing.html#smb">For SMB</a></li>
              <li><a href="Pricing.html#enterprise">Enterprise</a></li>
            </ul>
          </div>
          <div>
            <h6>Resources</h6>
            <ul>
              <li><a href="Docs.html">Docs</a></li>
              <li><a href="Docs.html#api">API reference</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">GDPR</a></li>
            </ul>
          </div>
        </div>
        <div class="foot-bot">
          <span>© 2026 Neuropetitorius UAB · All rights reserved</span>
          <span class="flag">Built in Lithuania 🇱🇹</span>
        </div>
      </footer>`;
  }
})();
