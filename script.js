// 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a, .hero-btns a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// 2. Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Trigger point
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        } else {
            // Optional: remove class to animate again on scroll up
            // element.classList.remove('active');
        }
    });
}

// Initial check on load
window.addEventListener('load', revealOnScroll);
// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// 3. Form Validation and Submission
const contactForm = document.getElementById('portfolio-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Basic validation
        if (!name || !email || !message) {
            showStatus('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showStatus('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        showStatus('Sending...', 'loading');
        
        setTimeout(() => {
            showStatus('Thank you! Your message has been sent successfully.', 'success');
            contactForm.reset();
        }, 1500);
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showStatus(message, type) {
    formStatus.textContent = message;
    formStatus.style.display = 'block';
    
    if (type === 'error') {
        formStatus.style.color = '#ef4444'; // Red
    } else if (type === 'success') {
        formStatus.style.color = '#10b981'; // Green
    } else {
        formStatus.style.color = '#60a5fa'; // Blue (Loading)
    }
}

// 4. Navbar Background Change on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});

// 5. Hero Button Hover Effect (Interactive enhancement)
const heroBtns = document.querySelectorAll('.btn');
heroBtns.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) translateY(-3px)';
    });
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});
