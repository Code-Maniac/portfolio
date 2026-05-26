import { useState } from "react";
import "./CV.css";

type Tab = "experience" | "education" | "skills";

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  desc: string;
  keyPoints: string[];
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
    role: "Software Engineer",
    company: "Evinox Ltd",
    period: "06/2023 — 03/2026",
    desc: "Full-stack embedded and backend development in the energy and utilities sector, working across communal heating systems from microcontroller firmware to server infrastructure.",
    keyPoints: [
      "Programming and maintenance of communal heating systems in Rust and C on Linux displays and Silabs EFM-8 8051 microcontrollers",
      "Development of new products in C++ on STM32 microcontrollers",
      "Board bring-up for new electronics products",
      "Development of automated testing software for custom electronics boards delivered by manufacturer",
      "Development of server backend handling payments for heating, diagnostics data gathering, and heat network efficiency calculations",
      "Diagnostics of software and hardware problems on installed products",
    ],
    tags: ["Rust", "C", "C++", "C#", "STM32", "EFM-8", "Linux", "Embedded"],
  },
  {
    role: "Software Engineer",
    company: "Veethree",
    period: "06/2020 — 06/2023",
    desc: "Embedded Linux development with a focus on CAN interfaces, proprietary SDK development, and cross-platform build systems.",
    keyPoints: [
      "Programming and maintenance of software across a range of embedded Linux systems with a focus on CAN interfaces",
      "Development and maintenance of proprietary SDKs in C and C++, with CMake build configuration for multiple embedded Linux targets",
      "Design and creation of a new SDK replacing a proprietary frontend with Qt QML",
      "Creation and maintenance of platform-independent Linux distributions using Yocto Project",
      "Code review and customer liaison, including writing quotes based on technical specifications",
    ],
    tags: ["C", "C++", "CMake", "Qt QML", "Yocto", "CAN", "Embedded Linux"],
  },
  {
    role: "Software Engineer",
    company: "James Fisher Prolec",
    period: "03/2018 — 01/2020",
    desc: "Development and maintenance of safety-critical embedded systems, with additional responsibilities across testing, documentation, and customer support.",
    keyPoints: [
      "Programming and maintenance of safety-critical embedded systems in MISRA C++",
      "GUI test automation using Python and Squish",
      "Code review",
      "Technical support for professional customers and remote support for service engineers",
      "Authoring specification and manual documents",
    ],
    tags: ["MISRA C++", "Python", "Squish", "Safety-Critical", "Embedded"],
  },
  {
    role: "Software Developer",
    company: "Mapyx",
    period: "10/2013 — 01/2017",
    desc: "Full-stack development of GIS, tracking, and fleet management software for the transport sector.",
    keyPoints: [
      "Programming and maintenance of GIS, tracking, and management software in C# and VB.NET",
      "GIS map image processing and maintenance of map processing software",
      "Development and maintenance of data push services in C# and SQL to receive data from third-party providers",
      "Configuration of tracking software for clients and technical support for personal and professional customers",
      "Authoring specification and manual documents",
    ],
    tags: ["C#", "VB.NET", "SQL", "GIS", "Tracking"],
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
  { label: "C / C++", level: 95 },
  { label: "Rust", level: 92 },
  { label: "Embedded Linux", level: 90 },
  { label: "C# / .NET", level: 85 },
  { label: "CMake / Build Systems", level: 80 },
  { label: "Python", level: 70 },
  { label: "React / TypeScript", level: 50 },
  { label: "Godot / GDScript", level: 45 },
  { label: "Unity / C#", level: 40 },
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
                <ul className="cv-key-points">
                  {exp.keyPoints.map((keyPoint) => (
                    <li key={keyPoint}>{keyPoint}</li>
                  ))}
                </ul>
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
