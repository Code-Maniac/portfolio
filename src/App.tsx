import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import CV from "./components/CV";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import Games from "./components/Games";
import BackgroundManager from "./components/BackgroundManager";
import "./styles/global.css";

type SceneId = "hero" | "about" | "cv" | "projects" | "games";

const SECTION_SCENES: Record<string, SceneId> = {
  hero: "hero",
  about: "about",
  cv: "cv",
  projects: "projects",
  games: "games",
};

export default function App() {
  const [activeScene, setActiveScene] = useState<SceneId>("hero");

  useEffect(() => {
    const sectionIds = Object.keys(SECTION_SCENES);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id;
          if (SECTION_SCENES[id]) setActiveScene(SECTION_SCENES[id]);
        }
      },
      {
        threshold: [0.2, 0.5],
        rootMargin: "-80px 0px -20% 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <BackgroundManager activeScene={activeScene} />
      <div className="app">
        <Nav />
        <main>
          {/* Hero */}
          <div id="hero" className="section-wrap">
            <Hero />
          </div>

          {/* Scene break */}
          <div className="scene-break">
            <div className="scene-break-inner">
              <p className="scene-break-label">Built from the ground up.</p>
              <p className="scene-break-sub">
                Low-level roots, expanding horizon
              </p>
            </div>
          </div>

          {/* About */}
          <div
            id="about"
            className="section-wrap"
            style={{ background: "var(--surface-solid)" }}
          >
            <About />
          </div>

          {/* Scene break */}
          <div className="scene-break">
            <div className="scene-break-inner">
              <p className="scene-break-label">The journey so far.</p>
              <p className="scene-break-sub">Experience &amp; education</p>
            </div>
          </div>

          {/* CV */}
          <div
            id="cv"
            className="section-wrap"
            style={{ background: "var(--surface-solid)" }}
          >
            <CV />
          </div>

          {/* Scene break */}
          <div className="scene-break">
            <div className="scene-break-inner">
              <p className="scene-break-label">Things I've made.</p>
              <p className="scene-break-sub">Selected projects</p>
            </div>
          </div>

          {/* Projects */}
          <div
            id="projects"
            className="section-wrap"
            style={{ background: "var(--surface-solid)" }}
          >
            <Projects />
          </div>

          {/* Scene break */}
          <div className="scene-break">
            <div className="scene-break-inner">
              <p className="scene-break-label">More than just code.</p>
              <p className="scene-break-sub">Hobbies</p>
            </div>
          </div>

          <div
            id="hobbies"
            className="section-wrap"
            style={{ background: "var(--surface-solid)" }}
          >
            <Hobbies />
          </div>

          {/* Scene break */}
          <div className="scene-break">
            <div className="scene-break-inner">
              <p className="scene-break-label">Play something.</p>
              <p className="scene-break-sub">Embedded games</p>
            </div>
          </div>

          {/* Games */}
          <div
            id="games"
            className="section-wrap"
            style={{ background: "var(--surface-solid)" }}
          >
            <Games />
          </div>
        </main>

        <footer className="footer">
          <span>Nick Jaycock — {new Date().getFullYear()}</span>
          <span>jaycock.n@gmail.com</span>
        </footer>
      </div>
    </>
  );
}
