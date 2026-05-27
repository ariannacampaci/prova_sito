import { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [theme, setTheme] = useState<'light'|'dark'>(() => {
    try{
      const stored = localStorage.getItem('theme') as 'light'|'dark'|null
      if(stored) return stored
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }catch{
      return 'dark'
    }
  })

  useEffect(() => {
    try{
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    }catch{
      /* ignore */
    }
  }, [theme])

  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <button
      onClick={toggle}
      aria-pressed={theme === 'dark'}
      aria-label={theme === 'dark' ? 'Attiva tema chiaro' : 'Attiva tema scuro'}
      className="theme-toggle"
    >
      {/* Mostra testo invece dell'icona: "scuro" quando il tema corrente è dark, altrimenti "chiaro" */}
      <span style={{fontWeight:600, textTransform:'lowercase'}}>{theme === 'dark' ? 'scuro' : 'chiaro'}</span>
      <span className="visually-hidden">Toggle tema</span>
    </button>
  )
}
