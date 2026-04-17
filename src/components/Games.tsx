import { useState } from 'react'
import './Games.css'

interface Game {
  id: string
  title: string
  engine: string
  desc: string
  controls: string[]
  embedUrl: string | null
  itchUrl: string
}

const GAMES: Game[] = [
  {
    id: 'axiom',
    title: 'Project Axiom',
    engine: 'Godot 4',
    desc: 'Top-down procedural shooter. Survive as long as you can in a dungeon that generates itself around you.',
    controls: ['WASD — Move', 'Mouse — Aim', 'Left Click — Fire', 'E — Interact', 'Esc — Pause'],
    embedUrl: null, // Replace with your Godot web export URL
    itchUrl: 'https://itch.io',
  },
  {
    id: 'gravity',
    title: 'Gravity Well',
    engine: 'Unity',
    desc: 'Physics-based puzzle game. Create and manipulate gravity wells to guide objects to their targets.',
    controls: ['Click — Place gravity well', 'Scroll — Adjust strength', 'Right Click — Remove well', 'R — Reset level'],
    embedUrl: null, // Replace with your Unity WebGL build URL
    itchUrl: 'https://itch.io',
  },
]

interface GamePanelProps {
  game: Game
}

function GamePanel({ game }: GamePanelProps) {
  const [launched, setLaunched] = useState(false)

  return (
    <div className="game-panel">
      <div className="game-viewport">
        {!launched ? (
          <div className="game-cover" onClick={() => setLaunched(true)}>
            <div className="game-cover-content">
              <span className="game-engine-label">{game.engine}</span>
              <h3 className="game-cover-title">{game.title}</h3>
              <p className="game-cover-desc">{game.desc}</p>
              <button className="btn primary game-launch-btn">Play Now</button>
            </div>
          </div>
        ) : game.embedUrl ? (
          <iframe
            src={game.embedUrl}
            title={game.title}
            className="game-iframe"
            allowFullScreen
            allow="autoplay; fullscreen *; pointer-lock *"
          />
        ) : (
          <div className="game-placeholder-launched">
            <p className="game-ph-msg">
              No embed URL set — add your hosted WebGL build URL to <code>Games.tsx</code>.
            </p>
            <a
              href={game.itchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View on itch.io ↗
            </a>
          </div>
        )}
      </div>

      <div className="game-meta">
        <div>
          <span className="game-meta-engine">{game.engine}</span>
          <h3 className="game-meta-title">{game.title}</h3>
          <p className="game-meta-desc">{game.desc}</p>
        </div>
        <div>
          <p className="game-controls-label">Controls</p>
          <ul className="game-controls">
            {game.controls.map((control) => (
              <li key={control}>{control}</li>
            ))}
          </ul>
        </div>
        <a
          href={game.itchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          View on itch.io ↗
        </a>
      </div>
    </div>
  )
}

export default function Games() {
  const [active, setActive] = useState(0)

  return (
    <section id="games">
      <div className="eyebrow">Playable Games</div>
      <h2 className="section-heading">
        Built to play.<br /><em>Right here.</em>
      </h2>

      <div className="games-switcher">
        {GAMES.map((game, i) => (
          <button
            key={game.id}
            className={`game-switch-btn${active === i ? ' active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="gsb-engine">{game.engine}</span>
            <span className="gsb-title">{game.title}</span>
          </button>
        ))}
      </div>

      <GamePanel key={active} game={GAMES[active]} />
    </section>
  )
}
