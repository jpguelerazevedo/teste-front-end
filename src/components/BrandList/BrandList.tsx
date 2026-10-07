import { Logo } from '../Logo/Logo'
import './BrandList.scss'

const BRANDS = ['marca-1', 'marca-2', 'marca-3', 'marca-4', 'marca-5']

export function BrandList() {
  return (
    <section className="brands" aria-labelledby="brands-title">
      <h2 id="brands-title" className="brands__title">
        Navegue por marcas
      </h2>
      <ul className="brands__list">
        {BRANDS.map((brand) => (
          <li key={brand}>
            <a href="#" className="brands__link">
              <Logo size="sm" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
