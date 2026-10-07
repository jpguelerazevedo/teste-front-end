import { useState } from 'react'
import { BrandList } from './components/BrandList/BrandList'
import { CategoryList } from './components/CategoryList/CategoryList'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { HeroBanner } from './components/HeroBanner/HeroBanner'
import { Newsletter } from './components/Newsletter/Newsletter'
import { PartnerBanners } from './components/PartnerBanners/PartnerBanners'
import { ProductModal } from './components/ProductModal/ProductModal'
import { ProductShowcase } from './components/ProductShowcase/ProductShowcase'
import { useProducts } from './hooks/useProducts'
import type { Product } from './types/product'

function App() {
  const { products, status } = useProducts()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const showcaseProps = { products, status, onSelectProduct: setSelectedProduct }

  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <CategoryList />
        <ProductShowcase
          id="produtos"
          title="Produtos relacionados"
          showCategories
          {...showcaseProps}
        />
        <PartnerBanners />
        <ProductShowcase title="Produtos relacionados" {...showcaseProps} />
        <PartnerBanners />
        <BrandList />
        <ProductShowcase title="Produtos relacionados" {...showcaseProps} />
        <Newsletter />
      </main>
      <Footer />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  )
}

export default App
