import { ArrowLeft, ArrowUpRight, CalendarDays } from 'lucide-react';
import { SkillBadge } from '../components/SkillBadge.jsx';

// Renders the longDescription block array. Each block is one of:
//   { type: 'text',    text: '...' }
//   { type: 'heading', text: '...' }
//   { type: 'list',    items: ['...', '...'] }
//   { type: 'image',   src: '...', alt: '...', caption: '...' }  ← new
// Unknown block types are skipped rather than crashing the page.
function DescriptionBlocks({ blocks }) {
  return blocks.map((block, index) => {
    switch (block.type) {
      case 'heading':
        return (
          <h2 className="project-detail-subtitle" key={index}>
            {block.text}
          </h2>
        );
      case 'list':
        return (
          <ul className="project-detail-list" key={index}>
            {block.items.map((line, lineIndex) => (
              <li key={lineIndex}>{line}</li>
            ))}
          </ul>
        );
      case 'text':
        return <p key={index}>{block.text}</p>;
      case 'image':
        return (
          <figure className="project-inline-figure" key={index}>
            <img src={block.src} alt={block.alt} loading="lazy" />
            {block.caption && <figcaption>{block.caption}</figcaption>}
          </figure>
        );
      default:
        return null;
    }
  });
}

export function ProjectDetail({ t, projectId }) {
  const item = t.items.find((entry) => entry.id === projectId);

  // Project not found — friendly fallback instead of a crash.
  if (!item) {
    return (
      <div className="page-stack">
        <section className="section-heading reveal">
          <span className="eyebrow">{t.experienceLabel}</span>
          <h1>{t.projects.empty}</h1>
        </section>
        <a className="back-link reveal" href="#/projects">
          <ArrowLeft size={16} />
          {t.actions.projects}
        </a>
      </div>
    );
  }

  const skillsById = Object.fromEntries(t.skills.map((skill) => [skill.id, skill]));
  const skills = item.skills.map((skillId) => skillsById[skillId]).filter(Boolean);

  const longDescription = item.longDescription ?? [];

  // Legacy fallback: if no longDescription contains image blocks but a gallery
  // array exists, render it as a grouped section at the top (old behaviour).
  const hasInlineImages = longDescription.some((b) => b.type === 'image');
  const legacyGallery = !hasInlineImages ? (item.gallery ?? []) : [];

  return (
    <div className="page-stack project-detail">
      <a className="back-link reveal" href="#/projects">
        <ArrowLeft size={16} />
        {t.actions.projects}
      </a>

      <section className="section-heading reveal delay-1">
        <div className="project-detail-meta">
          <span className={`type-chip ${item.type}`}>{item.kind}</span>
          <span className="period">
            <CalendarDays size={15} />
            {item.period}
          </span>
        </div>
        <h1>{item.title}</h1>
        <p className="project-detail-summary">{item.summary}</p>
      </section>

      {/* Legacy grouped gallery — only shown when no inline images are present */}
      {legacyGallery.length > 0 && (
        <section className="project-gallery reveal delay-2">
          {legacyGallery.map((image, index) => (
            <figure key={image.src} className={index === 0 ? 'project-gallery-feature' : ''}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              {image.caption && <figcaption>{image.caption}</figcaption>}
            </figure>
          ))}
        </section>
      )}

      <section className="project-detail-body reveal delay-2">
        {longDescription.length > 0 ? (
          <DescriptionBlocks blocks={longDescription} />
        ) : (
          <p>{item.summary}</p>
        )}

        <div className="impact-block">
          <p className="impact">{item.impact}</p>
        </div>
      </section>

      <section className="reveal delay-3">
        <h2 className="project-detail-subtitle">{t.about.skillTitle}</h2>
        <div className="skill-row">
          {skills.map((skill) => (
            <SkillBadge key={skill.id}>{skill.name}</SkillBadge>
          ))}
        </div>
      </section>

      <div className="card-actions reveal delay-3">
        {item.links?.demo && item.links.demo !== '#' && (
          <a href={item.links.demo} target="_blank" rel="noreferrer">
            {t.actions.demo}
            <ArrowUpRight size={15} />
          </a>
        )}
        {item.links?.source && item.links.source !== '#' && (
          <a href={item.links.source} target="_blank" rel="noreferrer">
            {t.actions.source}
            <ArrowUpRight size={15} />
          </a>
        )}
      </div>
    </div>
  );
}