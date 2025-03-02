document.addEventListener("DOMContentLoaded", function() {
    // Show loading animation
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
            }, 500); // Simulate a 3-second loading time
        });
    }

    // Load resources
    loadResources().then(() => {
        // Hide loading animation
        document.body.removeChild(loadingAnimation);

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
                d: 1,
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

        
    });
});