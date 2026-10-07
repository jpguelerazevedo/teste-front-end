import { useEffect, useState } from 'react'
import { fetchProducts } from '../services/products'
import type { Product } from '../types/product'

export type ProductsStatus = 'loading' | 'success' | 'error'

interface UseProductsResult {
  products: Product[]
  status: ProductsStatus
}

export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([])
  const [status, setStatus] = useState<ProductsStatus>('loading')

  useEffect(() => {
    const controller = new AbortController()

    fetchProducts(controller.signal)
      .then((data) => {
        setProducts(data)
        setStatus('success')
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return
        console.error(error)
        setStatus('error')
      })

    return () => controller.abort()
  }, [])

  return { products, status }
}
