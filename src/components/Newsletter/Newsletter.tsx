import './Newsletter.scss'

export function Newsletter() {
  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__container">
        <div className="newsletter__intro">
          <h2 id="newsletter-title" className="newsletter__title">
            Inscreva-se na nossa newsletter
          </h2>
          <p className="newsletter__text">
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="newsletter-name" className="visually-hidden">
            Nome
          </label>
          <input
            id="newsletter-name"
            className="newsletter__input"
            type="text"
            name="name"
            placeholder="Digite seu nome"
            autoComplete="name"
            required
          />

          <label htmlFor="newsletter-email" className="visually-hidden">
            E-mail
          </label>
          <input
            id="newsletter-email"
            className="newsletter__input"
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            autoComplete="email"
            required
          />

          <button type="submit" className="newsletter__submit">
            Inscrever
          </button>

          <label className="newsletter__terms">
            <input type="checkbox" name="terms" required />
            Aceito os termos e condições
          </label>
        </form>
      </div>
    </section>
  )
}
