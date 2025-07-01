
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

        // Close mobile menu if open
        document.querySelector('.nav-menu').classList.remove('active');
    }
});
});

// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
document.querySelector('.nav-menu').classList.toggle('active');
});

// FAQ Toggle Function
document.querySelectorAll('.faq-question').forEach(question => {
question.addEventListener('click', function () {
    const answer = this.nextElementSibling;
    const icon = this.querySelector('i');

    // Toggle current FAQ
    answer.classList.toggle('active');

    // Toggle icon
    if (answer.classList.contains('active')) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
});
});

// Form submission handler
document.getElementById('application-form').addEventListener('submit', function (e) {
e.preventDefault();

// Show success message
const form = this;
const originalButton = form.querySelector('.submit-btn');
originalButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';

setTimeout(() => {
    originalButton.innerHTML = 'Application Submitted!';
    originalButton.style.background = 'linear-gradient(45deg, #4CAF50, #8BC34A)';

    // Reset form after 3 seconds
    setTimeout(() => {
        form.reset();
        originalButton.innerHTML = 'Submit Application';
        originalButton.style.background = 'linear-gradient(45deg, #ff6b6b, #ff8e8e)';
    }, 3000);
}, 1500);
});

// Add animation on scroll
const observerOptions = {
threshold: 0.1,
rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.style.animation = `fadeIn 0.8s ease forwards`;
    }
});
}, observerOptions);

// Observe elements
document.querySelectorAll('.service-card, .stat-item, .value-item, .faq-item, .contact-item, .mv-card').forEach(el => {
el.style.opacity = '0';
observer.observe(el);
});

// Header background on scroll
window.addEventListener('scroll', () => {
const header = document.querySelector('.header');
const backToTop = document.querySelector('.back-to-top');

if (window.scrollY > 100) {
    header.style.background = 'rgba(106, 13, 173, 0.95)';
    header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    backToTop.classList.add('visible');
} else {
    header.style.background = 'var(--gradient-purple)';
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    backToTop.classList.remove('visible');
}
});

// Back to top functionality
document.querySelector('.back-to-top').addEventListener('click', () => {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
});

// Initialize animations
window.addEventListener('DOMContentLoaded', () => {
// Add animation delay to service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Add animation delay to stats
document.querySelectorAll('.stat-item').forEach((stat, index) => {
    stat.style.animationDelay = `${index * 0.15}s`;
});
});

//  Blog link to navigation
document.addEventListener('DOMContentLoaded', function () {
const navMenu = document.querySelector('.nav-menu');
const blogNavItem = document.createElement('li');
blogNavItem.innerHTML = '<a href="#blog" class="nav-link">Blog</a>';

// Insert after About and before FAQ
if (navMenu.children.length >= 3) {
    navMenu.insertBefore(blogNavItem, navMenu.children[3]);
} else {
    navMenu.appendChild(blogNavItem);
}
});


function toggleAnimation() {
    const track = document.getElementById('carouselTrack');
    const btn = document.querySelector('.pause-btn');
    const isPaused = track.style.animationPlayState === 'paused';
    
    track.style.animationPlayState = isPaused ? 'running' : 'paused';
    btn.textContent = isPaused ? '⏸️ Pause' : '▶️ Play';
}