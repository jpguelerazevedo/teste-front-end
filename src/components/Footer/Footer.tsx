import { Icon } from '../Icon/Icon'
import type { IconName } from '../Icon/Icon'
import { Logo } from '../Logo/Logo'
import './Footer.scss'

const SOCIAL_LINKS: { icon: IconName; label: string }[] = [
  { icon: 'instagram', label: 'Instagram' },
  { icon: 'facebook', label: 'Facebook' },
  { icon: 'linkedin', label: 'LinkedIn' },
]

const LINK_GROUPS = [
  { title: 'Institucional', links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'] },
  { title: 'Ajuda', links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'] },
  { title: 'Termos', links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'] },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__container">
          <div className="footer__about">
            <Logo size="lg" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className="footer__social">
              {SOCIAL_LINKS.map(({ icon, label }) => (
                <li key={label}>
                  <a href="#" aria-label={label}>
                    <Icon name={icon} size={26} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__groups">
            {LINK_GROUPS.map(({ title, links }) => (
              <nav key={title} aria-label={title}>
                <h2 className="footer__group-title">{title}</h2>
                <ul className="footer__links">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>

      <p className="footer__copyright">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </footer>
  )
}
