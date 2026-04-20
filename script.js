/* ============================================
   TUSHAR GUPTA - PORTFOLIO JAVASCRIPT
============================================ */

// ---- LOADER ----
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 1000);
});

// ---- AOS INIT ----
AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60,
});

// ---- NAVBAR ----
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveNav();
  handleBackToTop();
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ---- ACTIVE NAV LINK ----
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (link) {
      if (scrollPos >= top && scrollPos < top + height) {
        navLinkItems.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
}

// ---- TYPED TEXT EFFECT ----
const typedEl = document.getElementById('typed-text');
const phrases = [
  'Full Stack Developer',
  'AI Engineer',
  'Node.js Expert',
  'React.js Developer',
  'LangChain Developer',
  'Python Developer',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typedEl.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typedEl.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typingSpeed = 1500;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 400;
  }

  setTimeout(typeEffect, typingSpeed);
}

setTimeout(typeEffect, 1000);

// ---- PARTICLES BACKGROUND ----
function createParticles() {
  const container = document.getElementById('particles-bg');
  const colors = ['#6c63ff', '#00d4aa', '#f093fb', '#ff6b6b'];
  const count = 25;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 4 + 2;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const duration = Math.random() * 20 + 15;
    const delay = Math.random() * 15;

    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      left: ${left}%;
      bottom: -20px;
      animation-duration: ${duration}s;
      animation-delay: -${delay}s;
      opacity: 0.6;
      box-shadow: 0 0 ${size * 2}px ${color};
    `;

    container.appendChild(particle);
  }
}

createParticles();

// ---- BACK TO TOP ----
const backToTop = document.getElementById('back-to-top');

function handleBackToTop() {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---- CONTACT FORM ----
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const btnText = submitBtn.querySelector('span');
  const btnIcon = submitBtn.querySelector('i');

  // Loading state
  submitBtn.disabled = true;
  btnText.textContent = 'Sending...';
  btnIcon.className = 'fas fa-spinner fa-spin';

  // Simulate form submission (replace with real API)
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Success state
  submitBtn.disabled = false;
  btnText.textContent = 'Send Message';
  btnIcon.className = 'fas fa-paper-plane';

  formStatus.className = 'form-status success';
  formStatus.textContent = '✅ Message sent successfully! I\'ll get back to you within 24 hours.';

  contactForm.reset();

  setTimeout(() => {
    formStatus.className = 'form-status';
    formStatus.textContent = '';
  }, 5000);
});

// ---- SMOOTH ANCHOR SCROLL ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---- CARD TILT EFFECT ----
document.querySelectorAll('.timeline-card, .education-card, .skill-category').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 3;
    const rotateY = ((x - centerX) / centerX) * 3;

    card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ---- CONSOLE MESSAGE ----
console.log(`
%c👋 Hey! I'm Tushar Gupta
%cFull Stack Developer & AI Engineer
%cLooking at my source code? Impressive! Let's connect.
%c📧 thetushara332@gmail.com
%c💼 linkedin.com/in/thetushargupta
`,
  'color: #6c63ff; font-size: 20px; font-weight: bold;',
  'color: #00d4aa; font-size: 14px;',
  'color: #a0a0b8; font-size: 12px;',
  'color: #f093fb; font-size: 12px;',
  'color: #f093fb; font-size: 12px;'
);
