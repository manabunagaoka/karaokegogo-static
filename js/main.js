document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation button clicks on home page
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetUrl = this.getAttribute('href');
            
            // Create overlay div that slides up
            const overlay = document.createElement('div');
            overlay.className = 'page-transition-overlay';
            overlay.style.position = 'fixed';
            overlay.style.left = '0';
            overlay.style.bottom = '-100%';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
            overlay.style.zIndex = '1000';
            overlay.style.transition = 'bottom 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
            overlay.style.borderTopLeftRadius = '20px';
            overlay.style.borderTopRightRadius = '20px';
            
            // Add handle bar
            const handle = document.createElement('div');
            handle.style.width = '40px';
            handle.style.height = '5px';
            handle.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            handle.style.borderRadius = '3px';
            handle.style.margin = '12px auto';
            overlay.appendChild(handle);
            
            // Add overlay to body
            document.body.appendChild(overlay);
            
            // Start animation after a tiny delay
            setTimeout(function() {
                overlay.style.bottom = '0';
            }, 10);
            
            // Navigate after animation completes
            setTimeout(function() {
                window.location.href = targetUrl;
            }, 400);
        });
    });
    
    // Add click handlers to close buttons on content pages
    const closeButtons = document.querySelectorAll('.close-button, .panel-handle');
    closeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the content panel
            const panel = document.querySelector('.content-panel');
            if (!panel) return;
            
            // Set transition
            panel.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
            panel.style.transform = 'translateY(100%)';
            
            // Navigate after animation
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 400);
        });
    });
    
    // Add disco lights on home page
    if (window.location.pathname.includes('index.html') || 
        window.location.pathname.endsWith('/') || 
        window.location.pathname === '') {
        
        // Fade in the home page
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
        
        // Add disco lights
        addDiscoLights();
    }
    
    // Function to add disco lights
    function addDiscoLights() {
        const container = document.querySelector('.app-container');
        if (!container) return;
        
        const colors = ['#a239ca', '#4a90e2', '#f1a43c', '#3bcc65'];
        
        // Create disco lights
        for (let i = 0; i < 6; i++) {
            const light = document.createElement('div');
            light.className = 'disco-light';
            light.style.position = 'absolute';
            light.style.width = '150px';
            light.style.height = '150px';
            light.style.borderRadius = '50%';
            light.style.background = colors[i % colors.length];
            light.style.filter = 'blur(60px)';
            light.style.opacity = '0.4';
            light.style.zIndex = '1';
            light.style.transition = 'opacity 0.5s ease';
            
            // Position lights
            if (i < 3) {
                light.style.top = `${10 + (i * 25)}%`;
                light.style.left = `${20 + (i * 20)}%`;
            } else {
                light.style.bottom = `${10 + ((i-3) * 25)}%`;
                light.style.right = `${20 + ((i-3) * 20)}%`;
            }
            
            container.appendChild(light);
        }
        
        // Animate disco lights
        const lights = document.querySelectorAll('.disco-light');
        let pulsing = true;
        
        setInterval(() => {
            lights.forEach((light, index) => {
                setTimeout(() => {
                    light.style.opacity = pulsing ? '0.6' : '0.3';
                }, index * 200);
            });
            pulsing = !pulsing;
        }, 2000);
    }
});