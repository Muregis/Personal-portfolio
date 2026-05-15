// Smooth scrolling for navigation links
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

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
html.setAttribute('data-theme', savedTheme || 'light');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Typing Animation
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const phrases = [
        'Built 5 Enterprise Products for Kenyan Businesses',
        'Processing KES 1M+ Monthly via M-Pesa Integrations',
        'Reducing School Admin Time by 70% with EduCore',
        'Full-Stack Developer | React & Node.js Expert',
        'M-Pesa Integration Specialist | Daraja API'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing next
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing animation
    setTimeout(type, 1000);
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.website-card, .product-card, .stat-card, .testimonial-card, .project-card, .skill-category, .testimonial, .contact-card, .tutoring-card, .pricing-card, .education-card, .timeline-item').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// Till number copy to clipboard
const tillNumber = document.querySelector('.till-number');
if (tillNumber) {
    tillNumber.style.cursor = 'pointer';
    tillNumber.title = 'Click to copy';
    
    tillNumber.addEventListener('click', () => {
        const number = tillNumber.textContent;
        navigator.clipboard.writeText(number).then(() => {
            const originalText = tillNumber.textContent;
            tillNumber.textContent = '✓ Copied!';
            setTimeout(() => {
                tillNumber.textContent = originalText;
            }, 2000);
        });
    });
}

// M-Pesa Modal
const modal = document.getElementById('mpesaModal');
const mpesaBtn = document.getElementById('mpesaBtn');
const modalClose = document.getElementById('modalClose');
const modalOverlay = document.querySelector('#mpesaModal .modal-overlay');
const sendBtn = document.getElementById('sendBtn');
const phoneInput = document.getElementById('phoneInput');
const amountInput = document.getElementById('amountInput');
let previouslyFocusedElement = null;

if (mpesaBtn) {
    mpesaBtn.addEventListener('click', () => {
        // Store previously focused element for return focus
        previouslyFocusedElement = document.activeElement;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Focus on first input when modal opens
        setTimeout(() => {
            phoneInput.focus();
        }, 100);
        // Add ARIA attributes for accessibility
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-labelledby', 'mpesaModalLabel');
    });
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
}

function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
    // Return focus to the element that opened the modal
    if (previouslyFocusedElement) {
        previouslyFocusedElement.focus();
    }
    // Remove ARIA attributes
    modal.removeAttribute('aria-modal');
    modal.removeAttribute('role');
    modal.removeAttribute('aria-labelledby');
}

// Add form validation to M-Pesa modal
if (sendBtn) {
    sendBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const phone = phoneInput.value.trim();
        const amount = parseInt(amountInput.value);
        
        // Validate phone number (Kenyan format)
        const phoneRegex = /^(07|01)\d{8}$/;
        if (!phoneRegex.test(phone)) {
            showError(phoneInput, 'Please enter a valid Kenyan phone number (07XXXXXXXX or 01XXXXXXXX)');
            return;
        }
        
        // Validate amount
        if (isNaN(amount) || amount < 10) {
            showError(amountInput, 'Please enter an amount of at least KES 10');
            return;
        }
        
        // Clear errors
        clearError(phoneInput);
        clearError(amountInput);
        
        // Here you would typically make the API call to your backend
        // For demo purposes, we'll simulate success
        simulateStkPush(phone, amount);
    });
}

// Helper functions for form validation
function showError(inputElement, message) {
    const formGroup = inputElement.parentElement;
    // Remove any existing error
    clearError(inputElement);
    
    // Create error element
    const errorElement = document.createElement('small');
    errorElement.className = 'error-message';
    errorElement.style.color = '#ef4444';
    errorElement.style.fontSize = '0.75rem';
    errorElement.style.display = 'block';
    errorElement.style.marginTop = '0.25rem';
    errorElement.textContent = message;
    
    // Add error styling to input
    inputElement.style.borderColor = '#ef4444';
    inputElement.style.boxShadow = '0 0 0 2px rgba(239, 68, 68, 0.2)';
    
    // Append error message
    formGroup.appendChild(errorElement);
}

function clearError(inputElement) {
    const formGroup = inputElement.parentElement;
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Reset input styling
    inputElement.style.borderColor = '';
    inputElement.style.boxShadow = '';
}

// Enhanced modal close functionality with escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeModal();
    }
    
    // Trap focus inside modal
    if (e.key === 'Tab' && modal && modal.classList.contains('active')) {
        trapFocus(modal, e);
    }
});

// Focus trapping function for modal accessibility
function trapFocus(modalElement, event) {
    const focusableElements = modalElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (event.shiftKey) { // Shift + Tab
        if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        }
    } else { // Tab
        if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }
}

// Simulate STK Push for demo (replace with actual API call in production)
function simulateStkPush(phone, amount) {
    // Show success message
    const modalBody = document.querySelector('#mpesaModal .modal-body');
    const originalContent = modalBody.innerHTML;
    
    modalBody.innerHTML = `
        <div class="success-message" style="text-align: center; padding: 2rem;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
            <h3>Payment Successful!</h3>
            <p>KES ${amount} sent to ${phone}</p>
            <p><small>Transaction ID: MP${Date.now().toString().slice(-6)}</small></p>
            <button class="btn-send" style="margin-top: 1.5rem;" onclick="location.reload()">Close</button>
        </div>
    `;
    
    // Auto-close after 3 seconds
    setTimeout(() => {
        modalBody.innerHTML = originalContent;
        closeModal();
    }, 3000);
}

// Copy to clipboard
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const type = this.dataset.copy;
        const text = type === 'till' ? '5758809' : '+254797846126';
        
        navigator.clipboard.writeText(text).then(() => {
            const originalHTML = this.innerHTML;
            this.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!';
            this.classList.add('copied');
            
            setTimeout(() => {
                this.innerHTML = originalHTML;
                this.classList.remove('copied');
            }, 2000);
        });
    });
});

// Mobile menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeModal();
    }
});

// Scroll Progress Bar & Back to Top
const scrollProgress = document.getElementById('scrollProgress');
const backToTop = document.getElementById('backToTop');

function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    if (scrollProgress) {
        scrollProgress.style.width = scrollPercent + '%';
    }
    
    if (backToTop) {
        if (scrollTop > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    const nav = document.querySelector('.nav');
    if (nav) {
        if (scrollTop > 30) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', updateScrollProgress);

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Project Filter Tabs
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        
        projectCards.forEach(card => {
            const category = card.dataset.category;
            
            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.classList.add('hidden');
                }, 300);
            }
        });
    });
});

// Skills Progress Bars Animation
const progressFills = document.querySelectorAll('.progress-fill');

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target;
            const width = fill.dataset.width;
            fill.style.setProperty('--progress-width', width + '%');
            fill.classList.add('animate');
            progressObserver.unobserve(fill);
        }
    });
}, { threshold: 0.5 });

progressFills.forEach(fill => {
    progressObserver.observe(fill);
});

// Testimonials Carousel
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.carousel-nav.prev');
const nextBtn = document.querySelector('.carousel-nav.next');
const dots = document.querySelectorAll('.carousel-dots .dot');
let currentTestimonial = 0;
let autoRotate;

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.classList.remove('active');
        if (dots[i]) dots[i].classList.remove('active');
    });
    testimonials[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
    currentTestimonial = index;
}

function nextTestimonial() {
    const next = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(next);
}

function prevTestimonial() {
    const prev = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(prev);
}

function startAutoRotate() {
    autoRotate = setInterval(nextTestimonial, 5000);
}

function stopAutoRotate() {
    clearInterval(autoRotate);
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        prevTestimonial();
        stopAutoRotate();
        startAutoRotate();
    });
    
    nextBtn.addEventListener('click', () => {
        nextTestimonial();
        stopAutoRotate();
        startAutoRotate();
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showTestimonial(index);
        stopAutoRotate();
        startAutoRotate();
    });
});

if (testimonials.length > 0) {
    startAutoRotate();
}

// Gallery render
(function () {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    const sampleGallery = [
        {
            title: 'Dashboard UI',
            image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=80&auto=format&fit=crop',
            desc: 'Analytics dashboard concept in the MuregiScore style.'
        },
        {
            title: 'Landing Page',
            image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900&q=80&auto=format&fit=crop',
            desc: 'Hero section for a fintech client with CTA focus.'
        },
        {
            title: 'Mobile Preview',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80&auto=format&fit=crop',
            desc: 'Responsive mobile layout preview.'
        }
    ];

    const stored = localStorage.getItem('galleryItems');
    const items = stored ? JSON.parse(stored) : sampleGallery;

    const fragment = document.createDocumentFragment();
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'gallery-card reveal';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="gallery-body">
                <h4>${item.title}</h4>
                <p>${item.desc || ''}</p>
            </div>
        `;
        fragment.appendChild(card);
    });

    galleryGrid.appendChild(fragment);

    // Hook into existing observer for reveals
    document.querySelectorAll('.gallery-card').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
})();

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(i => i.classList.remove('active'));
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

