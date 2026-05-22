function Contact() {
  return (
    <section id="contact">

      <h1>Contact Me</h1>

      <form className="contact-form">

        <input type="text" placeholder="Enter Name" />

        <input type="email" placeholder="Enter Email" />

        <textarea placeholder="Enter Message"></textarea>

        <button>Send</button>

      </form>

    </section>
  )
}

export default Contact