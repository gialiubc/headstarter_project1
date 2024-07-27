document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetClass = this.getAttribute('href').substring(1); 
            const targetSection = document.querySelector('.' + targetClass); 
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight; 
                const offsetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight; 
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Explore button functionality (if applicable)
    const exploreButton = document.querySelector('.showcase .button-section .explore-button');
    if (exploreButton) {
        exploreButton.addEventListener('click', function(e) {
            e.preventDefault();
            const searchSection = document.querySelector('.search');
            searchSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Adjust audio volume
    const audios = document.querySelectorAll('audio');
    audios.forEach(function(audio) {
        audio.volume = 0.2;
    });
    
});
    

