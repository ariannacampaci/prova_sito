import { NavLink, Outlet } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import Icon from './Icon'

export default function Layout(){
  return (
    <div>
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">Museo del Cinema — 2040</div>
          <nav>
            <NavLink to="/" end className={({isActive})=>isActive? 'active':''}><Icon name="documentation-icon" /> Home</NavLink>
            <NavLink to="/di-piu" className={({isActive})=>isActive? 'active':''}><Icon name="github-icon" /> Di più</NavLink>
            <NavLink to="/social" className={({isActive})=>isActive? 'active':''}><Icon name="social-icon" /> Social</NavLink>
            <NavLink to="/idee-future" className={({isActive})=>isActive? 'active':''}><Icon name="documentation-icon" /> Idee Future</NavLink>
          </nav>

          <div style={{display:'flex',alignItems:'center',gap:'0.75rem'}}>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container section">
        <Outlet />
      </main>

      <footer className="site-footer container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>
            © Museo del Cinema — 2040 · Archivio digitale e spazi immersivi
          </div>
          <div style={{color:'var(--muted)'}}>
            follow us: immersive-feed · rooms · curator-bot
          </div>
        </div>
      </footer>
    </div>
  )
}
