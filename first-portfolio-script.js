// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.academic-card, .skill-category, .project-card, .repo-folder').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Counter Animation for Stats
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate stats when in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const finalValue = stat.textContent;
                // Handle non-numeric values like "KNP"
                if (!isNaN(parseInt(finalValue))) {
                    const numericValue = parseInt(finalValue);
                    animateValue(stat, 0, numericValue, 2000);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Dynamic Year in Footer
const footerYear = document.querySelector('.footer p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `© ${currentYear} Victor Muregi. Computer Science Diploma Student.`;
}

// Typing Effect for Hero Section (Optional Enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Add hover effects to skill tags
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Form Validation (if forms are added later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '#e5e7eb';
        }
    });
    
    return isValid;
}

// Lazy Loading for Images (if images are added later)
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Console Easter Egg
console.log('%c👋 Hey there, curious developer!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cWelcome to Victor Muregi\'s Portfolio', 'font-size: 14px; color: #666;');
console.log('%cFeel free to explore the code and reach out if you have any questions!', 'font-size: 12px; color: #999;');

// Antigravity Dots Cursor Animation
const DOT_COUNT = 24;
const dots = [];
const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

for (let i = 0; i < DOT_COUNT; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot-cursor';
    // Assign a gradient color sequence
    dot.style.backgroundColor = colors[i % colors.length];
    document.body.appendChild(dot);
    dots.push(dot);
}

const positions = new Array(DOT_COUNT).fill({x: window.innerWidth / 2, y: window.innerHeight / 2});
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateDots() {
    positions[0] = {x: mouseX, y: mouseY};
    
    for (let i = 1; i < DOT_COUNT; i++) {
        const prev = positions[i - 1];
        const cur = positions[i];
        // The closer to the cursor, the faster it tracks (spring effect)
        const lerp = 0.35 - (i * 0.01);
        positions[i] = {
            x: cur.x + (prev.x - cur.x) * Math.max(0.05, lerp),
            y: cur.y + (prev.y - cur.y) * Math.max(0.05, lerp)
        };
    }
    
    for (let i = 0; i < DOT_COUNT; i++) {
        const {x, y} = positions[i];
        const scale = 1 - (i / DOT_COUNT) * 0.7; // Scale down smoothly
        const opacity = 1 - (i / DOT_COUNT);
        // Translate -50% to center the dot on the cursor
        dots[i].style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%)) scale(${scale})`;
        dots[i].style.opacity = opacity;
    }
    requestAnimationFrame(animateDots);
}
animateDots();

// Apply Typing Effect to Hero Subtitle
const subtitle = document.querySelector('.hero-subtitle');
if (subtitle) {
    const originalText = subtitle.textContent;
    typeWriter(subtitle, originalText, 50);
}
