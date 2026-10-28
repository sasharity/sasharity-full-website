import { useEffect, useState } from "react";
import "./Portfolio.css";

const projects = [
  {
    number: "01",
    title: "LMN Psychiatry",
    category: "Web Application",
    description:
      "A responsive city discovery platform designed to help users discover things to do, places to visit and experiences around Lagos.",
    technologies: ["HTML", "CSS", "JavaScript", "API", "ES Modules"],
    image: "/images/LMNPsychiatry.png",
    link: "https://lmnpsychiatry.com/"
  },
  {
    number: "02",
    title: "LagosToDo",
    category: "Web Application",
    description:
      "A responsive website for patients to schedule appointments, view services and learn about the clinic.",
    technologies: ["HTML", "CSS", "JavaScript", "API", "ES Modules"],
    image: "/images/lagos_todo.png",
    link: "https://sasharity.github.io/wdd231/finalproject/",
  },
  {
    number: "03",
    title: "Invoice Tracker",
    category: "Full Stack Application",
    description:
      "A full-stack invoice management application involving authentication, database integration, seeded data and API-driven functionality.",
    technologies: ["C#", ".NET", "SQL", "Supabase", "API"],
    image: "/images/invoice_tracker_image.png",
    link: "https://invoice-tracker-363n.onrender.com/",
  },
  {
    number: "04",
    title: "Handcrafted Haven",
    category: "E-Commerce",
    description:
      "A modern e-commerce experience focused on product presentation, responsive design and a clean customer journey.",
    technologies: ["React", "JavaScript", "CSS", "API"],
    image: "/images/handcraftedhaven_image.png",
    link: "https://handcrafted-haven-8qutyxpsw-kihernandezs-projects.vercel.app/",
  },
  {
    number: "05",
    title: "I Can Work Hub",
    category: "Marketplace Concept",
    description:
      "A marketplace concept connecting skilled workers with people looking for reliable services and opportunities.",
    technologies: ["HTML", "CSS", "JavaScript", "API", "ES Modules"],
    image: "/images/icanwork_image.png",
    link: "https://i-can-work-hub.onrender.com",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "C#",
  ".NET",
  "SQL",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "REST APIs",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">

      {/* Cursor decoration */}
      <div className="cursor-glow"></div>

      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          S<span>.I.</span>O
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Let's Talk
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Hero */}
      <main>

        <section className="hero" id="home">
          <div className="hero-background">
            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>
            <div className="grid-overlay"></div>
          </div>

          <div className="hero-content">
            <div className="hero-intro reveal">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <h1 className="hero-title reveal">
              I build
              <span className="outline-text"> digital</span>
              <br />
              experiences.
            </h1>

            <div className="hero-bottom reveal">
              <div className="hero-description">
                <p>
                  I'm <strong>Iruoghene Sasha</strong>, a full-stack web
                  developer who combines clean engineering with thoughtful
                  design to create digital experiences that feel as good as
                  they work.
                </p>

                <div className="hero-actions">
                  <a href="#work" className="button button-primary">
                    Explore my work
                    <span></span>
                  </a>

                  <a href="#contact" className="button button-outline">
                    Let's collaborate
                  </a>
                </div>
              </div>

              <div className="hero-side">
                <span>BASED IN</span>
                <strong>LAGOS, NIGERIA</strong>
                <small>WORKING GLOBALLY</small>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>SCROLL</span>
            <div className="scroll-line"></div>
          </div>
        </section>

        {/* Marquee */}
        <div className="marquee">
          <div className="marquee-track">
            {[...skills, ...skills].map((skill, index) => (
              <span key={index}>
                {skill}
                <b>✦</b>
              </span>
            ))}
          </div>
        </div>

        {/* About */}
        <section className="section about" id="about">
          <div className="section-label reveal">
            <span>01</span>
            ABOUT ME
          </div>

          <div className="about-grid">
            <div className="about-image reveal">
              <div className="image-frame">
                <img
                  src="/images/sashaheadshot.jpg"
                  alt="Iruoghene Sasha"
                />
              </div>

              <div className="image-caption">
                <span>CREATIVE</span>
                <span>DEVELOPER</span>
              </div>
            </div>

            <div className="about-content reveal">
              <p className="eyebrow">DESIGN × CODE × PROBLEM SOLVING</p>

              <h2>
                Turning ideas into
                <em> digital reality.</em>
              </h2>

              <p className="large-text">
                I am a software developer with a passion for building
                beautiful, functional and purposeful digital products.
              </p>

              <p>
                My development journey has allowed me to work across
                front-end and back-end technologies, from responsive
                interfaces and interactive web applications to APIs,
                databases and full-stack systems.
              </p>

              <p>
                I care about the details: how an interface feels, how quickly
                it responds, how accessible it is and how maintainable the
                code behind it remains.
              </p>

              <div className="about-stats">
                <div>
                  <strong>10+</strong>
                  <span>Technologies</span>
                </div>

                <div>
                  <strong>06+</strong>
                  <span>Projects</span>
                </div>

                <div>
                  <strong>∞</strong>
                  <span>Ideas</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Projects */}
        <section className="section work-section" id="work">
          <div className="section-label reveal">
            <span>02</span>
            SELECTED WORK
          </div>

          <div className="work-heading reveal">
            <h2>
              Some projects I have
              <em> built.</em>
            </h2>

            <p>
              A selection of projects that demonstrate my approach to
              design, development, problem-solving and user experience.
            </p>
          </div>

          <div className="projects">
            {projects.map((project, index) => (
              <article
                className={`project-card reveal ${
                  index % 2 !== 0 ? "project-offset" : ""
                }`}
                key={project.title}
              >
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="project-overlay">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="view-project"
                    >
                      VIEW PROJECT
                      <span></span>
                    </button>
                  </div>
                </div>

                <div className="project-info">
                  <div>
                    <span className="project-number">
                      {project.number}
                    </span>

                    <span className="project-category">
                      {project.category}
                    </span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="tech-list">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="statement-section">
          <div className="statement-inner reveal">
            <span className="quote-mark">“</span>

            <h2>
              Good software solves problems.
              <br />
              <em>Great software makes people feel something.</em>
            </h2>

            <div className="statement-line"></div>

            <p>
              My goal is to sit at the intersection of technology,
              creativity and human experience.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="section services-section" id="services">
          <div className="section-label reveal">
            <span>03</span>
            WHAT I DO
          </div>

          <div className="services-heading reveal">
            <h2>
              From concept
              <em> to code.</em>
            </h2>
          </div>

          <div className="services-list">

            <div className="service reveal">
              <span className="service-number">01</span>

              <div>
                <h3>Frontend Development</h3>
                <p>
                  Responsive, accessible and interactive web interfaces
                  using modern JavaScript, React and CSS.
                </p>
              </div>

              <span className="service-icon"></span>
            </div>

            <div className="service reveal">
              <span className="service-number">02</span>

              <div>
                <h3>Full-Stack Development</h3>
                <p>
                  End-to-end applications connecting intuitive interfaces
                  with APIs, databases and server-side logic.
                </p>
              </div>

              <span className="service-icon"></span>
            </div>

            <div className="service reveal">
              <span className="service-number">03</span>

              <div>
                <h3>UI & Digital Experiences</h3>
                <p>
                  Clean visual systems and thoughtful interactions that
                  transform functional websites into memorable experiences.
                </p>
              </div>

              <span className="service-icon"></span>
            </div>

            <div className="service reveal">
              <span className="service-number">04</span>

              <div>
                <h3>Business Websites</h3>
                <p>
                  Professional digital platforms designed to communicate
                  brand identity and convert visitors into customers.
                </p>
              </div>

              <span className="service-icon"></span>
            </div>

          </div>
        </section>

         {/* Skills */}
        <section className="section skills-section" id="skills">
          <div className="section-label reveal">
            <span>04</span>
            TECHNOLOGY
          </div>

          <div className="skills-compact reveal">
            <div className="skills-compact-heading">
              <span className="eyebrow">MY TOOLKIT</span>
              <p>Technologies I use to bring ideas to life.</p>
            </div>

            <div className="skills-tags">
              {skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  <span className="skill-dot"></span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          </section>


        {/* Process */}
        <section className="section process-section">
          <div className="section-label reveal">
            <span>05</span>
            MY PROCESS
          </div>

          <div className="process-grid">

            <div className="process-card reveal">
              <span>01</span>
              <h3>Discover</h3>
              <p>
                Understand the problem, audience, goals and technical
                requirements.
              </p>
            </div>

            <div className="process-card reveal">
              <span>02</span>
              <h3>Design</h3>
              <p>
                Create the visual direction, structure and interaction
                patterns.
              </p>
            </div>

            <div className="process-card reveal">
              <span>03</span>
              <h3>Develop</h3>
              <p>
                Turn the concept into clean, responsive and maintainable
                code.
              </p>
            </div>

            <div className="process-card reveal">
              <span>04</span>
              <h3>Refine</h3>
              <p>
                Test, optimize and polish the experience across devices
                and browsers.
              </p>
            </div>

          </div>
        </section>

        {/* Contact */}
        <section className="contact-section" id="contact">
          <div className="contact-background">
            <div className="contact-circle"></div>
          </div>

          <div className="contact-content reveal">
            <span className="eyebrow">HAVE A PROJECT IN MIND?</span>

            <h2>
              Let's create
              <br />
              something <em>great.</em>
            </h2>

            <a
              href="mailto:thesasharity@gmail.com"
              className="contact-email"
            >
              thesasharity@gmail.com
              <span></span>
            </a>

            <div className="contact-socials">
              <a
                href="https://github.com/sasharity"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/iruoghene/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/sasharity/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              <a
                href={"https://wa.me/message/SBQTOXZIQFQOK1"}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <div>
          <span className="footer-logo">SASHARITECH<span>®</span></span>
        </div>

        <p>
          Designed & developed by Iruoghene Sasha
        </p>

        <p>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>

      {/* Project Modal */}
      {activeProject && (
        <div
          className="modal"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActiveProject(null)}
            >
              ×
            </button>

            <img
              src={activeProject.image}
              alt={activeProject.title}
            />

            <div className="modal-info">
              <span>{activeProject.category}</span>
              <h2>{activeProject.title}</h2>

              <p>{activeProject.description}</p>

              <div className="tech-list">
                {activeProject.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a
                href={activeProject.link}
                className="button button-primary"
              >
                View live project 
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;