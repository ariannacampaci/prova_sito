type HeroProps = { title: string; subtitle?: string; image?: string }

export default function Hero({title, subtitle, image}: HeroProps){
  return (
    <section className="hero">
      <div className="left">
        <h1 className="title">{title}</h1>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        <a className="cta" href="/di-piu">Scopri le esperienze</a>
      </div>
      {image && (
        <div className="right">
          <img src={image} alt="hero" style={{maxWidth:'100%',borderRadius:10}} />
        </div>
      )}
    </section>
  )
}
