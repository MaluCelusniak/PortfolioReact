import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { content, navItems } from './data/portfolioContent.js';
import { TopNav } from './components/TopNav.jsx';
import { Footer } from './components/Footer.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Projects } from './pages/Projects.jsx';
import { Contact } from './pages/Contact.jsx';

const pages = {
  home: Home,
  about: About,
  projects: Projects,
  contact: Contact,
};

function pageFromHash() {
  const hash = window.location.hash.replace('#/', '') || 'home';
  return pages[hash] ? hash : 'home';
}

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('portfolio-lang') || 'fr');
  const [page, setPage] = useState(pageFromHash);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('portfolio-lang', lang);
  }, [lang]);

  useEffect(() => {
    const handleHashChange = () => setPage(pageFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const t = content[lang];
  const Page = pages[page];
  const pageProps = useMemo(() => ({ lang, t }), [lang, t]);

  return (
    <div className="app-shell">
      <div className="site-backdrop" aria-hidden="true" />
      <TopNav
        activePage={page}
        lang={lang}
        navItems={navItems}
        onLanguageChange={setLang}
        t={t}
      />
      <main id="content" className="page-wrap">
        <Page {...pageProps} />
      </main>
      <a className="floating-contact" href="#/contact" aria-label={t.actions.contact}>
        <ArrowUpRight size={18} />
        <span>{t.actions.contact}</span>
      </a>
      <Footer t={t} />
    </div>
  );
}
