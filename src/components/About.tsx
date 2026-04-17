import './About.css'

interface Skill {
  label: string
  note: string
}

const SKILLS: Skill[] = [
  { label: 'Embedded C / C++', note: 'Primary expertise' },
  { label: 'ARM Cortex / RTOS', note: 'FreeRTOS, bare-metal' },
  { label: 'CAN · SPI · I2C · UART', note: 'Peripheral protocols' },
  { label: 'Godot 4 / GDScript', note: 'Expanding' },
  { label: 'Unity / C#', note: 'Expanding' },
  { label: 'React / TypeScript', note: 'Web layer' },
  { label: 'Python', note: 'Tooling & scripting' },
  { label: 'Git · CMake · Linux', note: 'Dev environment' },
]

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-left">
          <div className="eyebrow">About</div>
          <h2 className="section-heading">
            Engineer by training.<br /><em>Curious by nature.</em>
          </h2>
          <div className="about-body">
            <p>
              I've spent years working deep in the stack — writing firmware, wrestling with
              microcontrollers, and building systems where correctness isn't optional. My
              background is in embedded development: real-time operating systems, hardware
              bring-up, and low-level C on ARM silicon.
            </p>
            <p>
              Now I'm broadening my reach. Game development with Godot and Unity lets me
              bring low-level thinking — performance, determinism, tight resource budgets —
              into creative and interactive space. And web development, starting with React,
              gives me a new surface to build on.
            </p>
            <p>
              Whether it's a bare-metal HAL, a real-time game loop, or a React component,
              I care about code that is clear, efficient, and built to last.
            </p>
          </div>
          <div className="about-links">
            <a href="https://github.com/nickjaycock" className="btn" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/in/nickjaycock" className="btn" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="about-right">
          <div className="skills-header">
            <span className="eyebrow" style={{ marginBottom: 0 }}>Skills</span>
          </div>
          <ul className="skills-list">
            {SKILLS.map((skill) => (
              <li key={skill.label} className="skill-row">
                <span className="skill-name">{skill.label}</span>
                <span className="skill-note">{skill.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
