import profile from '../assets/profile.jpg'

function Home() {
  return (
    <section id="home" className="home">

      <div className="home-text">
        <h1>Hello, I'm Varshitha</h1>

        <h3>AIML Student | Full Stack Developer</h3>

        <p>
          Passionate about Full Stack Development,
          Artificial Intelligence, and Web Technologies.
        </p>

        <a href="#projects">
          <button>View Projects</button>
        </a>

        <a href="/resume.pdf" target="_blank">
          <button>View Resume</button>
        </a>

        <a href="/resume.pdf" download>
          <button>Download Resume</button>
        </a>
      </div>

      <div className="home-image">
        <img src={profile} alt="profile" />
      </div>

    </section>
  )
}

export default Home