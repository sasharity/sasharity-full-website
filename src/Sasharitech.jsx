
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "country-list";
import {
  getCountries,
  getCountryCallingCode,
  isValidPhoneNumber,
} from "libphonenumber-js";
import "./Sasharitech.css";


const services = [
    
  {
    number: "01",
    title: "Web Design",
    description:
      "Purposeful, responsive digital experiences that help businesses and individuals establish a professional online presence.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1000&q=85",
    imageAlt: "Modern website displayed on a desktop computer",
    offerings: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "E-commerce websites",
      "Web application design",
      "UI/UX design",
    ],
    price: "Starting from ₦300,000",
    note: "For static websites. Other projects are priced according to scope.",
  },
  {
    number: "02",
    title: "Software Development",
    description:
      "Custom software solutions designed to solve practical problems, improve workflows and support business growth.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&q=85",
    imageAlt: "Software developer working at a computer",
    offerings: [
      "Custom business software",
      "Web-based management systems",
      "Business process automation",
      "Database integration",
      "API integration",
      "Custom web applications",
    ],
    price: "Starting from ₦700,000",
    note: "Pricing depends on functionality, complexity and project requirements.",
  },
  {
    number: "03",
    title: "Brand Management",
    description:
      "Strategic brand support that helps businesses communicate consistently, build recognition and strengthen their digital presence.",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1000&q=85",
    imageAlt: "Creative brand identity and design workspace",
    offerings: [
      "Brand strategy and positioning",
      "Brand identity direction",
      "Digital brand presence",
      "Brand consistency",
      "Brand communication",
      "Ongoing brand management",
    ],
    price: "Starting from ₦250,000 / month",
    note: "Final pricing depends on the level of support required.",
  },
];

function Sasharitech() {
    const [currency, setCurrency] = useState("NGN");
const [exchangeRates, setExchangeRates] = useState({ NGN: 1 });
const [ratesLoaded, setRatesLoaded] = useState(false);

useEffect(() => {
  const fetchRates = async () => {
    try {
      const response = await fetch("https://open.er-api.com/v6/latest/NGN");
      const data = await response.json();

      if (data.result === "success") {
        setExchangeRates(data.rates);
        setRatesLoaded(true);
      }
    } catch (error) {
      console.error("Unable to load exchange rates:", error);
    }
  };

  fetchRates();
}, []);

const formatPrice = (amount) => {
  const convertedAmount = amount * (exchangeRates[currency] || 1);

  return new Intl.NumberFormat("en", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(convertedAmount);
};

      useEffect(() => {
    const elements = document.querySelectorAll(".tech-reveal");

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

    const [selectedService, setSelectedService] = useState("");

const [phoneCountry, setPhoneCountry] = useState("NG");
const [phoneNumber, setPhoneNumber] = useState("");
const [phoneError, setPhoneError] = useState("");

const countries = getData().sort((a, b) =>
  a.name.localeCompare(b.name)
);

const phoneCountries = getCountries().sort((a, b) =>
  a.localeCompare(b)
);

const handlePhoneChange = (event) => {
  const value = event.target.value;

  if (/[^0-9]/.test(value)) {
    setPhoneError("Please enter a valid phone number using digits only.");
  } else {
    setPhoneError("");
  }

  setPhoneNumber(value.replace(/[^0-9]/g, ""));
};

const handleEnquirySubmit = (event) => {
  if (
    !phoneNumber ||
    !isValidPhoneNumber(phoneNumber, phoneCountry)
  ) {
    event.preventDefault();
    setPhoneError("Please enter a valid phone number for the selected country.");
  }
};  

  return (
    <main className="sasharitech-page">
      <header className="tech-header">
        <Link to="/" className="tech-logo">
          SASHARITECH<span>.</span>
        </Link>

        <nav className="tech-nav">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#enquiry">Enquire</a>
          <Link to="/sasharitech/portfolio">My Portfolio</Link>
        </nav>
      </header>

      <section className="tech-hero">
        <div className="tech-hero-content">
          <p className="tech-eyebrow">A DIGITAL AGENCY BY SASHARITY</p>

          <h1>
            Ideas deserve
            <br />
            <span>thoughtful execution.</span>
          </h1>

          <p className="tech-hero-description">
            We design digital experiences, develop practical software
            solutions and help brands build a consistent presence.
            Technology and creativity, working together with purpose.
          </p>

          <div className="tech-hero-actions">
            <a href="#services" className="tech-button tech-button-primary">
              Explore our services
            </a>

            <Link
              to="/sasharitech/portfolio"
              className="tech-button tech-button-secondary"
            >
              View portfolio
            </Link>
          </div>
        </div>

        <div className="tech-hero-note">
          <span>DESIGN</span>
          <span>DEVELOPMENT</span>
          <span>BRAND STRATEGY</span>
        </div>
      </section>

      <section className="tech-services" id="services">
       <div className="tech-section-heading tech-reveal">
          <p className="tech-eyebrow">WHAT WE DO</p>
          <h2>Digital services, thoughtfully delivered.</h2>
          <p>
            From a first online presence to custom digital solutions,
            we work with businesses and individuals to bring ideas to life.
          </p>
        </div>

        <div className="tech-service-grid">
          {services.map((service) => (
            <article
                className={`tech-service-card tech-reveal reveal-delay-${service.number}`}
                key={service.number}
                >
              <div className="tech-service-image">
                <img src={service.image} alt={service.imageAlt} />
                <span>{service.number}</span>
              </div>

              <div className="tech-service-content">
                <h3>{service.title}</h3>

                <p className="tech-service-description">
                  {service.description}
                </p>

                <h4>What we offer</h4>

                <ul>
                  {service.offerings.map((offering) => (
                    <li key={offering}>{offering}</li>
                  ))}
                </ul>

                <div className="tech-service-price">
                  <strong>{service.price}</strong>
                  <p>{service.note}</p>
                </div>

                <a href="#enquiry" className="tech-service-link">
                  Enquire about this service <span></span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tech-about tech-reveal" id="about">
        <p className="tech-eyebrow">THE SASHARITECH APPROACH</p>
        <h2>Good technology should make a difference.</h2>
        <p>
          We believe digital solutions should be functional, accessible
          and thoughtfully designed. Every project begins with
          understanding the people, goals and problems behind the idea.
        </p>
      </section>

      <section className="tech-portfolio-cta tech-reveal">
        <div>
          <p className="tech-eyebrow">SELECTED WORK</p>
          <h2>See what I have been building.</h2>
          <p>
            Explore my software development projects and practical
            experience.
          </p>
        </div>

        <Link to="/sasharitech/portfolio" className="tech-button tech-button-primary">
          Explore my portfolio
        </Link>
      </section>

      
<section className="tech-enquiry-section tech-reveal" id="enquiry">
  <div className="tech-enquiry-intro">
    <p className="tech-eyebrow">LET'S WORK TOGETHER</p>
    <h2>Tell us about your project.</h2>
    <p>
      Whether you're building a business, developing an idea or
      improving an existing brand, we'd love to understand what
      you have in mind.
    </p>
    <div className="tech-contact-note">
      <span>Prefer a direct conversation?</span>
      <a
        href="https://wa.me/2347036842318"
        target="_blank"
        rel="noreferrer"
      >
        Chat with us on WhatsApp 
      </a>
    </div>
  </div>

  <form
    className="tech-enquiry-form"
    action="https://formspree.io/f/xjyylokd"
    method="POST"
    onSubmit={handleEnquirySubmit}
  >
    <input
      type="hidden"
      name="_subject"
      value="New Sasharitech Project Enquiry"
    />

    <div className="tech-form-heading">
      <span>PROJECT ENQUIRY</span>
      <p>Fields marked * are required.</p>
    </div>

    <div className="tech-form-grid">
      <label className="tech-form-field">
        Full name *
        <input
          type="text"
          name="Full name"
          placeholder="Your full name"
          autoComplete="name"
          required
        />
      </label>

      <label className="tech-form-field">
        Business or organisation name
        <input
          type="text"
          name="Business or organisation"
          placeholder="Optional"
          autoComplete="organization"
        />
      </label>

      <label className="tech-form-field">
        Email address *
        <input
          type="email"
          name="Email"
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
      </label>

      
    <label className="tech-form-field">
    WhatsApp number *
    <div className="tech-phone-input">
        <select
        aria-label="Country calling code"
        value={phoneCountry}
        onChange={(event) => {
            setPhoneCountry(event.target.value);
            setPhoneError("");
        }}
        required
        >
        {phoneCountries.map((code) => (
            <option key={code} value={code}>
            {code} (+{getCountryCallingCode(code)})
            </option>
        ))}
        </select>

        <input
        type="text"
        name="WhatsApp number"
        value={phoneNumber}
        onChange={handlePhoneChange}
        onBlur={() => {
            if (
            phoneNumber &&
            !isValidPhoneNumber(phoneNumber, phoneCountry)
            ) {
            setPhoneError("Please enter a valid phone number.");
            }
        }}
        placeholder="Enter numbers only"
        inputMode="numeric"
        pattern="[0-9]+"
        autoComplete="tel-national"
        required
        />
    </div>

    <input
        type="hidden"
        name="Country calling code"
        value={`+${getCountryCallingCode(phoneCountry)}`}
    />

    {phoneError && (
        <span className="tech-form-error" role="alert">
        {phoneError}
        </span>
    )}
    </label>

    <label className="tech-form-field">
    Country *
    <select name="Country" required defaultValue="">
        <option value="" disabled>
        Select your country
        </option>

        {countries.map((country) => (
        <option key={country.code} value={country.name}>
            {country.name}
        </option>
        ))}
    </select>
    </label>

      <label className="tech-form-field">
        What do you want for your business? *
        <select
          name="Requested service"
          value={selectedService}
          onChange={(event) => setSelectedService(event.target.value)}
          required
        >
          <option value="">Select a service</option>
          <option value="Website">Website</option>
          <option value="Web application">Web application</option>
          <option value="A software">A software</option>
          <option value="UI/UX design">UI/UX design</option>
          <option value="Brand management">Brand management</option>
        </select>
      </label>
    </div>

    {selectedService && (
      <div className="tech-service-explanation">
        <span>ABOUT THIS SERVICE</span>
        <p>
          {selectedService === "Website" &&
            "A professional website for your business, personal brand, portfolio or online store."}
          {selectedService === "Web application" &&
            "An interactive web application designed around a particular service, workflow or business need."}
          {selectedService === "A software" &&
            "Custom software to help you manage operations, organise information or solve a specific problem."}
          {selectedService === "UI/UX design" &&
            "User interface and user experience design for websites, applications and digital products."}
          {selectedService === "Brand management" &&
            "Strategic support for your brand identity, positioning, digital presence and consistency."}
        </p>
      </div>
    )}

    <div className="tech-form-grid">
      <label className="tech-form-field">
        Who is this project for? *
        <select name="Project audience" required defaultValue="">
          <option value="" disabled>Select an option</option>
          <option value="My business">My business</option>
          <option value="My personal brand">My personal brand</option>
          <option value="An individual project">An individual project</option>
          <option value="An organisation">An organisation</option>
          <option value="A client">A client</option>
        </select>
      </label>

      <label className="tech-form-field">
        Estimated budget
        <input
          type="text"
          name="Estimated budget"
          placeholder="e.g. ₦300,000 or $1,000"
        />
      </label>

      <label className="tech-form-field">
        When would you like to start?
        <select name="Project timeline" defaultValue="">
          <option value="">Select a timeline</option>
          <option value="Immediately">Immediately</option>
          <option value="Within 2 weeks">Within 2 weeks</option>
          <option value="Within 1 month">Within 1 month</option>
          <option value="Within 2–3 months">Within 2–3 months</option>
          <option value="Still planning">Still planning</option>
        </select>
      </label>
    </div>

    <label className="tech-form-field tech-form-full">
      Tell us about your project *
      <textarea
        name="Project details"
        rows="6"
        placeholder="Describe what you want to build, the problem you want to solve, or the support you need..."
        required
      />
    </label>

    

    <button type="submit" className="tech-form-submit">
      Submit project enquiry <span></span>
    </button>

    <p className="tech-form-privacy">
      Your information will only be used to respond to your project enquiry.
    </p>
  </form>
</section>


      <footer className="tech-footer">
        <Link to="/" className="tech-logo">
          SASHARITECH<span>.</span>
        </Link>
        <p>© {new Date().getFullYear()} Sasharity. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default Sasharitech;
