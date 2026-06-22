import { ArrowRight, MapPin } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard.jsx';

export function Home({ t }) {
  const featuredItems = t.items.slice(0, 2);
  const skillsById = Object.fromEntries(t.skills.map((skill) => [skill.id, skill.name]));

  return (
    <div className="page-stack">
      <section className="hero-section">
        <div className="hero-copy reveal">
          <span className="eyebrow">{t.home.eyebrow}</span>
          <h1>{t.home.title}</h1>
          <p>{t.home.summary}</p>
          <div className="hero-actions">
            <a className="button primary" href="#/projects">
              {t.actions.projects}
              <ArrowRight size={18} />
            </a>
            <a className="button ghost" href="#/contact">
              {t.actions.contact}
            </a>
          </div>
        </div>

        <div className="hero-panel reveal delay-1" aria-label={t.profile.portraitAlt}>
          <div className="portrait-orbit">
            <div className="portrait-card">
              <span className="portrait-initials">YN</span>
            </div>
          </div>
          <div className="profile-snapshot">
            <strong>{t.profile.name}</strong>
            <span>{t.profile.role}</span>
            <small>
              <MapPin size={14} />
              {t.profile.location}
            </small>
          </div>
        </div>
      </section>

      <section className="stats-grid reveal delay-2" aria-label="Portfolio highlights">
        {t.home.stats.map((stat) => (
          <div className="stat-tile" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section-heading reveal">
        <span className="eyebrow">{t.projects.title}</span>
        <h2>{t.profile.availability}</h2>
      </section>

      <div className="project-grid compact">
        {featuredItems.map((item) => (
          <ProjectCard
            item={item}
            key={item.id}
            skillNames={item.skills.map((skillId) => skillsById[skillId])}
            t={t}
          />
        ))}
      </div>
    </div>
  );
}
