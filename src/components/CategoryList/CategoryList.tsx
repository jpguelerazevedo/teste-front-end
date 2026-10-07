import bebidas from '../../assets/categories/bebidas.png'
import esportes from '../../assets/categories/esportes.png'
import ferramentas from '../../assets/categories/ferramentas.png'
import moda from '../../assets/categories/moda.png'
import saude from '../../assets/categories/saude.png'
import supermercado from '../../assets/categories/supermercado.png'
import tecnologia from '../../assets/categories/tecnologia.png'
import './CategoryList.scss'

const CATEGORIES = [
  { name: 'Tecnologia', icon: tecnologia },
  { name: 'Supermercado', icon: supermercado },
  { name: 'Bebidas', icon: bebidas },
  { name: 'Ferramentas', icon: ferramentas },
  { name: 'Saúde', icon: saude },
  { name: 'Esportes e Fitness', icon: esportes },
  { name: 'Moda', icon: moda },
]

const ACTIVE_CATEGORY = 'Tecnologia'

export function CategoryList() {
  return (
    <nav className="categories" aria-label="Categorias">
      <ul className="categories__list">
        {CATEGORIES.map(({ name, icon }) => (
          <li key={name}>
            <a
              href="#"
              className="categories__link"
              aria-current={name === ACTIVE_CATEGORY ? 'true' : undefined}
            >
              <span className="categories__tile">
                <img src={icon} alt="" width={62} height={62} loading="lazy" />
              </span>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
