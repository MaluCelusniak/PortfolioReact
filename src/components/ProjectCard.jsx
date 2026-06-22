import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { SkillBadge } from './SkillBadge.jsx';

export function ProjectCard({ item, skillNames, t }) {
  return (
    <article className="project-card reveal">
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
        <a href={item.links.demo} target="_blank" rel="noreferrer">
          {t.actions.demo}
          <ArrowUpRight size={15} />
        </a>
        <a href={item.links.source} target="_blank" rel="noreferrer">
          {t.actions.source}
          <ArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}
