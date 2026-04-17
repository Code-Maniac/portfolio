import { useState } from "react";
import "./CV.css";

type Tab = "experience" | "education" | "skills";

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  desc: string;
  tags: string[];
}

interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  desc: string;
}

interface SkillBar {
  label: string;
  level: number;
}

const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Senior Embedded Systems Engineer",
    company: "Your Company",
    period: "2022 — Present",
    desc: "Lead firmware development for ARM Cortex-M based products. Designed RTOS-based software architectures, peripheral drivers (CAN, SPI, I2C), and bootloader systems. Managed PCB bring-up and hardware/software integration.",
    tags: ["C/C++", "ARM Cortex-M", "FreeRTOS", "CAN", "SPI"],
  },
  {
    role: "Embedded Software Engineer",
    company: "Previous Company",
    period: "2019 — 2022",
    desc: "Developed and maintained firmware for industrial control systems. Built communication stacks and HAL layers for multiple MCU families. Worked closely with hardware teams on bring-up and compliance.",
    tags: ["C", "STM32", "I2C", "UART", "CMake"],
  },
  {
    role: "Junior Firmware Developer",
    company: "First Role",
    period: "2017 — 2019",
    desc: "Implemented power management routines, OTA update mechanisms, and low-level peripheral drivers for consumer electronics firmware.",
    tags: ["C", "Microchip PIC", "UART", "RTOS"],
  },
];

const EDUCATION: EducationEntry[] = [
  {
    degree: "BSc Physics",
    institution: "University of Exeter",
    period: "2009 — 2013",
    desc: "Embedded systems, digital signal processing, PCB design, and real-time programming. First class honours.",
  },
  {
    degree: "A Levels",
    institution: "Lytchett Minster School Sixth Form",
    period: "2007 - 2009",
    desc: "Study of Maths, Physics and Chemistry A Levels",
  },
  {
    degree: "GCSEs",
    institution: "Lytchett Minster School",
    period: "2003 - 2007",
    desc: "",
  },
];

const SKILL_BARS: SkillBar[] = [
  { label: "Embedded C / C++", level: 95 },
  { label: "Rust", level: 92 },
  { label: "ARM / RTOS Firmware", level: 85 },
  { label: "Embedded Linux", level: 80 },
  { label: "Python & Scripting", level: 72 },
  { label: "React / TypeScript", level: 65 },
  { label: "Godot / GDScript", level: 60 },
  { label: "Unity / C#", level: 55 },
];

function SkillBarRow({ label, level }: SkillBar) {
  return (
    <div className="skill-bar">
      <div className="skill-bar-meta">
        <span className="skill-bar-label">{label}</span>
        <span className="skill-bar-pct">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ "--w": `${level}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
}

export default function CV() {
  const [tab, setTab] = useState<Tab>("experience");

  return (
    <section id="cv">
      <div className="eyebrow">Curriculum Vitae</div>
      <h2 className="section-heading">
        Where I've been.
        <br />
        <em>Where I'm going.</em>
      </h2>

      <div className="cv-tabs">
        {(["experience", "education", "skills"] as Tab[]).map((t) => (
          <button
            key={t}
            className={`cv-tab${tab === t ? " active" : ""}`}
            onClick={() => setTab(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {tab === "experience" && (
        <div className="cv-timeline">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="cv-entry">
              <div className="cv-entry-aside">
                <span className="cv-period">{exp.period}</span>
                <div className="cv-line" />
              </div>
              <div className="card cv-card">
                <h3 className="cv-role">{exp.role}</h3>
                <p className="cv-company">{exp.company}</p>
                <p className="cv-desc">{exp.desc}</p>
                <div className="cv-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "education" && (
        <div className="cv-timeline">
          {EDUCATION.map((edu, i) => (
            <div key={i} className="cv-entry">
              <div className="cv-entry-aside">
                <span className="cv-period">{edu.period}</span>
                <div className="cv-line" />
              </div>
              <div className="card cv-card">
                <h3 className="cv-role">{edu.degree}</h3>
                <p className="cv-company">{edu.institution}</p>
                <p className="cv-desc">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "skills" && (
        <div className="skills-bars-wrap">
          {SKILL_BARS.map((s) => (
            <SkillBarRow key={s.label} {...s} />
          ))}
        </div>
      )}

      <div style={{ marginTop: "3rem" }}>
        <a href="/cv.pdf" download className="btn primary">
          Download CV (PDF)
        </a>
      </div>
    </section>
  );
}
