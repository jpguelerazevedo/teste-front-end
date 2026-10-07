import type { Product } from '../../types/product'
import { formatPrice } from '../../utils/formatPrice'
import './ProductCard.scss'

interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
}

const INSTALLMENTS = 2

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <article className="product-card">
      <button
        type="button"
        className="product-card__details"
        onClick={() => onSelect(product)}
        aria-haspopup="dialog"
      >
        <img
          className="product-card__photo"
          src={product.photo}
          alt={product.productName}
          width={198}
          height={198}
          loading="lazy"
        />
        <h3 className="product-card__name">{product.descriptionShort}</h3>
      </button>

      <p className="product-card__price">{formatPrice(product.price)}</p>
      <p className="product-card__installments">
        ou {INSTALLMENTS}x de {formatPrice(product.price / INSTALLMENTS)} sem juros
      </p>
      <p className="product-card__shipping">Frete grátis</p>

      <button type="button" className="product-card__buy" onClick={() => onSelect(product)}>
        Comprar
      </button>
    </article>
  )
}
