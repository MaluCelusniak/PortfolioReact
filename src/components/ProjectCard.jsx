import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { SkillBadge } from './SkillBadge.jsx';

export function ProjectCard({ item, skillNames, t }) {
  const goToDetail = () => {
    window.location.hash = `#/projects/${item.id}`;
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      goToDetail();
    }
  };

  return (
    <article
      className="project-card reveal clickable"
      onClick={goToDetail}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label={item.title}
    >
      <div className="project-card-top">
        <span className={`type-chip ${item.type}`}>{item.kind}</span>
        <span className="period">
          <CalendarDays size={15} />
          {item.period}
        </span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.summary}</p>
      <p className="impact">{item.impact}</p>
      <div className="skill-row">
        {skillNames.map((skill) => (
          <SkillBadge key={skill}>{skill}</SkillBadge>
        ))}
      </div>
      <div className="card-actions">

    {item.links?.demo && (
        <a
            href={item.links.demo}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
        >
            {t.actions.demo}
            <ArrowUpRight size={15} />
        </a>
    )}

    {item.links?.source && (
        <a
            href={item.links.source}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
        >
            {t.actions.source}
            <ArrowUpRight size={15} />
        </a>
    )}

</div>
    </article>
  );
}