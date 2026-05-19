import Hero from '../components/Hero'
import heroImg from '../assets/hero.png'

export default function Home(){
  return (
    <div>
      <Hero title={"Museo del Cinema — 2040"} subtitle={"Oltre la proiezione: esperienze cinematiche ibride e memoria attiva."} image={heroImg} />

      <section className="section-card">
        <h2>Benvenuti nel futuro</h2>
        <p>
          Nel 2040 il Museo del Cinema reinventa la narrazione: archivi interattivi,
          sale olfattive e stanze di replay olografico. Esplora collezioni che si
          adattano ai tuoi ricordi e partecipa a programmi interattivi.
        </p>
      </section>

      <section className="section-card">
        <h3>Highlights</h3>
        <ul>
          <li>Restauro AI-driven in tempo reale</li>
          <li>Sale multi-sensoriali e proiezioni adattive</li>
          <li>Archivi aperti e storytelling narrativo</li>
        </ul>
      </section>
    </div>
  )
}
