import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { content, navItems } from './data/portfolioContent.js';
import { TopNav } from './components/TopNav.jsx';
import { Footer } from './components/Footer.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Projects } from './pages/Projects.jsx';
import { ProjectDetail } from './pages/ProjectDetail.jsx';
import { Contact } from './pages/Contact.jsx';

const pages = {
  home: Home,
  about: About,
  projects: Projects,
  contact: Contact,
};

// Parses the current hash into a { page, params } shape.
// Supports plain pages (#/about) and one level of sub-route (#/projects/:id).
function routeFromHash() {
  const raw = window.location.hash.replace('#/', '').replace(/\/$/, '');
  if (!raw) return { page: 'home', params: {} };

  const [base, ...rest] = raw.split('/');

  if (base === 'projects' && rest.length > 0) {
    return { page: 'projectDetail', params: { id: rest.join('/') } };
  }

  return pages[base] ? { page: base, params: {} } : { page: 'home', params: {} };
}

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('portfolio-lang') || 'fr');
  const [route, setRoute] = useState(routeFromHash);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('portfolio-lang', lang);
  }, [lang]);

  useEffect(() => {
    const handleHashChange = () => setRoute(routeFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top whenever the route changes (new page or new project detail).
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route.page, route.params.id]);

  const t = content[lang];
  const pageProps = useMemo(() => ({ lang, t }), [lang, t]);

  // activePage drives the nav highlight: project detail still highlights "projects".
  const activeNavPage = route.page === 'projectDetail' ? 'projects' : route.page;

  let pageElement;
  if (route.page === 'projectDetail') {
    pageElement = <ProjectDetail {...pageProps} projectId={route.params.id} />;
  } else {
    const Page = pages[route.page] ?? Home;
    pageElement = <Page {...pageProps} />;
  }

  return (
    <div className="app-shell">
      <div className="site-backdrop" aria-hidden="true" />
      <TopNav
        activePage={activeNavPage}
        lang={lang}
        navItems={navItems}
        onLanguageChange={setLang}
        t={t}
      />
      <main id="content" className="page-wrap">
        {pageElement}
      </main>
      <a className="floating-contact" href="#/contact" aria-label={t.actions.contact}>
        <ArrowUpRight size={18} />
        <span>{t.actions.contact}</span>
      </a>
      <Footer t={t} />
    </div>
  );
}