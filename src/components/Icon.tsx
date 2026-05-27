import React from 'react'

type IconProps = React.SVGProps<SVGSVGElement> & {
  name: string
  label?: string
}

export default function Icon({ name, label, ...props }: IconProps){
  // Usa lo sprite in public/icons.svg
  // Se l'icona è puramente decorativa, impostiamo aria-hidden boolean
  const role = label ? 'img' : undefined
  const ariaLabel = label ?? undefined
  const ariaHidden = label ? undefined : true

  return (
    <svg width={24} height={24} focusable={false} role={role} aria-label={ariaLabel} aria-hidden={ariaHidden} {...props}>
      <use href={`/icons.svg#${name}`} />
    </svg>
  )
}
