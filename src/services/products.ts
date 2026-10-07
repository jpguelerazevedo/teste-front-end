import type { Product, ProductsResponse } from '../types/product'

// Resolvido pelo proxy configurado em vite.config.ts
const PRODUCTS_URL = '/api/lista-produtos/produtos.json'

export async function fetchProducts(signal?: AbortSignal): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL, { signal })

  if (!response.ok) {
    throw new Error(`Falha ao buscar produtos (${response.status})`)
  }

  const data: ProductsResponse = await response.json()

  if (!data.success) {
    throw new Error('A API de produtos retornou um erro')
  }

  return data.products
}
