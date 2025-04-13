document.addEventListener('DOMContentLoaded', () => {
    // Handle sing buttons
    const singButtons = document.querySelectorAll('.sing-button');
    
    singButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the track name from the parent element
            const trackItem = this.closest('.track-item');
            const trackTitle = trackItem.querySelector('.track-title').textContent;
            const trackArtist = trackItem.querySelector('.track-artist').textContent;
            
            // Show a simple modal or alert for the static version
            alert(`Starting karaoke session for "${trackTitle}" by ${trackArtist}.\n\nIn the full app, this would launch the karaoke experience with lyrics and backing track.`);
        });
    });
    
    // Add hover effect to track items
    const trackItems = document.querySelectorAll('.track-item');
    
    trackItems.forEach(item => {
        // Pulse animation when hovering over track items
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease';
            
            // Subtle pulse animation
            let scale = 1;
            let growing = true;
            
            const pulseInterval = setInterval(() => {
                if (growing) {
                    scale += 0.001;
                    if (scale >= 1.02) growing = false;
                } else {
                    scale -= 0.001;
                    if (scale <= 1) growing = true;
                }
                
                this.style.transform = `scale(${scale}) translateY(-3px)`;
            }, 30);
            
            // Store the interval ID on the element
            this.pulseInterval = pulseInterval;
        });
        
        item.addEventListener('mouseleave', function() {
            // Clear the pulse animation
            if (this.pulseInterval) {
                clearInterval(this.pulseInterval);
                this.pulseInterval = null;
            }
            
            this.style.transform = '';
        });
    });
    
    // Custom audio player controls (basic enhancements)
    const audioPlayers = document.querySelectorAll('audio');
    
    audioPlayers.forEach(player => {
        // Pause other players when one starts playing
        player.addEventListener('play', function() {
            audioPlayers.forEach(otherPlayer => {
                if (otherPlayer !== this && !otherPlayer.paused) {
                    otherPlayer.pause();
                }
            });
        });
    });
});