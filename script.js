document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.classList.add('mobile-menu-btn');
    mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';
    
    const nav = document.querySelector('nav');
    const mobileMenu = document.querySelector('nav ul');
    
    // Function to set up mobile menu based on screen size
    function setupMobileMenu() {
        if (window.innerWidth <= 768) {
            // Add mobile menu button if it doesn't exist
            if (!document.querySelector('.mobile-menu-btn')) {
                document.querySelector('header .container').insertBefore(mobileMenuBtn, nav);
            }
            // Always ensure the nav has mobile-menu class
            mobileMenu.classList.add('mobile-menu');
            // Make sure button is visible
            mobileMenuBtn.style.display = 'block';
        } else {
            // Remove mobile styling on larger screens
            if (document.querySelector('.mobile-menu-btn')) {
                document.querySelector('.mobile-menu-btn').remove();
            }
            mobileMenu.classList.remove('mobile-menu');
            mobileMenu.classList.remove('active');
            // Show the regular menu on larger screens
            mobileMenu.style.display = 'flex';
        }
    }
    
    // Call once on page load to set initial state
    setupMobileMenu();
    
    // Function to toggle mobile menu
    function toggleMobileMenu() {
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            mobileMenu.style.display = 'none';
        } else {
            mobileMenu.classList.add('active');
            mobileMenuBtn.classList.add('active');
            mobileMenu.style.display = 'flex';
        }
    }
    
    // Add click event to mobile menu button
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Add resize listener to handle menu on screen size change
    window.addEventListener('resize', setupMobileMenu);
    
    // Form validation for contact page
    const contactForm = document.getElementById('contact-us-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            if (!name.value.trim()) {
                isValid = false;
                alert('Please enter your name');
            } else if (!email.value.trim() || !email.value.includes('@')) {
                isValid = false;
                alert('Please enter a valid email address');
            } else if (!message.value.trim()) {
                isValid = false;
                alert('Please enter your message');
            }
            
            if (isValid) {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }
    
    // Add animations to merchandise items
    const merchItems = document.querySelectorAll('.merch-item, .chelina-item');
    
    merchItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});