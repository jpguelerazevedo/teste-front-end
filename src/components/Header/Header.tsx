import { Icon } from '../Icon/Icon'
import type { IconName } from '../Icon/Icon'
import { Logo } from '../Logo/Logo'
import './Header.scss'

const BENEFITS: { icon: IconName; highlight: string; text: string; highlightFirst: boolean }[] = [
  { icon: 'shield', text: 'Compra', highlight: '100% segura', highlightFirst: false },
  { icon: 'truck', highlight: 'Frete grátis', text: 'acima de R$ 200', highlightFirst: true },
  { icon: 'card', highlight: 'Parcele', text: 'suas compras', highlightFirst: true },
]

const ACTIONS: { icon: IconName; label: string }[] = [
  { icon: 'orders', label: 'Meus pedidos' },
  { icon: 'heart', label: 'Favoritos' },
  { icon: 'user', label: 'Minha conta' },
  { icon: 'cart', label: 'Carrinho' },
]

const NAV_LINKS = ['Todas categorias', 'Supermercado', 'Livros', 'Moda', 'Lançamentos', 'Ofertas do dia']

export function Header() {
  return (
    <header className="header">
      <ul className="header__benefits">
        {BENEFITS.map(({ icon, highlight, text, highlightFirst }) => (
          <li key={highlight} className="header__benefit">
            <Icon name={icon} size={20} />
            <span>
              {highlightFirst ? (
                <>
                  <strong>{highlight}</strong> {text}
                </>
              ) : (
                <>
                  {text} <strong>{highlight}</strong>
                </>
              )}
            </span>
          </li>
        ))}
      </ul>

      <div className="header__main">
        <a href="/" className="header__logo">
          <Logo />
        </a>

        <form className="header__search" role="search" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="header-search" className="visually-hidden">
            Buscar produtos
          </label>
          <input
            id="header-search"
            type="search"
            name="q"
            placeholder="O que você está buscando?"
            autoComplete="off"
          />
          <button type="submit" aria-label="Buscar">
            <Icon name="search" size={28} />
          </button>
        </form>

        <ul className="header__actions">
          {ACTIONS.map(({ icon, label }) => (
            <li key={label}>
              <a href="#" aria-label={label}>
                <Icon name={icon} size={32} strokeWidth={1.2} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <nav className="header__nav" aria-label="Navegação principal">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={link === 'Ofertas do dia' ? 'header__nav-link--highlight' : undefined}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a href="#">
              <Icon name="crown" size={22} />
              Assinatura
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
