import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner">
        <p className="hero-eyebrow fade-up">Embedded Systems · Game Development · Web</p>
        <h1 className="hero-name fade-up-2">
          Nick<br /><em>Jaycock</em>
        </h1>
        <p className="hero-tagline fade-up-3">
          Engineer rooted in firmware.<br />
          Branching into games and the web.
        </p>
        <div className="hero-cta fade-up-4">
          <a href="#about" className="btn primary">Explore my work</a>
          <a href="#cv" className="btn">View CV</a>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span className="scroll-line" />
        <span className="scroll-text">scroll</span>
      </div>
    </section>
  )
}
