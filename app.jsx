const { useState } = React;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <a href="index.html" className="logo">
        IRON CORE
      </a>

      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        aria-label="Open menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="about.html" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="training.html" onClick={() => setMenuOpen(false)}>
          Training
        </a>

        <a href="plans.html" onClick={() => setMenuOpen(false)}>
          Plans
        </a>

        <a href="contact.html" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">TRAIN WITH PURPOSE</p>

          <h1>
            FORGE
            <span>YOUR STRENGTH.</span>
          </h1>

          <p className="hero-description">
            A focused training space built for strength, consistency and real
            progress.
          </p>

          <div className="hero-actions">
            <a href="plans.html" className="btn btn-primary">
              View Plans
            </a>

            <a href="training.html" className="btn btn-outline">
              Explore Training
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function About() {
  return (
    <main className="page about-page">
      <section className="page-hero">
        <p className="hero-eyebrow">ABOUT IRON CORE</p>

        <h1>
          BUILT FOR
          <span>REAL PROGRESS.</span>
        </h1>

        <p>
          Iron Core is a focused training space for people who want to build
          strength, discipline and consistency.
        </p>
      </section>

      <section className="about-story">
        <div>
          <p className="section-label">OUR STORY</p>

          <h2>
            Training with
            <span>purpose.</span>
          </h2>
        </div>

        <div className="about-text">
          <p>
            Iron Core was created around a simple idea: training should be
            challenging, focused and sustainable.
          </p>

          <p>
            We believe progress comes from consistency rather than quick fixes.
            Every session has a purpose, and every member has room to improve.
          </p>
        </div>
      </section>

      <section className="values">
        <p className="section-label">WHAT WE BELIEVE</p>

        <div className="values-list">
          <article className="value">
            <h3>Consistency</h3>

            <p>Progress starts with showing up and staying committed.</p>
          </article>

          <article className="value">
            <h3>Strength</h3>

            <p>Build physical strength through purposeful training.</p>
          </article>

          <article className="value">
            <h3>Discipline</h3>

            <p>Small efforts repeated over time create lasting results.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

function Training() {
  return (
    <main className="page training-page">
      <section className="page-hero">
        <p className="hero-eyebrow">TRAINING</p>

        <h1>
          TRAIN WITH
          <span>PURPOSE.</span>
        </h1>

        <p>
          Focused programs designed to build strength, improve conditioning and
          create lasting habits.
        </p>
      </section>

      <section className="training-programs">
        <div className="section-heading">
          <p className="section-label">OUR PROGRAMS</p>

          <h2>
            Find your
            <span>focus.</span>
          </h2>
        </div>

        <div className="program-list">
          <article className="program">
            <div className="program-content">
              <p className="program-type">STRENGTH</p>

              <h3>Strength Training</h3>

              <p>
                Build foundational strength through structured resistance
                training designed for steady progress.
              </p>
            </div>
          </article>

          <article className="program">
            <div className="program-content">
              <p className="program-type">FUNCTIONAL</p>

              <h3>Functional Training</h3>

              <p>
                Improve mobility, coordination and everyday movement through
                dynamic full-body exercises.
              </p>
            </div>
          </article>

          <article className="program">
            <div className="program-content">
              <p className="program-type">CONDITIONING</p>

              <h3>Conditioning</h3>

              <p>
                Develop endurance and work capacity with sessions focused on
                intensity, stamina and recovery.
              </p>
            </div>
          </article>

          <article className="program">
            <div className="program-content">
              <p className="program-type">PERSONAL</p>

              <h3>Personal Training</h3>

              <p>
                Get individual guidance and a training approach adapted to your
                goals and experience.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="trainers">
        <div className="section-heading">
          <p className="section-label">THE TEAM</p>

          <h2>
            Meet your
            <span>trainers.</span>
          </h2>
        </div>

        <div className="trainer-list">
          <article className="trainer">
            <img
              src="assets/img/alex-img.webp"
              alt="Alex Morgan"
              className="trainer-image"
            />

            <div className="trainer-info">
              <h3>Alex Morgan</h3>

              <p className="trainer-role">Strength & Conditioning</p>

              <p>
                Focused on strength development, performance and sustainable
                training habits.
              </p>
            </div>
          </article>

          <article className="trainer">
            <img
              src="assets/img/maya-img.webp"
              alt="Maya Brooks"
              className="trainer-image"
            />

            <div className="trainer-info">
              <h3>Maya Brooks</h3>

              <p className="trainer-role">Functional Training</p>

              <p>
                Specializes in movement, mobility and full-body functional
                training.
              </p>
            </div>
          </article>

          <article className="trainer">
            <img
              src="assets/img/daniel-img.webp"
              alt="Daniel Reed"
              className="trainer-image"
            />

            <div className="trainer-info">
              <h3>Daniel Reed</h3>

              <p className="trainer-role">Personal Training</p>

              <p>
                Works with members to create focused programs adapted to
                individual goals.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="training-cta">
        <p className="section-label">READY TO START?</p>

        <h2>
          Find the plan that
          <span>fits you.</span>
        </h2>

        <a href="plans.html" className="btn btn-primary">
          View Plans
        </a>
      </section>
    </main>
  );
}

function Plans() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Basic",
      monthly: 35,
      yearly: 30,
      description: "For those building a consistent training routine.",
      features: ["Gym access", "Free weights & machines", "Locker room access"],
    },
    {
      name: "Plus",
      monthly: 55,
      yearly: 47,
      description: "More flexibility for a more complete routine.",
      features: [
        "Everything in Basic",
        "Group training sessions",
        "Extended gym hours",
      ],
    },
    {
      name: "Unlimited",
      monthly: 75,
      yearly: 64,
      description: "Full access for members who want no limits.",
      features: [
        "Everything in Plus",
        "Personal training session",
        "Priority booking",
      ],
    },
  ];

  return (
    <main className="page plans-page">
      <section className="page-hero">
        <p className="hero-eyebrow">MEMBERSHIP</p>

        <h1>
          CHOOSE YOUR
          <span>PLAN.</span>
        </h1>

        <p>
          Simple memberships designed around different training goals and
          routines.
        </p>
      </section>

      <section className="plans-section">
        <div className="billing-toggle">
          <button
            className={billing === "monthly" ? "active" : ""}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>

          <button
            className={billing === "yearly" ? "active" : ""}
            onClick={() => setBilling("yearly")}
          >
            Yearly
          </button>
        </div>

        <div className="plans-list">
          {plans.map((plan) => (
            <article className="plan" key={plan.name}>
              <div className="plan-header">
                <p className="section-label">{plan.name}</p>

                <p className="plan-description">{plan.description}</p>
              </div>

              <div className="plan-price">
                <span>$</span>
                {billing === "monthly" ? plan.monthly : plan.yearly}
                <small>/mo</small>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <a href="contact.html" className="btn btn-outline">
                Get Started
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="page contact-page">
      <section className="page-hero">
        <p className="hero-eyebrow">CONTACT</p>

        <h1>
          START YOUR
          <span>JOURNEY.</span>
        </h1>

        <p>
          Have a question about membership or training? Get in touch with the
          Iron Core team.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <div className="contact-block">
            <p className="section-label">LOCATION</p>
            <p>24 King Street</p>
            <p>Manchester, UK</p>
          </div>

          <div className="contact-block">
            <p className="section-label">HOURS</p>
            <p>Monday – Friday: 6:00 – 22:00</p>
            <p>Saturday – Sunday: 8:00 – 18:00</p>
          </div>

          <div className="contact-block">
            <p className="section-label">EMAIL</p>
            <p>hello@ironcoregym.com</p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="form-success">
              <p className="section-label">MESSAGE SENT</p>

              <h2>
                Thanks for
                <span>reaching out.</span>
              </h2>

              <p>We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" name="name" required />
              </label>

              <label>
                Email
                <input type="email" name="email" required />
              </label>

              <label>
                Message
                <textarea name="message" rows="6" required></textarea>
              </label>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

function getCurrentPage() {
  const file = window.location.pathname.split("/").pop();

  if (file === "about.html") return "about";
  if (file === "training.html") return "training";
  if (file === "plans.html") return "plans";
  if (file === "contact.html") return "contact";

  return "home";
}

function App() {
  const page = getCurrentPage();

  return (
    <>
      <Header />

      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "training" && <Training />}
      {page === "plans" && <Plans />}
      {page === "contact" && <Contact />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
