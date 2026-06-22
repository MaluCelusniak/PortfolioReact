import { BriefcaseBusiness, Languages, Mail, Menu, Sparkles, UserRound, X } from 'lucide-react';
import { useState } from 'react';

const iconMap = {
  home: Sparkles,
  about: UserRound,
  projects: BriefcaseBusiness,
  contact: Mail,
};

export function TopNav({ activePage, lang, navItems, onLanguageChange, t }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="top-nav">
      <a className="brand-mark" href="#/home" aria-label={t.profile.name}>
        <span className="brand-symbol">P</span>
        <span>
          <strong>{t.profile.name}</strong>
          <small>{t.profile.role}</small>
        </span>
      </a>

      <button
        className="icon-button nav-menu-button"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="primary-navigation"
        title="Menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav id="primary-navigation" className={open ? 'nav-links is-open' : 'nav-links'}>
        {navItems.map((item) => {
          const Icon = iconMap[item.id];
          return (
            <a
              key={item.id}
              className={activePage === item.id ? 'nav-link active' : 'nav-link'}
              href={`#/${item.id}`}
              onClick={() => setOpen(false)}
            >
              <Icon size={17} />
              <span>{item.label[lang]}</span>
            </a>
          );
        })}
      </nav>

      <div className="language-switch" aria-label="Language switcher">
        <Languages size={17} />
        <button
          className={lang === 'fr' ? 'active' : ''}
          type="button"
          onClick={() => onLanguageChange('fr')}
        >
          FR
        </button>
        <button
          className={lang === 'en' ? 'active' : ''}
          type="button"
          onClick={() => onLanguageChange('en')}
        >
          EN
        </button>
      </div>
    </header>
  );
}
