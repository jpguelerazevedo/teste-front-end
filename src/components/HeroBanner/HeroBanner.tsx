import './HeroBanner.scss'

export function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Venha conhecer nossas promoções</h1>
        <p className="hero__subtitle">
          <strong>50% Off</strong> nos produtos
        </p>
        <a href="#produtos" className="hero__cta">
          Ver produto
        </a>
      </div>
    </section>
  )
}
