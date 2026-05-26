import "./Projects.css";

type ProjectStatus =
  | "Released"
  | "In Development"
  | "Ongoing Development"
  | "Live";

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
    num: "01",
    title: "NetCAN",
    category: "Embedded Systems Development Tools",
    desc: "A development tool designed to provide an alternative to Linux VCAN, but on Windows and MacOS using named pipes, with plans to add functionality for using UDPSockets for development over network.",
    tags: ["Rust", "CAN", "Windows", "MacOS"],
    link: "https://github.com/code-maniac/netcan",
    status: "Ongoing Development",
  },
  {
    num: "01",
    title: "J1939",
    category: "Embedded Systems",
    desc: "A J1939 CAN stack written in Rust, including integration into NetCAN project. There are plans to add logging tools to this project, alongside auto processing/reply of messages based on configuration files.",
    tags: ["Rust", "CAN"],
    link: "https://github.com/code-maniac/j1939",
    status: "Ongoing Development",
  },
  {
    num: "02",
    title: "CHIP-8",
    category: "Emulation",
    desc: "A CHIP8 emulator written in Rust, which served as my first project in Rust when I was just learning it",
    tags: ["Rust", "Emulation"],
    link: "https://github.com/code-maniac/chip8",
    status: "Released",
  },
  {
    num: "03",
    title: "Harvest Shroom",
    category: "Game - Godot 3",
    desc: "A game about eating mushrooms, made for Ludum Dare 52. This game is available to play below",
    tags: ["Godot", "GDScript", "Puzzle", "2D"],
    link: "https://github.com/code-maniac/harvest-shroom",
    status: "Released",
  },
  {
    num: "04",
    title: "Bert the Introvert",
    category: "Game - Unity",
    desc: "A game about avoidance, made for Ludum Dare 54. This game is available to play below",
    tags: ["Unity", "C#", "2D"],
    link: "https://github.com/code-maniac/bert-the-introvert",
    status: "Released",
  },
  {
    num: "05",
    title: "Tetris",
    category: "Game - Godot 4",
    desc: "A clone of Tetris on the NES. This game is available to play below, although could still use some polish",
    tags: ["Godot", "GDScript", "2D", "Classic Gaming"],
    link: "https://github.com/code-maniac/tetris",
    status: "Released",
  },
  {
    num: "06",
    title: "This Portfolio",
    category: "Web",
    desc: "Built with React and Vite. Scroll-driven background image transitions, clean minimal design, and a focus on letting the work speak for itself.",
    tags: ["React", "TypeScript", "Vite", "CSS"],
    link: "https://github.com/code-maniac/portfolio",
    status: "Live",
  },
  {
    num: "07",
    title: "Dotbot Omnipackage",
    category: "Plugin",
    desc: "A plugin for Dotbot, written in Python, to support pulling of packages from multiple different linux package managers, depending on linux distro. Used to aid auto setup of newly a newly installed Linux distro.",
    tags: ["Python", "Linux"],
    link: "https://github.com/code-maniac/dotbot-omnipkg",
    status: "Live",
  },
  {
    num: "08",
    title: "Godot Blendtree Wizard",
    category: "Addon",
    desc: "A Godot 4 addon for automatic creation of animation tree blend spaces based on animations in an Animation Player. Originally created to aid my own workflow in a currently ongoing project that is not listed here, and autogenerates animation trees for characters that would otherwise take in the tens of hours. I now plan to fully release this on the godot asset store as a free plugin at a later date.",
    tags: ["GDScript", "Addon", "Workflow Aid"],
    link: "https://github.com/code-maniac/godot-blendtree-wizard",
    status: "In Development",
  },
];

function statusClass(status: ProjectStatus): string {
  return ["In Development", "Ongoing Development"].includes(status)
    ? "status-dev"
    : "status-live";
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
