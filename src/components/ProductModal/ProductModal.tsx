import { useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import type { Product } from '../../types/product'
import { formatPrice } from '../../utils/formatPrice'
import { Icon } from '../Icon/Icon'
import './ProductModal.scss'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (product && !dialog.open) {
      setQuantity(1)
      dialog.showModal()
    } else if (!product && dialog.open) {
      dialog.close()
    }
  }, [product])

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className="product-modal"
      aria-labelledby="product-modal-title"
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      {product && (
        <div className="product-modal__content">
          <button
            type="button"
            className="product-modal__close"
            aria-label="Fechar"
            onClick={onClose}
          >
            <Icon name="close" size={28} strokeWidth={1.7} />
          </button>

          <img
            className="product-modal__photo"
            src={product.photo}
            alt={product.productName}
            width={232}
            height={232}
          />

          <div className="product-modal__info">
            <h2 id="product-modal-title" className="product-modal__name">
              {product.productName}
            </h2>
            <p className="product-modal__price">{formatPrice(product.price)}</p>
            <p className="product-modal__description">{product.descriptionShort}</p>
            <a href="#" className="product-modal__more">
              Veja mais detalhes do produto &gt;
            </a>

            <div className="product-modal__actions">
              <div className="product-modal__quantity" role="group" aria-label="Quantidade">
                <button
                  type="button"
                  aria-label="Diminuir quantidade"
                  disabled={quantity === 1}
                  onClick={() => setQuantity((current) => current - 1)}
                >
                  <Icon name="minus" size={20} />
                </button>
                <output aria-live="polite">{String(quantity).padStart(2, '0')}</output>
                <button
                  type="button"
                  aria-label="Aumentar quantidade"
                  onClick={() => setQuantity((current) => current + 1)}
                >
                  <Icon name="plus" size={20} strokeWidth={2} />
                </button>
              </div>

              <button type="button" className="product-modal__buy" onClick={onClose}>
                Comprar
              </button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}
