import "./Hobbies.css";

interface Hobby {
  title: string;
  body: string;
  tags: string[];
}

const HOBBIES: Hobby[] = [
  {
    title: "Rock climbing",
    body: "Climbing is where problem-solving meets raw physicality and adventure. Every route is a puzzle — reading the wall, finding the sequence, committing to moves that demand total focus. From technical sport climbing to deep water soloing above open ocean, the consequences are real and the reward is proportional. There is nothing quite like pulling through a crux high above the water, or topping out a route that has taken weeks to crack.",
    tags: ["Bouldering", "Sport", "Trad", "Deep Water Soloing", "Outdoors"],
  },
  {
    title: "Game jams",
    body: "Game development is as much a creative outlet as it is a technical one. Participating in 48-hour game jams forces quick decisions in development of an idea that work projects don't really demand, with the end result being unknowable in it's quality and stability until the 48 hours comes to an end. Game development scratches an artistic itch for me in a setting where I can combine visual design with code and gameplay. Art, design, code, and feel all have to come together under real time pressure.",
    tags: ["Godot", "Unity", "Game Design", "Game Jams"],
  },
  {
    title: "Miniature painting",
    body: "Miniature painting scratches the same itch as game development but with the more physical medium of paint on a model. Where code and game design demand constant problem-solving and decision-making, painting offers relaxation and an end result of little importance so long as the process was enjoyable.",
    tags: ["Warhammer", "Painting", "Hobby"],
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
            src="/climbing2.jpg"
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
