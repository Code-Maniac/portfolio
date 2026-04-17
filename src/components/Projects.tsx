import "./Projects.css";

type ProjectStatus = "Released" | "In Development" | "Live";

interface Project {
  num: string;
  title: string;
  category: string;
  desc: string;
  tags: string[];
  link: string;
  status: ProjectStatus;
}

const PROJECTS: Project[] = [
  {
    num: "00",
    title: "TODO",
    category: "TODO",
    desc: "ADD YOUR ACTUAL PROJECTS HERE TO REPLACE THESE PLACE HOLDERS",
    tags: [],
    link: "",
    status: "In Development",
  },
  {
    num: "01",
    title: "Bare-Metal RTOS",
    category: "Embedded Systems",
    desc: "A minimal real-time operating system written from scratch for ARM Cortex-M4. Preemptive scheduler, mutex/semaphore primitives, and a memory pool allocator. No external dependencies — pure C.",
    tags: ["C", "ARM Cortex-M4", "RTOS", "Scheduler"],
    link: "https://github.com/nickjaycock",
    status: "Released",
  },
  {
    num: "02",
    title: "CAN Bus Logger",
    category: "Embedded Systems",
    desc: "Automotive diagnostic data logger and decoder for CAN bus traffic. Runs on STM32 hardware with a serial interface and a Python companion tool for log analysis and visualisation.",
    tags: ["C", "STM32", "CAN Bus", "Python"],
    link: "https://github.com/nickjaycock",
    status: "Released",
  },
  {
    num: "03",
    title: "Project Axiom",
    category: "Game — Godot 4",
    desc: "A top-down shooter exploring procedural dungeon generation and emergent AI behaviour. Built in Godot 4 with a focus on performance, clean scene architecture, and satisfying game feel.",
    tags: ["Godot 4", "GDScript", "Procedural Gen", "2D"],
    link: "https://github.com/nickjaycock",
    status: "In Development",
  },
  {
    num: "04",
    title: "Gravity Well",
    category: "Game — Unity",
    desc: "A physics-based puzzle game in Unity where players manipulate gravitational fields to guide objects through increasingly complex levels. Emphasis on emergent mechanics from simple rules.",
    tags: ["Unity", "C#", "Physics", "Puzzle"],
    link: "https://github.com/nickjaycock",
    status: "In Development",
  },
  {
    num: "05",
    title: "This Portfolio",
    category: "Web",
    desc: "Built with React and Vite. Scroll-driven background image transitions, clean minimal design, and a focus on letting the work speak for itself.",
    tags: ["React", "TypeScript", "Vite", "CSS"],
    link: "https://github.com/nickjaycock",
    status: "Live",
  },
];

function statusClass(status: ProjectStatus): string {
  return status === "In Development" ? "status-dev" : "status-live";
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="eyebrow">Selected Work</div>
      <h2 className="section-heading">
        Things I've built.
        <br />
        <em>Things I'm building.</em>
      </h2>

      <div className="projects-list">
        {PROJECTS.map((project) => (
          <a
            key={project.num}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-row"
          >
            <span className="project-num">{project.num}</span>
            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-meta">
              <span className={`project-status ${statusClass(project.status)}`}>
                {project.status}
              </span>
              <span className="project-arrow">↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
