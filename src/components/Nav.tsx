import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">
        Nick <span>Jaycock</span>
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#cv">CV</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#games">Games</a></li>
      </ul>
    </nav>
  )
}
