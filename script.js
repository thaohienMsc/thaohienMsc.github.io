const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// --- 1. Persistent Theme Toggle ---
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
updateToggleIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(newTheme);
});

function updateToggleIcon(theme) {
    themeToggle.innerHTML = theme === 'dark' ? 
        '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
}

// --- 2. Performant Scroll Reveal ---
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// --- 3. Lightbox Logic ---
function openLightbox(src) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("fullCertImage");
    modal.style.display = "block";
    modalImg.src = src;
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    const modal = document.getElementById("certModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") closeLightbox();
});

document.getElementById('certModal').addEventListener('click', function(event) {
    if (event.target === this) closeLightbox();
});

// --- UNIQUE FEATURE 1: Scroll Progress Bar ---
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-progress").style.width = scrolled + "%";
});

// --- UNIQUE FEATURE 2: Typewriter Effect ---
const subtitleText = "E-Commerce Specialist | Senior @ UIT-VNU";
const typewriterElement = document.getElementById('typewriter');
let typeIndex = 0;

function typeWriter() {
    if (typeIndex < subtitleText.length) {
        typewriterElement.innerHTML += subtitleText.charAt(typeIndex);
        typeIndex++;
        setTimeout(typeWriter, 50); // Speed of typing in ms
    }
}
// Start typing when page loads
window.onload = typeWriter;


// --- UNIQUE FEATURE 3: Custom Project Slider ---
const track = document.getElementById('project-slider');
const slides = Array.from(track.children);
const nextButton = document.getElementById('slider-next');
const prevButton = document.getElementById('slider-prev');
const dotsContainer = document.getElementById('slider-dots');

let currentSlide = 0;

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
});

const dots = Array.from(dotsContainer.children);

function updateSlider() {
    // Move track
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to start
    updateSlider();
});

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop to end
    updateSlider();
});

// Clickable dots
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentSlide = parseInt(e.target.dataset.index);
        updateSlider();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Theme Toggle
    const themeToggleBtn = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;
    const themeIcon = themeToggleBtn.querySelector("i");

    // Check for saved theme
    const savedTheme = localStorage.getItem("theme") || "dark";
    htmlElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        htmlElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === "dark") {
            themeIcon.className = "fas fa-sun"; // Show sun in dark mode to switch to light
        } else {
            themeIcon.className = "fas fa-moon"; // Show moon in light mode to switch to dark
        }
    }

    // 2. Scroll Progress Bar
    const scrollProgress = document.getElementById("scroll-progress");
    window.addEventListener("scroll", () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.width = scrollPercentage + "%";
    });

    // 3. Typewriter Effect
    const typewriterElement = document.getElementById("typewriter");
    const text = "Biotechnology Researcher & PhD Candidate";
    let textIndex = 0;

    // Clear the HTML text first so JS can type it out
    typewriterElement.textContent = "";

    function typeWriter() {
        if (textIndex < text.length) {
            typewriterElement.textContent += text.charAt(textIndex);
            textIndex++;
            setTimeout(typeWriter, 50); // Typing speed
        }
    }
    // Start typing after a short delay
    setTimeout(typeWriter, 500);

    // 4. Reveal Elements on Scroll
    const revealElements = document.querySelectorAll(".reveal");
    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.85;
        revealElements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                el.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", checkReveal);
    checkReveal(); // Check on load

    // 5. Research Slider
    const track = document.getElementById("project-slider");
    const slides = Array.from(track.children);
    const nextButton = document.getElementById("slider-next");
    const prevButton = document.getElementById("slider-prev");
    const dotsNav = document.getElementById("slider-dots");
    let currentSlideIndex = 0;

    // Create dots based on number of slides
    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.dataset.index = index;
        dotsNav.appendChild(dot);
    });

    const dots = Array.from(dotsNav.children);

    function updateSlider(index) {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
        currentSlideIndex = index;
    }

    nextButton.addEventListener("click", () => {
        let nextIndex = currentSlideIndex + 1;
        if (nextIndex >= slides.length) nextIndex = 0; // Loop back to start
        updateSlider(nextIndex);
    });

    prevButton.addEventListener("click", () => {
        let prevIndex = currentSlideIndex - 1;
        if (prevIndex < 0) prevIndex = slides.length - 1; // Loop to end
        updateSlider(prevIndex);
    });

    dotsNav.addEventListener("click", e => {
        const targetDot = e.target.closest(".dot");
        if (!targetDot) return;
        updateSlider(parseInt(targetDot.dataset.index));
    });

    // 6. Interactive 3D Profile Hover Effect
    const profileImg = document.querySelector(".profile-img");
    const heroWrapper = document.querySelector(".hero-image-wrapper");

    if (profileImg && heroWrapper) {
        heroWrapper.addEventListener("mousemove", (e) => {
            profileImg.classList.remove("resetting");
            
            const rect = heroWrapper.getBoundingClientRect();
            // Calculate mouse position relative to the center of the image
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Adjust the divisor to make the effect stronger or weaker (higher number = less tilt)
            const rotateX = (y / rect.height) * -30; 
            const rotateY = (x / rect.width) * 30;

            profileImg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            // Make the shadow move opposite to the tilt for realism
            profileImg.style.boxShadow = `${-x / 10}px ${-y / 10}px 30px rgba(16, 185, 129, 0.4)`; 
        });

        heroWrapper.addEventListener("mouseleave", () => {
            profileImg.classList.add("resetting");
            profileImg.style.transform = `rotateX(0) rotateY(0) scale(1)`;
            profileImg.style.boxShadow = `0 10px 30px rgba(0,0,0,0.3)`;
        });
    }

    // 7. Botanical Floating Leaves Effect
    function createLeaf() {
        const leaf = document.createElement("div");
        leaf.classList.add("leaf");
        
        // SVG code for a simple leaf shape
        leaf.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 7,11.5 7,11.5C7,11.5 14,8 17,8Z"/></svg>`;
        
        // Randomize position, size, and animation duration
        const size = Math.random() * 20 + 10; // Between 10px and 30px
        leaf.style.width = `${size}px`;
        leaf.style.height = `${size}px`;
        leaf.style.left = `${Math.random() * 100}vw`; // Random horizontal start
        
        const duration = Math.random() * 5 + 7; // Between 7s and 12s
        leaf.style.animationDuration = `${duration}s`;
        
        document.body.appendChild(leaf);
        
        // Remove the leaf after it falls down to keep the DOM clean
        setTimeout(() => {
            leaf.remove();
        }, duration * 1000);
    }

    // Generate a new leaf every 800 milliseconds
    setInterval(createLeaf, 800);
});