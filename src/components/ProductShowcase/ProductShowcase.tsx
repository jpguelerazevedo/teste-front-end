import { useId, useRef, useState } from 'react'
import type { ProductsStatus } from '../../hooks/useProducts'
import type { Product } from '../../types/product'
import { Icon } from '../Icon/Icon'
import { ProductCard } from '../ProductCard/ProductCard'
import './ProductShowcase.scss'

interface ProductShowcaseProps {
  title: string
  products: Product[]
  status: ProductsStatus
  onSelectProduct: (product: Product) => void
  id?: string
  /** Exibe as abas de categoria; sem elas a vitrine mostra o link "Ver todos". */
  showCategories?: boolean
}

const CATEGORIES = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']

export function ProductShowcase({
  title,
  products,
  status,
  onSelectProduct,
  id,
  showCategories = false,
}: ProductShowcaseProps) {
  const titleId = useId()
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0])
  const trackRef = useRef<HTMLUListElement>(null)

  function scrollTrack(direction: 1 | -1) {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * track.clientWidth, behavior: 'smooth' })
  }

  return (
    <section id={id} className="showcase" aria-labelledby={titleId}>
      <header className="showcase__header">
        <h2 id={titleId} className="showcase__title">
          {title}
        </h2>
      </header>

      {showCategories ? (
        <nav aria-label="Categorias de produtos">
          <ul className="showcase__tabs">
            {CATEGORIES.map((category) => (
              <li key={category} className="showcase__tab-item">
                <button
                  type="button"
                  className="showcase__tab"
                  aria-current={category === activeCategory ? 'true' : undefined}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <a href="#" className="showcase__see-all">
          Ver todos
        </a>
      )}

      {status === 'loading' && (
        <p className="showcase__feedback" role="status">
          Carregando produtos...
        </p>
      )}

      {status === 'error' && (
        <p className="showcase__feedback" role="alert">
          Não foi possível carregar os produtos. Tente novamente mais tarde.
        </p>
      )}

      {status === 'success' && (
        <div className="showcase__carousel">
          <button
            type="button"
            className="showcase__arrow showcase__arrow--prev"
            aria-label="Produtos anteriores"
            onClick={() => scrollTrack(-1)}
          >
            <Icon name="chevron-left" size={18} strokeWidth={2} />
          </button>

          <ul className="showcase__track" ref={trackRef}>
            {products.map((product) => (
              <li key={product.productName} className="showcase__item">
                <ProductCard product={product} onSelect={onSelectProduct} />
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="showcase__arrow showcase__arrow--next"
            aria-label="Próximos produtos"
            onClick={() => scrollTrack(1)}
          >
            <Icon name="chevron-right" size={18} strokeWidth={2} />
          </button>
        </div>
      )}
    </section>
  )
}
