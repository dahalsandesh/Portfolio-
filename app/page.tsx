"use client"

import { useState } from "react"
import { ArrowUpRight, Check, Copy, Mail, Move3d, Plus, X } from "lucide-react"

const projects = [
  { number: "01", title: "Kishcare ERP", kind: "Healthcare operations", year: "2024", result: "Made a complicated care network feel calm, legible, and human.", role: "Product design + frontend systems", tags: ["systems", "workflow", "healthcare"], color: "signal" },
  { number: "02", title: "Enterprise HRMS", kind: "People infrastructure", year: "2023", result: "Turned the daily maze of people ops into a place teams actually want to use.", role: "UX direction + web application", tags: ["strategy", "product", "scale"], color: "ink" },
  { number: "03", title: "SportsConnectPro", kind: "Community platform", year: "2022", result: "Built the energy of a sports crowd into a social product with room to grow.", role: "Brand, interaction + launch", tags: ["community", "brand", "motion"], color: "sun" },
]

export default function Home() {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null)
  const [copied, setCopied] = useState(false)
  const [orb, setOrb] = useState(0)
  const [message, setMessage] = useState("")

  const share = async () => { await navigator.clipboard?.writeText(window.location.href); setCopied(true); window.setTimeout(() => setCopied(false), 1600) }
  const send = async (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); const form = new FormData(event.currentTarget); const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(form)) }); setMessage(res.ok ? "Message received. I’ll be in touch shortly." : "Please email me directly — the form hit a snag."); if (res.ok) event.currentTarget.reset() }

  return <main id="top">
    <header className="site-header"><a href="#top" className="wordmark">SD<span>.</span></a><nav><a href="#work">Selected work</a><a href="#about">Approach</a><a href="#contact" className="nav-contact">Start a project <ArrowUpRight aria-hidden="true" /></a><button onClick={share} aria-label="Copy page link" className="share-button">{copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />} {copied ? "Copied" : "Share"}</button></nav></header>

    <section className="hero guide-grid"><div className="hero-kicker"><span>Independent digital maker</span><span>Chitwan, Nepal / everywhere</span></div><div className="hero-copy"><p className="eyebrow">Field guide no. 01 — things worth making</p><h1>Software with<br /><em>a little</em> <span>mis­chief.</span></h1><p className="hero-intro">I’m Sandesh Dahal, a creative engineer and independent studio building useful, unmistakable digital products for ambitious people.</p><a className="circle-link" href="#work">Explore<br />the work <ArrowUpRight aria-hidden="true" /></a></div><div className="hero-note"><Move3d aria-hidden="true" /><span>There is more<br />than one way in.</span></div></section>

    <section className="statement"><div className="section-label">A note from the field</div><p>I like the bit where a vague idea becomes something you can touch. Part strategist, part designer, part builder — I work across the whole distance between <strong>“what if?”</strong> and <strong>“ship it.”</strong></p></section>

    <section id="work" className="work-section"><div className="section-heading"><div><span className="section-label">02 / Selected field notes</span><h2>Proof, not<br /><i>promises.</i></h2></div><p>Products, platforms, and experiments made with care for teams who want more than the default.</p></div><div className="project-list">{projects.map((project) => <button key={project.title} className={`project-row ${project.color}`} onClick={() => setSelected(project)}><span className="project-number">{project.number}</span><span className="project-title">{project.title}</span><span className="project-kind">{project.kind}</span><span className="project-year">{project.year}</span><ArrowUpRight className="project-arrow" aria-hidden="true" /></button>)}</div></section>

    <section id="about" className="lab-section"><div className="section-label">03 / The specimen lab</div><div className="lab-layout"><div><h2>How I turn<br /><i>curiosity</i><br />into craft.</h2><p className="lab-copy">Move the specimen. It’s a small model of the way I work: stay curious, look for the useful tension, then make the complicated thing feel obvious.</p></div><div className="specimen" style={{ transform: `rotate(${orb}deg)` }}><div className="specimen-ring ring-one" /><div className="specimen-ring ring-two" /><div className="specimen-core">SD</div><span className="specimen-label label-one">question</span><span className="specimen-label label-two">shape</span><span className="specimen-label label-three">signal</span></div><div className="lab-controls"><button onClick={() => setOrb((value) => value - 18)} aria-label="Rotate specimen counterclockwise">−</button><span>{Math.abs(orb / 18) % 2 ? "look closer" : "drag the idea"}</span><button onClick={() => setOrb((value) => value + 18)} aria-label="Rotate specimen clockwise">+</button></div></div></section>

    <section className="services"><div className="section-label">04 / What I can do</div><div className="service-grid"><div><h2>Small studio.<br /><i>Big swing.</i></h2><p>I partner with founders, teams, and brands on commission projects where the details matter.</p></div><div className="service-list">{["Find the sharp idea", "Give it a visual language", "Build the useful machine", "Make people remember it"].map((item, index) => <div className="service-item" key={item}><span>0{index + 1}</span><strong>{item}</strong><Plus aria-hidden="true" /></div>)}</div></div></section>

    <section id="contact" className="contact-section"><div className="section-label">05 / Open invitation</div><h2>Bring me the<br /><i>good weird.</i></h2><div className="contact-bottom"><p>Have a product, platform, or beautifully unreasonable idea? Tell me the part you can’t stop thinking about.</p><form onSubmit={send}><input name="name" required placeholder="Your name" aria-label="Your name" /><input name="email" required type="email" placeholder="Your email" aria-label="Your email" /><textarea name="message" required placeholder="The good part..." aria-label="Your project details" rows={2} /><button type="submit">Send a note <Mail aria-hidden="true" /></button><span aria-live="polite">{message}</span></form></div></section>

    <footer><span>© 2026 Sandesh Dahal</span><span>Independent creative engineering / available for commissions</span><a href="#top">Back to top ↑</a></footer>
    {selected && <div className="case-overlay" role="dialog" aria-modal="true" aria-label={`${selected.title} case file`}><button className="close-case" onClick={() => setSelected(null)} aria-label="Close case file"><X /></button><div className="case-file"><span className="section-label">Case file {selected.number}</span><p className="eyebrow">{selected.kind} / {selected.year}</p><h2>{selected.title}</h2><p className="case-result">{selected.result}</p><div className="case-meta"><div><small>Role</small><strong>{selected.role}</strong></div><div><small>Tags</small><strong>{selected.tags.join(" · ")}</strong></div></div><p className="case-detail">A considered digital system shaped around real people, real constraints, and the little moments that turn a tool into a place. More details available in a conversation.</p><a href="#contact" onClick={() => setSelected(null)} className="case-link">Ask about this project <ArrowUpRight /></a></div></div>}
  </main>
}
