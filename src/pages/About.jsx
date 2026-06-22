import { CheckCircle2 } from 'lucide-react';

export function About({ t }) {
  const itemsById = Object.fromEntries(t.items.map((item) => [item.id, item]));

  return (
    <div className="page-stack">
      <section className="split-section">
        <div className="section-heading reveal">
          <span className="eyebrow">{t.profile.role}</span>
          <h1>{t.about.title}</h1>
        </div>
        <div className="text-panel reveal delay-1">
          <p>{t.about.body}</p>
          <h2>{t.about.valuesTitle}</h2>
          <div className="value-list">
            {t.about.values.map((value) => (
              <span key={value}>
                <CheckCircle2 size={18} />
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-heading reveal">
        <span className="eyebrow">{t.about.skillTitle}</span>
        <h2>{t.about.skillIntro}</h2>
      </section>

      <section className="skill-map">
        {t.skills.map((skill, index) => (
          <article
            className="skill-card reveal"
            key={skill.id}
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <div>
              <span className="skill-category">{skill.category}</span>
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
            <div className="linked-work">
              <strong>{t.about.usedIn}</strong>
              {skill.relatedTo.map((id) => (
                <a href="#/projects" key={id}>
                  {itemsById[id]?.title}
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
