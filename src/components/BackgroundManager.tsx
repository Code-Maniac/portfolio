type SceneId = 'hero' | 'about' | 'cv' | 'projects' | 'games'

interface Scene {
  id: SceneId
  url: string
  position: string
}

const SCENES: Scene[] = [
  {
    id: 'hero',
    url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1800&q=80',
    position: 'center 40%',
  },
  {
    id: 'about',
    url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1800&q=80',
    position: 'center 50%',
  },
  {
    id: 'cv',
    url: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1800&q=80',
    position: 'center 60%',
  },
  {
    id: 'projects',
    url: 'https://images.unsplash.com/photo-1439853949212-36089bfb06e6?w=1800&q=80',
    position: 'center 50%',
  },
  {
    id: 'games',
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800&q=80',
    position: 'center 40%',
  },
]

interface Props {
  activeScene: SceneId
}

export default function BackgroundManager({ activeScene }: Props) {
  return (
    <div aria-hidden="true">
      {SCENES.map((scene) => (
        <div
          key={scene.id}
          className={`bg-scene${activeScene === scene.id ? ' active' : ''}`}
        >
          <img
            src={scene.url}
            alt=""
            style={{ objectPosition: scene.position }}
            loading={scene.id === 'hero' ? 'eager' : 'lazy'}
          />
        </div>
      ))}
    </div>
  )
}
