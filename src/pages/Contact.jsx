import { ArrowUpRight, Mail, Send } from 'lucide-react';

export function Contact({ t }) {
  const mailto = `mailto:${t.profile.email}?subject=Portfolio`;

  return (
    <div className="page-stack">
      <section className="contact-layout">
        <div className="section-heading reveal">
          <span className="eyebrow">{t.profile.availability}</span>
          <h1>{t.contact.title}</h1>
          <p>{t.contact.intro}</p>
          <a className="button primary" href={mailto}>
            <Mail size={18} />
            {t.profile.email}
          </a>
        </div>

        <div className="contact-card reveal delay-1">
          <h2>{t.contact.socialTitle}</h2>
          <div className="social-list">
            {t.socials.map((social) => (
              <a href={social.url} key={social.label} target="_blank" rel="noreferrer">
                {social.label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form reveal delay-2" action={mailto}>
          <h2>{t.contact.formTitle}</h2>
          <label>
            <span>{t.contact.name}</span>
            <input name="name" type="text" />
          </label>
          <label>
            <span>{t.contact.emailLabel}</span>
            <input name="email" type="email" />
          </label>
          <label>
            <span>{t.contact.message}</span>
            <textarea name="body" rows="5" />
          </label>
          <button className="button primary" type="submit">
            <Send size={18} />
            {t.contact.send}
          </button>
        </form>
      </section>
    </div>
  );
}
