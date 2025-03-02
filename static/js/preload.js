document.addEventListener("DOMContentLoaded", function() {
    // Show loading animation
    const loadingBackground = document.createElement('div');
    loadingBackground.className = 'loading-background';
    loadingBackground.style.position = 'fixed';
    loadingBackground.style.top = '0';
    loadingBackground.style.left = '0';
    loadingBackground.style.width = '100%';
    loadingBackground.style.height = '100%';
    loadingBackground.style.backgroundColor = '#e7e7e2';
    loadingBackground.style.zIndex = '9998'; // Ensure the loading background is just below the animation
    document.body.appendChild(loadingBackground);

    const loadingAnimation = document.createElement('div');
    loadingAnimation.className = 'polygon-loader';
    loadingAnimation.innerHTML = `
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    `;
    loadingAnimation.style.zIndex = '9999'; // Ensure the loading animation is on top
    document.body.appendChild(loadingAnimation);

    // Function to simulate resource loading
    function loadResources() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 900); // Simulate a 3-second loading time
        });
    }

    // Load resources
    loadResources().then(() => {
        // Hide loading animation and background
        document.body.removeChild(loadingAnimation);
        document.body.removeChild(loadingBackground);

        // Show the main content
        const mainContent = document.getElementById('app');
        if (mainContent) {
            mainContent.style.display = 'block';
        }

        // Initialize SakanaWidget
        function initSakanaWidget() {
            const takina = SakanaWidget.getCharacter('takina');
            takina.initialState = {
                ...takina.initialState,
                i: 0.01,
                d: 0.98,
            };
            SakanaWidget.registerCharacter('takina-slow', takina);
            new SakanaWidget({ character: 'takina-slow' }).mount('#sakana-widget');
        }

        // Load SakanaWidget script
        const sakanaScript = document.createElement('script');
        sakanaScript.src = 'https://cdn.jsdelivr.net/npm/sakana-widget@2.7.0/lib/sakana.min.js';
        sakanaScript.onload = initSakanaWidget;
        document.body.appendChild(sakanaScript);

        // Load Live2D Widget script
        const live2dScript = document.createElement('script');
        live2dScript.src = 'https://fastly.jsdelivr.net/gh/Yesord/live2d-widget@latest/autoload.js';
        document.body.appendChild(live2dScript);

        // Load additional scripts
        const scripts = [
            '/dist/APlayer.min.js',
            '/dist/music.js',
            '/static/js/ripple.js',
            '/static/js/mouse.js'
        ];

        scripts.forEach(src => {
            const script = document.createElement('script');
            script.src = src;
            document.body.appendChild(script);
        });
    });
});