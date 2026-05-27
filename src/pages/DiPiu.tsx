import Icon from '../components/Icon'

export default function DiPiu(){
  return (
    <div>
      <h1><Icon name="github-icon" /> Di più — Collezioni e Tecnologie</h1>
      <div className="section-card">
        <p>
          Le nostre collezioni combinano pellicole restaurate con layer di dati
          sensoriali. Progetti in corso includono restauro AI-driven e teche che
          proiettano memorie contestuali. Visite guidate con agenti curatoriali
          virtuali sono disponibili su prenotazione.
        </p>
        <h4><Icon name="documentation-icon" /> Sezioni</h4>
        <ul>
          <li>Mostre permanenti</li>
          <li>Laboratori di restauro</li>
          <li>Cinema quantico — esperienze sperimentali</li>
        </ul>
      </div>
    </div>
  )
}
