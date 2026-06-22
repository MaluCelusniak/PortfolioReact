import { useMemo, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard.jsx';

const filterOrder = ['all', 'stage', 'alternance', 'school'];

export function Projects({ t }) {
  const [filter, setFilter] = useState('all');
  const skillsById = useMemo(
    () => Object.fromEntries(t.skills.map((skill) => [skill.id, skill.name])),
    [t.skills],
  );
  const filteredItems = filter === 'all' ? t.items : t.items.filter((item) => item.type === filter);

  return (
    <div className="page-stack">
      <section className="section-heading reveal">
        <span className="eyebrow">{t.experienceLabel}</span>
        <h1>{t.projects.title}</h1>
        <p>{t.projects.intro}</p>
      </section>

      <div className="filter-bar reveal delay-1">
        <SlidersHorizontal size={18} />
        {filterOrder.map((key) => (
          <button
            className={filter === key ? 'active' : ''}
            key={key}
            type="button"
            onClick={() => setFilter(key)}
          >
            {t.projects.filters[key]}
          </button>
        ))}
      </div>

      {filteredItems.length > 0 ? (
        <section className="project-grid">
          {filteredItems.map((item) => (
            <ProjectCard
              item={item}
              key={item.id}
              skillNames={item.skills.map((skillId) => skillsById[skillId])}
              t={t}
            />
          ))}
        </section>
      ) : (
        <p className="empty-state">{t.projects.empty}</p>
      )}
    </div>
  );
}
