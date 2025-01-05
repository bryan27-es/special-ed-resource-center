function scrollToResources() {
    const resourcesSection = document.getElementById('resources');
    resourcesSection.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', { name, email, message });
        
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Add accessibility features
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('focus', function() {
            this.style.outline = '2px solid #ffffff';
        });
        link.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    // Add text-to-speech functionality
    const speechButton = document.createElement('button');
    speechButton.textContent = 'Read Aloud';
    speechButton.setAttribute('aria-label', 'Read page content aloud');
    speechButton.style.position = 'fixed';
    speechButton.style.top = '10px';
    speechButton.style.right = '10px';
    speechButton.style.zIndex = '1000';
    document.body.appendChild(speechButton);

    speechButton.addEventListener('click', function() {
        const textToRead = document.body.innerText;
        const utterance = new SpeechSynthesisUtterance(textToRead);
        window.speechSynthesis.speak(utterance);
    });

    // Add high contrast mode toggle
    const contrastButton = document.createElement('button');
    contrastButton.textContent = 'Toggle High Contrast';
    contrastButton.setAttribute('aria-label', 'Toggle high contrast mode');
    contrastButton.style.position = 'fixed';
    contrastButton.style.top = '50px';
    contrastButton.style.right = '10px';
    contrastButton.style.zIndex = '1000';
    document.body.appendChild(contrastButton);

    contrastButton.addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
        if (document.body.classList.contains('high-contrast')) {
            document.body.style.backgroundColor = '#000000';
            document.body.style.color = '#ffffff';
        } else {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        }
    });
});