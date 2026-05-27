import { NavLink } from 'react-router-dom'

type Props = {
  to: string
  title: string
  subtitle?: string
  image?: string
  imageAlt?: string
}

export default function BigToggle({ to, title, subtitle, image, imageAlt }: Props){
  return (
    <NavLink to={to} className="big-toggle" aria-label={title}>
      <div className="big-toggle-media" role="img" aria-label={imageAlt ?? title}>
        {image ? (
          <img src={image} alt={imageAlt ?? title} loading="lazy" />
        ) : (
          <div className="big-toggle-placeholder" aria-hidden="true" />
        )}
      </div>
      <div className="big-toggle-content">
        <h3>{title}</h3>
        {subtitle && <p className="muted">{subtitle}</p>}
      </div>
    </NavLink>
  )
}
