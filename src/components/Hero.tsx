import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner">
        <div className="hero-layout fade-up">
          <div className="hero-photo-wrap">
            <img
              src="/headshot.jpg"
              alt="Nick Jaycock"
              className="hero-photo hero-photo--portrait"
            />
          </div>

          <div className="hero-text">
            <p className="hero-eyebrow">
              Embedded Systems · Game Development · Web
            </p>
            <h1 className="hero-name fade-up-2">
              Nick
              <br />
              <em>Jaycock</em>
            </h1>
            <p className="hero-tagline fade-up-3">
              Engineer rooted in firmware.
              <br />
              Climber. Builder. Branching out.
            </p>
            <div className="hero-cta fade-up-4">
              <a href="#about" className="btn primary">
                Explore my work
              </a>
              <a href="#cv" className="btn">
                View CV
              </a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <img
              src="/climbing.jpeg"
              alt="Nick Jaycock rock climbing"
              className="hero-photo hero-photo--action"
            />
          </div>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span className="scroll-line" />
        <span className="scroll-text">scroll</span>
      </div>
    </section>
  );
}
