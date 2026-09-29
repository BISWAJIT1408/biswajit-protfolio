 "use client";

import { useState } from "react";
import {
  ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2, Download,
  ExternalLink, Github, GraduationCap, Linkedin, Mail, Menu, X,
  Database, Globe, Smartphone, Sparkles, Send, MapPin, Terminal
} from "lucide-react";

const profile = {
  name: "Biswajit Biswaranjan Sahoo",
  shortName: "Biswajit",
  role: "Aspiring Software Developer",
  email: "biswajitbiswarajnansahoo14@gmail.com",
  github: "https://github.com/BISWAJIT1408",
  linkedin: "www.linkedin.com/in/biswajit-biswaranjan-sahoo-a75079374",
  resume: "/Biswajit-Resume.pdf",
};

const skills = [
  { name: "Python", level: "Advanced", icon: "PY" },
  { name: "Java", level: "Intermediate", icon: "JA" },
  { name: "C", level: "Intermediate", icon: "C" },
  { name: "HTML & CSS", level: "Advanced", icon: "UI" },
  { name: "JavaScript", level: "Intermediate", icon: "JS" },
  { name: "Django", level: "Intermediate", icon: "DJ" },
  { name: "SQL / DBMS", level: "Advanced", icon: "DB" },
  { name: "Git & GitHub", level: "Intermediate", icon: "GT" },
  { name: "Data Structures", level: "Intermediate", icon: "DS" },
  { name: "Data Analysis", level: "Intermediate", icon: "DA" },
];

const projects = [
  {
    title: "GLP",
    type: "Gamified Learning Platform",
    description: "A rural-focused learning platform concept designed for Class 10 students, combining subjects, quizzes, progress and gamification.",
    tags: ["Django", "Python", "HTML/CSS", "Education"],
    icon: "SP",
  },
  {
    title: "Data Analysis Projects",
    type: "Python • SQL • BI",
    description: "Practical data-analysis work focused on cleaning, exploring and presenting useful insights with Python, SQL and visualization tools.",
    tags: ["Python", "Pandas", "SQL", "Power BI"],
    icon: "DA",
  },
  {
    title: "Programming Lab Projects",
    type: "DSA • Java • C",
    description: "Academic implementations covering sorting, searching, greedy algorithms, data structures and core programming concepts.",
    tags: ["C", "Java", "DSA", "Algorithms"],
    icon: "DS",
  },
];

const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => scrollTo("home")} aria-label="Go home">
            <span className="brand-mark">B</span>
            <span>Biswajit<span className="dot">.</span></span>
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())}>{item}</button>
            ))}
            <a className="nav-resume" href={profile.resume} download>
              Resume <Download size={15} />
            </a>
          </div>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <section id="home" className="hero section">
        <div className="hero-glow one" />
        <div className="hero-glow two" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="pulse" /> Available for opportunities</div>
            <h1>Building digital experiences with <span>code & curiosity.</span></h1>
            <p className="hero-text">
              Hi, I&apos;m <strong>Biswajit Biswaranjan Sahoo</strong> — an MCA student and aspiring
              software developer who enjoys turning ideas into useful, responsive and user-friendly applications.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => scrollTo("projects")}>
                View Projects <ArrowUpRight size={18} />
              </button>
              <button className="secondary-btn" onClick={() => scrollTo("contact")}>
                Contact Me <Mail size={18} />
              </button>
            </div>
            <div className="socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19}/></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19}/></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={19}/></a>
            </div>
          </div>

          <div className="hero-card-wrap reveal delay">
            <div className="code-card">
              <div className="window-bar"><span/><span/><span/><b>developer.ts</b></div>
              <pre><code><span className="pink">const</span> developer = {"{"}{"\n"}
  name: <span className="green">&quot;Biswajit&quot;</span>,{"\n"}
  education: <span className="green">&quot;MCA&quot;</span>,{"\n"}
  focus: [<span className="green">&quot;Software&quot;</span>,{"\n"}
          <span className="green">&quot;Web&quot;</span>,{"\n"}
          <span className="green">&quot;Python&quot;</span>],{"\n"}
  mindset: <span className="green">&quot;Keep learning&quot;</span>{"\n"}
{"}"};</code></pre>
              <div className="code-status"><span className="status-dot"/> Building the next idea...</div>
            </div>
          </div>
        </div>
        <button className="scroll-down" onClick={() => scrollTo("about")} aria-label="Scroll down"><ArrowDown size={18}/></button>
      </section>

      <section id="about" className="section">
        <div className="container">
          <SectionHeading eyebrow="ABOUT ME" title="A developer who loves to learn." />
          <div className="about-grid">
            <div className="about-text reveal">
              <p>
                I am pursuing my <strong>Master of Computer Applications (MCA)</strong> after completing
                my B.Sc. ITM. I&apos;m interested in software development, web technologies, Python and data-driven applications.
              </p>
              <p>
                My learning journey includes academic programming, Django projects, databases, data structures,
                SQL and practical project building. I enjoy solving problems step by step and continuously improving my skills.
              </p>
              <div className="facts">
                <div><GraduationCap/><span><b>MCA</b><small>Postgraduate Studies</small></span></div>
                <div><Code2/><span><b>Software</b><small>Development Focus</small></span></div>
                <div><MapPin/><span><b>Odisha, India</b><small>Based in</small></span></div>
              </div>
            </div>
            <div className="about-panel reveal delay">
              <div className="mini-icon"><Sparkles size={21}/></div>
              <h3>What I bring</h3>
              <ul>
                <li>Strong foundation in programming and problem solving</li>
                <li>Hands-on experience with Python, Django and SQL</li>
                <li>Responsive frontend development fundamentals</li>
                <li>Curiosity for data, AI/ML and modern software tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow="TECH STACK" title="Tools I work and learn with." />
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div className="skill-card reveal" style={{ animationDelay: `${i * 40}ms` }} key={skill.name}>
                <div className="skill-icon">{skill.icon}</div>
                <div><h3>{skill.name}</h3><p>{skill.level}</p></div>
              </div>
            ))}
          </div>
          <div className="skill-categories">
            <div><Terminal/><span>Languages</span><b>Python · Java · C · JavaScript</b></div>
            <div><Globe/><span>Web</span><b>HTML · CSS · Django · Responsive UI</b></div>
            <div><Database/><span>Data</span><b>SQL · DBMS · Pandas · Power BI</b></div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <SectionHeading eyebrow="SELECTED WORK" title="Projects that turn learning into practice." />
          <div className="projects-grid">
            {projects.map((project, i) => (
              <article className="project-card reveal" style={{ animationDelay: `${i * 90}ms` }} key={project.title}>
                <div className="project-top"><div className="project-icon">{project.icon}</div><ExternalLink size={19}/></div>
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow="EXPERIENCE & LEARNING" title="Growing through every opportunity." />
          <div className="timeline">
            <div className="timeline-item reveal">
              <div className="timeline-dot"/>
              <div className="timeline-card">
                <span className="time">2026</span>
                <h3>Data Science / Python Internship</h3>
                <p>Building practical experience with Python, data analysis concepts and project-based learning.</p>
              </div>
            </div>
            <div className="timeline-item reveal">
              <div className="timeline-dot"/>
              <div className="timeline-card">
                <span className="time">2025 — Present</span>
                <h3>MCA • Computer Applications</h3>
                <p>Developing strong foundations in software engineering, databases, DSA, networking and application development.</p>
              </div>
            </div>
            <div className="timeline-item reveal">
              <div className="timeline-dot"/>
              <div className="timeline-card">
                <span className="time">Completed</span>
                <h3>B.Sc. ITM</h3>
                <p>Built the academic foundation that led me toward postgraduate study and software development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-box reveal">
            <div className="contact-copy">
              <div className="eyebrow">LET&apos;S CONNECT</div>
              <h2>Have an idea or an opportunity?</h2>
              <p>I&apos;m open to internships, entry-level software opportunities, projects and meaningful collaborations.</p>
              <div className="contact-links">
                <a href={`mailto:${profile.email}`}><Mail size={17}/> {profile.email}</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
                <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <label>Name<input required placeholder="Your name" /></label>
              <label>Email<input required type="email" placeholder="you@example.com" /></label>
              <label>Message<textarea required rows={5} placeholder="Tell me about your idea or opportunity..." /></label>
              <button className="primary-btn" type="submit">{sent ? "Message Ready ✓" : "Send Message"} <Send size={17}/></button>
              {sent && <small className="form-note">This demo form is ready for an email/API integration.</small>}
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer">
          <span>© {new Date().getFullYear()} Biswajit Biswaranjan Sahoo</span>
          <span>Built with Next.js & React <span className="dot">•</span> Designed for the web.</span>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}