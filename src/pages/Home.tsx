import Hero from '../components/Hero'
import Icon from '../components/Icon'
import BigToggle from '../components/BigToggle'

// Import statico delle immagini da src/assets (approccio consigliato con Vite)
import moleImg from '../assets/mole.svg'
import chiSiamoImg from '../assets/chi-siamo.svg'
import socialImg from '../assets/social.svg'
import ideeFutureImg from '../assets/idee-future.svg'

export default function Home(){
  return (
    <div>
      <Hero title={"Museo del Cinema — 2040"} subtitle={"Oltre la proiezione: esperienze cinematiche ibride e memoria attiva."} image={moleImg} />

      <section className="section-card">
        <h2><Icon name="documentation-icon" /> Benvenuti nel futuro</h2>
        <p>
          Nel 2040 il Museo del Cinema reinventa la narrazione: archivi interattivi,
          sale olfattive e stanze di replay olografico. Esplora collezioni che si
          adattano ai tuoi ricordi e partecipa a programmi interattivi.
        </p>
      </section>

      <section className="section-card big-toggle-row">
        <BigToggle to="/di-piu" title="Di più" subtitle="Collezioni & tecnologie" image={chiSiamoImg} imageAlt="Chi siamo" />
        <BigToggle to="/social" title="Social" subtitle="Comunicare il futuro" image={socialImg} imageAlt="Social" />
        <BigToggle to="/idee-future" title="Idee Future" subtitle="Roadmap 2040+" image={ideeFutureImg} imageAlt="Idee future" />
      </section>

      <section className="section-card">
        <h3><Icon name="github-icon" /> Highlights</h3>
        <ul>
          <li>Restauro AI-driven in tempo reale</li>
          <li>Sale multi-sensoriali e proiezioni adattive</li>
          <li>Archivi aperti e storytelling narrativo</li>
        </ul>
      </section>
    </div>
  )
}
