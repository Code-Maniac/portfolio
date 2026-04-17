import "./Hobbies.css";

interface Hobby {
  title: string;
  body: string;
  tags: string[];
}

const HOBBIES: Hobby[] = [
  {
    title: "Rock climbing",
    body: "Climbing is where problem-solving meets physicality. Whether it's working a technical boulder problem or committing to a long trad route, the focus it demands is unlike anything else. I'm drawn to the same things in climbing that I am in engineering — reading a system, finding the efficient solution, and trusting your gear.",
    tags: ["Bouldering", "Sport", "Trad", "Outdoors"],
  },
  {
    title: "Electronics & tinkering",
    body: "Outside of work I still find myself pulling apart hardware just to see how it works. Personal projects range from custom mechanical keyboards to home automation built on bare microcontrollers — no cloud required.",
    tags: ["Electronics", "DIY", "Microcontrollers"],
  },
  {
    title: "Game jams",
    body: "Participating in 48-hour game jams is one of the best ways I've found to sharpen creative instincts under pressure. The constraint forces decisions that polished projects never demand.",
    tags: ["Godot", "Unity", "Game Design"],
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies">
      <div className="eyebrow">Beyond the code</div>
      <h2 className="section-heading">
        A bit more
        <br />
        <em>about me.</em>
      </h2>

      <div className="hobbies-grid">
        <div className="hobbies-feature">
          <img
            src="/climbing.jpg"
            alt="Nick Jaycock rock climbing"
            className="hobbies-feature-img"
          />
          <div className="hobbies-feature-caption">
            <span className="eyebrow" style={{ marginBottom: 0 }}>
              Main passion
            </span>
            <p>Rock climbing</p>
          </div>
        </div>

        <div className="hobbies-list">
          {HOBBIES.map((hobby) => (
            <div key={hobby.title} className="hobby-row">
              <h3 className="hobby-title">{hobby.title}</h3>
              <p className="hobby-body">{hobby.body}</p>
              <div className="hobby-tags">
                {hobby.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
