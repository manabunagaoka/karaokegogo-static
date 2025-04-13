document.addEventListener('DOMContentLoaded', () => {
    // Add page transition effect
    const navButtons = document.querySelectorAll('.nav-button');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = this.getAttribute('href');
            
            // Simple fade out effect
            document.body.style.opacity = 0;
            
            // Navigate after transition
            setTimeout(() => {
                window.location.href = target;
            }, 300);
        });
    });
    
    // Fade in when page loads
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = 1;
    }, 100);
    
    // Add subtle animation to microphone
    const microphoneImage = document.querySelector('.microphone-image');
    if (microphoneImage) {
        // Subtle floating animation
        let floatY = 0;
        let direction = 1;
        
        setInterval(() => {
            if (floatY > 5) direction = -1;
            if (floatY < 0) direction = 1;
            
            floatY += 0.1 * direction;
            microphoneImage.style.transform = `translateY(${floatY}px)`;
        }, 50);
    }
});