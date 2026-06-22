import { Github, Linkedin, Mail } from 'lucide-react';

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  CV: Mail,
  Resume: Mail,
};

export function Footer({ t }) {
  return (
    <footer className="site-footer">
      <p>
        {t.profile.name} · {new Date().getFullYear()}
      </p>
      <div className="footer-links">
        {t.socials.map((social) => {
          const Icon = socialIcons[social.label] || Mail;
          return (
            <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
              <Icon size={16} />
              <span>{social.label}</span>
            </a>
          );
        })}
      </div>
    </footer>
  );
}
