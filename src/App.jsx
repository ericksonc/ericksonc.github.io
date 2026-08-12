import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Video from './components/Video.jsx'
import FeatureRow from './components/FeatureRow.jsx'
import InviteForm from './components/InviteForm.jsx'
import Footer from './components/Footer.jsx'

const FEATURES = [
  {
    eyebrow: 'Observe',
    title: 'See all your agents, in real time.',
    bullets: [
      'See the status of active sessions',
      'See what was delivered in completed sessions',
      "Know what needs your attention now, and what doesn't",
    ],
    shot: 'observe',
    src: '/shots/observe.webp',
    alt: 'Observe — run timeline',
    flip: false,
  },
  {
    eyebrow: 'Direct',
    title: 'Flexible native agentic runtime.',
    bullets: [
      'Build agents with built-in memory',
      'Custom agent extensions',
      'Choose any model, or use your ChatGPT subscription',
    ],
    shot: 'direct',
    src: '/shots/direct.webp',
    alt: 'Direct — chat composer and model picker',
    flip: true,
  },
  {
    eyebrow: 'Orchestrate',
    title: 'Powerful multi-agent workflows.',
    bullets: [
      'Orchestrate 2 agents, or 200',
      'Define workflows yourself, or let your agents build them for you',
      'Auditable, reusable, and customizable',
    ],
    shot: 'orchestrate',
    src: '/shots/orchestrate.webp',
    alt: 'Orchestrate — agent workflow graph',
    flip: false,
  },
]

function scrollToInvite() {
  const el = document.getElementById('invite')
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const y = el.getBoundingClientRect().top + window.scrollY - 40
  window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' })
}

export default function App() {
  return (
    <div className="page">
      <Header onRequestInvite={scrollToInvite} />
      <main>
        <Hero />
        <Video />
        {FEATURES.map((f) => (
          <FeatureRow key={f.eyebrow} {...f} />
        ))}
        <InviteForm />
      </main>
      <Footer />
    </div>
  )
}
