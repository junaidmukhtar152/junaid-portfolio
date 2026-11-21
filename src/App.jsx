import React, { useEffect, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Database, Layers3, Braces, Terminal, GraduationCap, Sparkles,
  ExternalLink, CheckCircle2, MapPin, Send, BriefcaseBusiness, GitBranch
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Easy Expense Tracker",
    type: "Full-stack MERN application",
    description: "A practical expense tracker to record, update, search and manage transactions, with clear income, expense and balance summaries.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    status: "Deployed",
    link: "https://github.com/junaidmukhtar152/easy-expense-tracker",
    live: "https://easy-expense-tracker-aguc.vercel.app",
    icon: "↗",
    featured: true
  },
  {
    number: "02",
    name: "ShopEase — E-commerce Store",
    type: "Frontend project · CodeAlpha internship task",
    description: "An online-store experience with reusable React components, product cards, navigation and a shopping-cart interface. Backend and additional store features are planned as the project develops.",
    stack: ["React", "JavaScript", "CSS", "Components"],
    status: "In progress",
    link: "https://github.com/junaidmukhtar152/CodeAlpha_EcommerceStore",
    icon: "⌘"
  },
  {
    number: "03",
    name: "Student MVC REST API",
    type: "Backend learning project",
    description: "A structured REST API built around the MVC pattern, with student CRUD operations, Mongoose models, middleware, validation, centralized error handling and Postman testing.",
    stack: ["Node.js", "Express", "MongoDB", "Mongoose", "REST API"],
    status: "Built",
    link: "https://github.com/junaidmukhtar152",
    icon: "{ }"
  },
  {
    number: "04",
    name: "React & JavaScript Practice Projects",
    type: "Learning projects",
    description: "Small projects and exercises built to strengthen programming fundamentals, including a React counter, a to-do app, JavaScript practice and MongoDB CRUD exercises.",
    stack: ["JavaScript", "React", "HTML", "CSS", "MongoDB"],
    status: "Learning collection",
    link: "https://github.com/junaidmukhtar152",
    icon: "✳"
  }
];

const skillGroups = [
  { title: "Frontend", icon: Code2, items: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"] },
  { title: "Backend", icon: Braces, items: ["Node.js", "Express.js", "REST APIs", "Mongoose", "MVC pattern"] },
  { title: "Databases", icon: Database, items: ["MongoDB", "MySQL"] },
  { title: "Tools & foundations", icon: Terminal, items: ["Git", "GitHub", "VS Code", "Postman", "DSA fundamentals"] }
];

const learning = ["MERN stack development", "Agentic AI & AI integration", "Docker & CI/CD", "Shadcn UI", "Stripe integration"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "journey", "contact"];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
    return () => { observer.disconnect(); revealObserver.disconnect(); };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const navItems = ["Home", "About", "Skills", "Projects", "Journey", "Contact"];

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">J<span>.</span></span><span>Junaid<span className="muted"> Mukhtar</span></span></a>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {navItems.map(item => <a key={item} className={active === item.toLowerCase() ? "nav-link active" : "nav-link"} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR LEARNING & OPPORTUNITIES</div>
            <p className="hello">Hello, I'm</p>
            <h1>Junaid<br /><span className="gradient-text">Mukhtar.</span></h1>
            <h2>Software Engineering Student <span className="accent">·</span> Aspiring Full-Stack Developer</h2>
            <p className="hero-description">I build clean, responsive web experiences and practical applications. I enjoy turning ideas into useful products while growing my skills one project at a time.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href="#contact">Get in touch <ArrowRight size={16} /></a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/junaidmukhtar152" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href="mailto:YOUR_EMAIL@example.com" aria-label="Email"><Mail size={18} /></a>
              <span className="social-note">Faisalabad, Pakistan</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Decorative developer code card">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="code-card">
              <div className="code-top"><div className="window-dots"><i /><i /><i /></div><span>junaid.js</span><span className="code-top-right">● ● ●</span></div>
              <div className="code-content">
                <div className="code-line"><span className="ln">01</span><span><b className="pink">const</b> developer <b className="pink">=</b> {'{'}</span></div>
                <div className="code-line indent"><span className="ln">02</span><span>name: <b className="green">'Junaid Mukhtar'</b>,</span></div>
                <div className="code-line indent"><span className="ln">03</span><span>focus: <b className="green">'Full-Stack'</b>,</span></div>
                <div className="code-line indent"><span className="ln">04</span><span>stack: [<b className="green">'React'</b>,</span></div>
                <div className="code-line indent more"><span className="ln">05</span><span><b className="green">'Node.js'</b>, <b className="green">'MongoDB'</b>],</span></div>
                <div className="code-line indent"><span className="ln">06</span><span>mindset: <b className="green">'Always learning'</b>,</span></div>
                <div className="code-line indent"><span className="ln">07</span><span>build: <b className="blue">() =&gt;</b> <b className="green">'Something useful'</b></span></div>
                <div className="code-line"><span className="ln">08</span><span>{'}'};</span></div>
                <div className="code-line output"><span className="ln">09</span><span><b className="muted-code">// Let's build something great.</b></span></div>
                <div className="code-line cursor-line"><span className="ln">10</span><span className="cursor">▍</span></div>
              </div>
              <div className="code-footer"><span><span className="status-dot" /> Building with purpose</span><span>UTF-8&nbsp;&nbsp; JavaScript</span></div>
            </div>
            <div className="float-chip chip-react"><span>⚛</span> React.js</div>
            <div className="float-chip chip-node"><span>⬡</span> Node.js</div>
            <div className="float-chip chip-db"><Database size={15} /> MongoDB</div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-heading reveal"><p className="eyebrow">01 / ABOUT ME</p><h2>A little about <span className="gradient-text">my journey.</span></h2></div>
          <div className="about-grid">
            <div className="about-main reveal">
              <p className="lead">I'm a Software Engineering student who loves learning by building.</p>
              <p>My journey is focused on modern web development—from creating responsive interfaces with HTML, CSS and React to building server-side applications and working with databases. I believe strong fundamentals, consistent practice and real projects are the best way to grow as a developer.</p>
              <p>I'm currently strengthening my full-stack skills, exploring modern development tools and working on an academic Smart Public Transportation project.</p>
              <a className="text-link" href="https://github.com/junaidmukhtar152" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={16} /></a>
            </div>
            <div className="about-side reveal">
              <div className="info-card"><GraduationCap /><div><span>EDUCATION</span><strong>BS Software Engineering</strong><small>Government College University Faisalabad</small><small>7th Semester</small></div></div>
              <div className="info-card"><MapPin /><div><span>LOCATION</span><strong>Faisalabad, Pakistan</strong><small>Open to opportunities</small></div></div>
              <div className="info-card"><Sparkles /><div><span>CURRENT FOCUS</span><strong>Full-Stack Web Development</strong><small>Learning · Building · Improving</small></div></div>
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-heading reveal"><p className="eyebrow">02 / TOOLKIT</p><h2>Technologies I <span className="gradient-text">work with.</span></h2><p className="section-subtitle">A growing toolkit built through coursework, practice and hands-on projects.</p></div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return <article className="skill-card reveal" style={{"--delay": `${index * 80}ms`}} key={group.title}>
                <div className="skill-card-head"><span className="skill-icon"><Icon size={19} /></span><h3>{group.title}</h3></div>
                <div className="tag-list">{group.items.map(item => <span className="skill-tag" key={item}>{item}</span>)}</div>
              </article>;
            })}
          </div>
          <div className="learning-panel reveal"><div><span className="eyebrow">CURRENTLY EXPLORING</span><h3>Always adding to the toolkit.</h3></div><div className="learning-tags">{learning.map(item => <span key={item}><span className="learning-dot" />{item}</span>)}</div></div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="section-heading reveal"><p className="eyebrow">03 / SELECTED WORK</p><h2>Things I've <span className="gradient-text">built.</span></h2><p className="section-subtitle">A selection of projects and practical exercises from my development journey.</p></div>
          <div className="projects-list">
            {projects.map(project => <article className={`project-card reveal ${project.featured ? "featured" : ""}`} key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-body">
                <div className="project-meta"><span>{project.type}</span><span className={`project-status ${project.status === "Deployed" ? "deployed" : ""}`}><i />{project.status}</span></div>
                <h3>{project.name}</h3><p>{project.description}</p>
                <div className="tag-list project-tags">{project.stack.map(tag => <span className="skill-tag" key={tag}>{tag}</span>)}</div>
                <div className="project-links"><a href={project.link} target="_blank" rel="noreferrer">Source code <Github size={15} /></a>{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live website <ExternalLink size={15} /></a>}</div>
              </div>
              <div className="project-art"><div className="art-glow" /><span>{project.icon}</span><small>PROJECT_{project.number}</small></div>
            </article>)}
          </div>
        </section>

        <section className="section-wrap journey-section" id="journey">
          <div className="section-heading reveal"><p className="eyebrow">04 / WHAT'S NEXT</p><h2>Learning today. <span className="gradient-text">Building tomorrow.</span></h2></div>
          <div className="journey-grid">
            <div className="journey-card reveal"><div className="journey-icon"><GraduationCap /></div><span className="eyebrow">ACADEMIC PROJECT · IN PROGRESS</span><h3>Smart Public Transportation</h3><p>My current final-year project direction: exploring how a digital system can help students understand bus locations, routes, availability and estimated arrival times. Currently in the requirements and research phase.</p><div className="journey-note"><span className="pulse-dot" /> Research & requirements</div></div>
            <div className="journey-card journey-card-alt reveal"><div className="journey-icon"><GitBranch /></div><span className="eyebrow">DEVELOPMENT ROADMAP</span><h3>My next milestones</h3><ul className="milestone-list"><li><CheckCircle2 /> Strengthen JavaScript & React fundamentals</li><li><CheckCircle2 /> Build and refine full-stack applications</li><li><CheckCircle2 /> Improve DSA and problem-solving</li><li><CheckCircle2 /> Explore deployment, Docker and CI/CD</li><li><CheckCircle2 /> Learn practical AI integration</li></ul></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner reveal">
            <p className="eyebrow">05 / GET IN TOUCH</p><h2>Have an idea?<br /><span className="gradient-text">Let's make it happen.</span></h2>
            <p className="contact-copy">I'm interested in learning opportunities, internships, collaboration and meaningful projects. Feel free to reach out.</p>
            <div className="contact-actions"><a className="button button-primary" href="mailto:YOUR_EMAIL@example.com">Say hello <Mail size={17} /></a><a className="button button-outline" href="https://github.com/junaidmukhtar152" target="_blank" rel="noreferrer"><Github size={17} /> GitHub profile</a></div>
            <div className="contact-bottom"><span><MapPin size={14} /> Faisalabad, Pakistan</span><span>Made with curiosity & code <span className="heart">♥</span></span></div>
          </div>
        </section>
      </main>
      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">J<span>.</span></span><span>Junaid<span className="muted"> Mukhtar</span></span></a><span>© {new Date().getFullYear()} Junaid Mukhtar. Keep learning. Keep building.</span><a href="#home" className="back-top">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
