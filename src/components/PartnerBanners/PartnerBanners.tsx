import './PartnerBanners.scss'

const BANNERS = [
  { id: 'parceiros-1', title: 'Parceiros', text: 'Lorem ipsum dolor sit amet, consectetur' },
  { id: 'parceiros-2', title: 'Parceiros', text: 'Lorem ipsum dolor sit amet, consectetur' },
]

export function PartnerBanners() {
  return (
    <section className="partners" aria-label="Parceiros">
      {BANNERS.map(({ id, title, text }) => (
        <article key={id} className="partners__banner">
          <h2 className="partners__title">{title}</h2>
          <p className="partners__text">{text}</p>
          <a href="#" className="partners__cta">
            Confira
          </a>
        </article>
      ))}
    </section>
  )
}
