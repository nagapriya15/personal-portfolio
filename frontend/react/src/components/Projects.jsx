function Projects() {
  return (
    <section id="projects">

      <h1>Projects</h1>

      <div className="projects-container">

        <div className="project-card">
          <h3>Portfolio Website</h3>

          <p>
            Full Stack Portfolio Website using React,
            Node.js and MongoDB.
          </p>

          <a
            href="https://github.com/yourgithubusername/portfolio"
            target="_blank"
          >
            <button>GitHub</button>
          </a>
        </div>

        <div className="project-card">
          <h3>Data Analytics Dashboard</h3>

          <p>
            Tableau dashboard project for data analysis
            and visualization.
          </p>

          <a
            href="https://github.com/varshitha327/dashboard"
            target="_blank"
          >
            <button>GitHub</button>
          </a>
        </div>

      </div>

    </section>
  )
}

export default Projects