
import { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaBars,
  FaCheck,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaTimes,
  FaWhatsapp,
} from 'react-icons/fa';

const PHONE = '+255621332611';
const WHATSAPP = '255621332611';

const LOGO_URL =
  'https://res.cloudinary.com/djczmay2i/image/upload/v1794236725/vectorised-86adaefe_bzhhwt.svg';

const whatsappUrl = (message) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const completedProjects = [
  { title: 'Completed Project 01', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794405035/yuntiles3_ihwzjs.jpg' },
  { title: 'Completed Project 02', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794405027/WhatsApp_Image_2026-11-10_at_11.33.21_PM_zczvou.jpg' },
  { title: 'Completed Project 03', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794405024/WhatsApp_Image_2026-11-10_at_11.32.56_PM_wza888.jpg' },
  { title: 'Completed Project 04', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794405009/WhatsApp_Image_2026-11-10_at_11.30.14_PM_ab4npy.jpg' },
  { title: 'Completed Project 05', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794405008/WhatsApp_Image_2026-11-10_at_11.29.48_PM_h5oxqg.jpg' },
  { title: 'Completed Project 06', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794405005/WhatsApp_Image_2026-11-10_at_11.29.28_PM_z4ex2m.jpg' },
  { title: 'Completed Project 07', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794405004/WhatsApp_Image_2026-11-10_at_11.29.25_PM_mohvgp.jpg' },
  { title: 'Completed Project 08', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794405002/WhatsApp_Image_2026-11-10_at_11.29.24_PM_t40uyp.jpg' },
  { title: 'Completed Project 09', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794405001/WhatsApp_Image_2026-11-10_at_11.29.22_PM_x5njrz.jpg' },
  { title: 'Completed Project 10', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794404997/WhatsApp_Image_2026-11-10_at_11.29.19_PM_lhsfyc.jpg' },
  { title: 'Completed Project 11', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794404996/WhatsApp_Image_2026-11-10_at_11.25.10_PM_bry68j.jpg' },
  { title: 'Completed Project 12', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794404992/WhatsApp_Image_2026-11-10_at_11.24.26_PM_eexp6b.jpg' },
  { title: 'Completed Project 13', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794404991/WhatsApp_Image_2026-11-10_at_11.24.22_PM_hglmex.jpg' },
  { title: 'Completed Project 14', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794404991/WhatsApp_Image_2026-11-10_at_11.20.53_PM_d5mnt3.jpg' },
  { title: 'Completed Project 15', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794404991/WhatsApp_Image_2026-11-10_at_11.20.56_PM_vcxjzv.jpg' },
];

const ongoingProjects = [
  { title: 'Ongoing Project 01', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794405033/WhatsApp_Image_2026-11-10_at_11.34.19_PM_1_gprvvb.jpg' },
  { title: 'Ongoing Project 02', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794405030/WhatsApp_Image_2026-11-10_at_11.34.05_PM_zjoiqq.jpg' },
  { title: 'Ongoing Project 03', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794405018/WhatsApp_Image_2026-11-10_at_11.32.02_PM_eszwyu.jpg' },
  { title: 'Ongoing Project 04', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794405015/WhatsApp_Image_2026-11-10_at_11.31.34_PM_mehmwh.jpg' },
  { title: 'Ongoing Project 05', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794405014/WhatsApp_Image_2026-11-10_at_11.31.18_PM_xbfxis.jpg' },
  { title: 'Ongoing Project 06', image: 'https://res.cloudinary.com/djczmay2i/image/upload/v1794405013/WhatsApp_Image_2026-11-10_at_11.31.07_PM_fztq6m.jpg' },
];

const surveyVideos = [
  { title: 'Explore Our Work 01', video: 'https://res.cloudinary.com/djczmay2i/video/upload/v1794405400/yuntiles6_dhjsza.mp4' },
  { title: 'Explore Our Work 02', video: 'https://res.cloudinary.com/djczmay2i/video/upload/v1794405387/WhatsApp_Video_2026-11-10_at_11.35.44_PM_najfcy.mp4' },
  { title: 'Explore Our Work 03', video: 'https://res.cloudinary.com/djczmay2i/video/upload/v1794405394/yuntiles1_cxnvcn.mp4' },
];

const whatsappTranslations = {
  "Hello YUNTILES DECOR, I would like to enquire about your services.": {
    sw: "Habari YUNTILES DECOR, ningependa kupata maelezo kuhusu huduma zenu.",
    ar: "مرحباً YUNTILES DECOR، أود الاستفسار عن خدماتكم."
  },
  "Hello YUNTILES DECOR, I have seen your portfolio and would like to discuss a project.": {
    sw: "Habari YUNTILES DECOR, nimeona kazi zenu kwenye tovuti na ningependa kujadili mradi.",
    ar: "مرحباً YUNTILES DECOR، لقد اطلعت على أعمالكم وأرغب في مناقشة مشروع."
  },
  "Hello YUNTILES DECOR, I would like to discuss a new project and request a consultation.": {
    sw: "Habari YUNTILES DECOR, ningependa kujadili mradi mpya na kuomba ushauri wenu.",
    ar: "مرحباً YUNTILES DECOR، أود مناقشة مشروع جديد وطلب استشارة منكم."
  },
  "Hello YUNTILES DECOR, I would like to make an enquiry.": {
    sw: "Habari YUNTILES DECOR, ningependa kuuliza kuhusu huduma zenu.",
    ar: "مرحباً YUNTILES DECOR، أود إرسال استفسار إليكم."
  },
  "Hello YUNTILES DECOR, I would like to chat with your team.": {
    sw: "Habari YUNTILES DECOR, ningependa kuzungumza na timu yenu.",
    ar: "مرحباً YUNTILES DECOR، أود التحدث مع فريقكم."
  }
};

function getSelectedLanguage() {
  const supportedLanguages = ['en', 'sw', 'ar'];

  // GTranslate normally stores the selected language in this cookie.
  const cookie = document.cookie
    .split(';')
    .map((item) => item.trim())
    .find((item) => item.startsWith('googtrans='));

  if (cookie) {
    const value = decodeURIComponent(cookie.split('=').slice(1).join('='));
    const language = value.split('/').filter(Boolean).pop();

    if (supportedLanguages.includes(language)) {
      return language;
    }
  }

  // Fallback: check the currently selected GTranslate dropdown.
  const selector = document.querySelector('.gt_selector');

  if (selector?.value) {
    const language = selector.value.split('|').pop();

    if (supportedLanguages.includes(language)) {
      return language;
    }
  }

  return 'en';
}

function getLocalizedWhatsAppMessage(message) {
  const language = getSelectedLanguage();

  if (language === 'en') {
    return message;
  }

  return whatsappTranslations[message]?.[language] || message;
}

function WhatsAppLink({ children, message, className = '', ...props }) {
  const defaultMessage =
    'Hello YUNTILES DECOR, I would like to enquire about your services.';

  const finalMessage = message || defaultMessage;

  return (
    <a
      href={whatsappUrl(getLocalizedWhatsAppMessage(finalMessage))}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
      onClick={(event) => {
        event.preventDefault();

        // Read the selected language again at click time.
        const localizedMessage =
          getLocalizedWhatsAppMessage(finalMessage);

        window.open(
          whatsappUrl(localizedMessage),
          '_blank',
          'noopener,noreferrer'
        );
      }}
    >
      {children}
    </a>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Portfolio', '#projects'],
    ['Projects', '#projects'],
    ['Contact', '#contact'],
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <img src={LOGO_URL} alt="YUNTILES DECOR logo" />
        </a>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}

          <WhatsAppLink className="nav-cta">
            Get a Consultation <FaArrowRight />
          </WhatsAppLink>
        </nav>

        <div className="navbar-controls">
          <GoogleTranslate />

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />

      <div className="container hero-content">
        <span className="eyebrow hero-eyebrow">
          Premium Tiling & Interior Solutions
        </span>

        <h1>
          Transforming Spaces.
          <br />
          <span>Creating Excellence.</span>
        </h1>

        <p>
          Transforming spaces through exceptional craftsmanship, premium
          tiling and elegant interior decoration.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-gold">
            Explore Our Work <FaArrowRight />
          </a>

          <WhatsAppLink className="btn btn-outline">
            <FaWhatsapp /> Talk to Our Team
          </WhatsAppLink>
        </div>

        <div className="hero-bottom">
          <span>CRAFTSMANSHIP</span>
          <span className="hero-line" />
          <span>QUALITY</span>
          <span className="hero-line" />
          <span>EXCELLENCE</span>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro section-padding" id="about">
      <div className="container intro-grid">
        <div className="intro-image-wrap">
          <img
            src="https://res.cloudinary.com/djczmay2i/image/upload/v1794405035/yuntiles3_ihwzjs.jpg"
            alt="Elegant contemporary interior"
            className="intro-image"
          />
          <div className="intro-image-label">
            <span>YUNTILES DECOR</span>
            <strong>Designed with purpose.</strong>
          </div>
        </div>

        <div className="intro-content">
          <span className="eyebrow">Who We Are</span>
          <h2>
            Spaces that inspire.
            <br />
            Finishes that last.
          </h2>

          <p>
            At YUNTILES DECOR, we believe that exceptional spaces begin with
            attention to detail. We deliver professional tiling and interior
            decoration solutions that combine craftsmanship, quality
            materials and thoughtful design.
          </p>

          <p>
            From modern residential interiors to commercial spaces, our focus
            is on delivering beautiful finishes and a professional experience
            from beginning to completion.
          </p>

          <div className="intro-points">
            <span><FaCheck /> Professional craftsmanship</span>
            <span><FaCheck /> Quality finishing</span>
            <span><FaCheck /> Attention to detail</span>
          </div>

          <a href="#projects" className="text-link">
            Discover Our Portfolio <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [activeWork, setActiveWork] = useState('completed');

  const categories = [
    { id: 'completed', label: 'COMPLETED WORK' },
    { id: 'ongoing', label: 'ON-PROGRESS WORK' },
    { id: 'survey', label: 'SURVEY OUR WORK' },
  ];

  const visibleProjects =
    activeWork === 'completed'
      ? completedProjects
      : ongoingProjects;

  return (
    <section className="section projects-section" id="portfolio">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">OUR PORTFOLIO</span>
          <h2>Craftsmanship You Can <span>See.</span></h2>
          <p>
            Explore our completed projects, ongoing work and a closer look
            at our tiling and interior decoration craftsmanship.
          </p>
        </div>

        <div className="project-tabs" role="tablist" aria-label="Portfolio categories">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={activeWork === category.id}
              className={activeWork === category.id ? 'active' : ''}
              onClick={() => setActiveWork(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {activeWork === 'survey' ? (
          <div className="work-category">
            <div className="work-category-intro">
              <span className="eyebrow">BEYOND THE PHOTOGRAPHS</span>
              <h3>Survey Our Work</h3>
              <p>Watch our videos and explore our workmanship in action.</p>
            </div>

            <div className="work-video-grid">
              {surveyVideos.map((item, index) => (
                <article className="work-video-card" key={item.video}>
                  <div className="work-video-player">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={item.title}
                    >
                      <source src={item.video} type="video/mp4" />
                      Your browser does not support HTML video.
                    </video>
                  </div>
                  <div className="work-video-caption">
                    <span>YUNTILES DECOR · VIDEO {String(index + 1).padStart(2, '0')}</span>
                    <h3>{item.title}</h3>
                    <p>Discover our tiling and interior decoration work.</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="work-category">
            <div className="work-category-intro">
              <span className="eyebrow">
                {activeWork === 'completed' ? 'OUR ACHIEVEMENTS' : 'CURRENT PROJECTS'}
              </span>
              <h3>
                {activeWork === 'completed' ? 'Completed Work' : 'On-Progress Work'}
              </h3>
              <p>
                {activeWork === 'completed'
                  ? 'A selection of projects completed through dedication and craftsmanship.'
                  : 'A look at projects currently taking shape through our workmanship.'}
              </p>
            </div>

            <div className="project-grid">
              {visibleProjects.map((item) => (
                <article className="project-card" key={item.image}>
                  <div className="project-image">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className="project-overlay">
                      <span>{item.title}</span>
                    </div>
                  </div>
                  <div className="project-caption">
                    <span className="project-category">
                      {activeWork === 'completed' ? 'COMPLETED PROJECT' : 'PROJECT IN PROGRESS'}
                    </span>
                    <h3>{item.title}</h3>
                    <p>YUNTILES DECOR</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="projects-cta">
          <h3>Ready to Transform Your Space?</h3>
          <p>
            Inspired by our work? Let's discuss your next tiling or interior
            project.
          </p>

          <WhatsAppLink
            className="btn btn-dark"
            message="Hello YUNTILES DECOR, I have seen your portfolio and would like to discuss a project."
          >
            Discuss Your Project <FaArrowRight />
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    {
      number: '01',
      title: 'Quality Craftsmanship',
      description:
        'We pay close attention to detail to deliver clean, professional finishes.',
    },
    {
      number: '02',
      title: 'Thoughtful Design',
      description:
        'We focus on creating spaces that balance visual appeal and practicality.',
    },
    {
      number: '03',
      title: 'Reliable Service',
      description:
        'We value clear communication, professionalism and customer satisfaction.',
    },
    {
      number: '04',
      title: 'Lasting Results',
      description:
        'We aim for durable, carefully executed finishes that stand the test of time.',
    },
  ];

  return (
    <section className="why-us section-padding">
      <div className="container why-grid">
        <div className="why-content">
          <span className="eyebrow">The YUNTILES Difference</span>
          <h2>More than a finish. It's a standard of excellence.</h2>
          <p>
            Every detail matters. We bring together skilled workmanship,
            thoughtful execution and a commitment to quality to help create
            spaces you will love.
          </p>

          <WhatsAppLink className="btn btn-gold">
            Work With Us <FaArrowRight />
          </WhatsAppLink>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <article className="reason-card" key={reason.number}>
              <span>{reason.number}</span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-padding" id="contact">
      <div className="container contact-grid">
        <div className="contact-content">
          <span className="eyebrow">Let's Talk About Your Project</span>
          <h2>Ready to transform your space?</h2>
          <p>
            Whether you are planning a new project or renovating an existing
            space, we would be happy to discuss your ideas and requirements.
          </p>

          <div className="contact-details">
            <a href={`tel:${PHONE}`}>
              <span className="contact-icon"><FaPhone /></span>
              <span>
                <small>Call Us</small>
                <strong>{PHONE}</strong>
              </span>
            </a>

            <WhatsAppLink message="Hello YUNTILES DECOR, I would like to chat with your team.">
              <span className="contact-icon"><FaWhatsapp /></span>
              <span>
                <small>WhatsApp</small>
                <strong>Chat with our team</strong>
              </span>
            </WhatsAppLink>

            <div className="contact-detail">
              <span className="contact-icon"><FaMapMarkerAlt /></span>
              <span>
                <small>Service Location</small>
                <strong>Zanzibar, Tanzania</strong>
              </span>
            </div>

            <a href="mailto:info@yuntilesdecor.com">
              <span className="contact-icon"><FaEnvelope /></span>
              <span>
                <small>Email</small>
                <strong>info@yuntilesdecor.com</strong>
              </span>
            </a>
          </div>
        </div>

        <div className="contact-card">
          <span className="eyebrow">Start Your Journey</span>
          <h3>Let's create something exceptional.</h3>
          <p>
            Tell us what you have in mind. Our team is ready to help you take
            the next step.
          </p>

          <WhatsAppLink
            className="btn btn-gold contact-button"
            message="Hello YUNTILES DECOR, I would like to discuss a new project and request a consultation."
          >
            <FaWhatsapp /> Request a Consultation
          </WhatsAppLink>

          <div className="contact-card-note">
            <FaCheck /> Direct communication with our team
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-column">
          <a href="#home" className="footer-logo">
            <img src={LOGO_URL} alt="YUNTILES DECOR" />
          </a>
          <p>
            Premium tiling and interior solutions, delivered with exceptional
            craftsmanship and attention to detail.
          </p>

          <WhatsAppLink className="footer-whatsapp">
            <FaWhatsapp /> Connect on WhatsApp
          </WhatsAppLink>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#projects">Our Services</a>
          <a href="#projects">Our Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h3>Our Portfolio</h3>
          <a href="#projects">Completed Work</a>
          <a href="#projects">On-Progress Work</a>
          <a href="#projects">Survey Our Work</a>
        </div>

        <div className="footer-column">
          <h3>Get In Touch</h3>
          <a href={`tel:${PHONE}`}><FaPhone /> {PHONE}</a>
          <WhatsAppLink><FaWhatsapp /> WhatsApp</WhatsAppLink>
          <a href="mailto:info@yuntilesdecor.com">
            <FaEnvelope /> Email Us
          </a>
          <span><FaMapMarkerAlt /> Zanzibar, Tanzania</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} YUNTILES DECOR. All rights reserved.</p>
          <p>Premium Tiling & Interior Solutions</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <WhatsAppLink
      className="floating-whatsapp"
      aria-label="Chat with YUNTILES DECOR on WhatsApp"
      message="Hello YUNTILES DECOR, I would like to make an enquiry."
    >
      <FaWhatsapp />
      <span>Chat with us</span>
    </WhatsAppLink>
  );
}

function GoogleTranslate() {
  useEffect(() => {
    window.gtranslateSettings = {
      default_language: 'en',
      languages: ['en', 'sw', 'ar'],
      wrapper_selector: '.gtranslate_wrapper',
      switcher_horizontal_position: 'inline',
      switcher_vertical_position: 'top',
      float_switcher_open_direction: 'bottom',
    };

    const existingScript = document.getElementById('gtranslate-script');

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'gtranslate-script';
      script.src =
        'https://cdn.gtranslate.net/widgets/latest/float.js';
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return <div className="gtranslate_wrapper" />;
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        
        <Projects />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />

    </>
  );
}

export default App;
