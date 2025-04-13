document.addEventListener('DOMContentLoaded', () => {
    // Add page transition effect
    const navButtons = document.querySelectorAll('.nav-button');
    
    // Fade in when page loads
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Add click handlers to all navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = this.getAttribute('href');
            const isActive = this.classList.contains('active');
            const currentPath = window.location.pathname;
            
            // If clicking the active button (and not on home page), go back to home
            if (isActive && !currentPath.includes('index.html')) {
                animateAndNavigate('index.html');
                return;
            }
            
            // Don't do anything if we're already on this page
            if (currentPath.includes(target)) {
                return;
            }
            
            // Otherwise navigate to the page
            animateAndNavigate(target);
        });
    });
    
    // Function to handle slide-up animation and navigation
    function animateAndNavigate(targetUrl) {
        // Create slide panel
        const panel = document.createElement('div');
        panel.className = 'slide-panel';
        panel.style.position = 'fixed';
        panel.style.zIndex = '9999';
        panel.style.left = '0';
        panel.style.width = '100%';
        panel.style.height = '100%';
        panel.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
        panel.style.bottom = '-100%'; // Start from bottom
        panel.style.transition = 'bottom 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        panel.style.borderTopLeftRadius = '20px';
        panel.style.borderTopRightRadius = '20px';
        
        // Add handle
        const handle = document.createElement('div');
        handle.style.width = '40px';
        handle.style.height = '4px';
        handle.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        handle.style.borderRadius = '2px';
        handle.style.margin = '12px auto';
        panel.appendChild(handle);
        
        // Add to body
        document.body.appendChild(panel);
        
        // Force browser to recognize the element
        window.getComputedStyle(panel).opacity;
        
        // Animate panel sliding up
        requestAnimationFrame(() => {
            panel.style.bottom = '0';
        });
        
        // Navigate after animation
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 600);
    }
    
    // Add disco lights effect
    function addDiscoLights() {
        const container = document.querySelector('.app-container');
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
    
    addDiscoLights();
});