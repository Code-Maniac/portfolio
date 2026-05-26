import "./About.css";

interface Skill {
  label: string;
  note: string;
}

interface Skill {
  label: string;
  note: string;
}

const SKILLS: Skill[] = [
  { label: "C / C++", note: "Primary expertise" },
  { label: "Rust", note: "Professional experience" },
  { label: "C# / .NET", note: "Professional experience" },
  { label: "Embedded Linux", note: "Multi-platform" },
  { label: "CMake / Build Systems", note: "Cross-platform builds" },
  { label: "CAN / SPI / I2C / UART", note: "Peripheral protocols" },
  { label: "Yocto Project", note: "Custom Linux distros" },
  { label: "Qt / QML", note: "Embedded UI" },
  { label: "Git · Linux · Docker", note: "Dev environment" },
];

const SECONDARY_SKILLS: Skill[] = [
  { label: "Python", note: "Tooling & scripting" },
  { label: "React / TypeScript", note: "Web layer" },
  { label: "Godot 4 / GDScript", note: "Personal Projects" },
  { label: "Unity / C#", note: "Personal Projects" },
];

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-left">
          <div className="eyebrow">About</div>
          <h2 className="section-heading">
            Engineer by training.
            <br />
            <em>Curious by nature.</em>
          </h2>
          <div className="about-body">
            <p>
              Software developer with over 10 years of experience, including 7
              years specialising in embedded systems — primarily C and C++, with
              more recent work in Rust. I care about writing code that is
              correct, efficient, and maintainable, whether that's
              safety-critical firmware running on a bare microcontroller or a
              backend service handling real-world data at scale.
            </p>
            <p>
              I'm highly self-directed and comfortable working with minimal
              supervision, having operated across the full development lifecycle
              from hardware bring-up through to production software. Outside of
              work I enjoy game development with Godot and Unity as a hobby,
              where low-level thinking around performance and resource budgets
              translates naturally into a different kind of problem space.
            </p>
            <p>
              Currently seeking fully remote mid-senior positions, with a
              particular interest in transitioning into back-end or full-stack
              engineering roles where I can apply my systems background to
              higher-level software challenges.
            </p>
          </div>
          <div className="about-links">
            <a
              href="https://github.com/code-maniac"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/nicholas-jaycock-b18390105"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="about-right">
          <div className="skills-header">
            <span className="eyebrow" style={{ marginBottom: 0 }}>
              Skills
            </span>
          </div>
          <ul className="skills-list">
            {SKILLS.map((skill) => (
              <li key={skill.label} className="skill-row">
                <span className="skill-name">{skill.label}</span>
                <span className="skill-note">{skill.note}</span>
              </li>
            ))}
          </ul>

          <div className="skills-header" style={{ marginTop: "2.5rem" }}>
            <span className="eyebrow" style={{ marginBottom: 0 }}>
              Secondary Skills
            </span>
          </div>
          <ul className="skills-list">
            {SECONDARY_SKILLS.map((skill) => (
              <li key={skill.label} className="skill-row">
                <span className="skill-name">{skill.label}</span>
                <span className="skill-note">{skill.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
