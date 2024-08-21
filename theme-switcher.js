// theme-switcher.js
document.addEventListener('DOMContentLoaded', function() {
    const lightModeButton = document.querySelector('#theme-switcher button:nth-child(1)');
    const darkModeButton = document.querySelector('#theme-switcher button:nth-child(2)');
    const decreaseFontButton = document.querySelector('#font-size-adjuster button:nth-child(1)');
    const increaseFontButton = document.querySelector('#font-size-adjuster button:nth-child(2)');

    function setTheme(themeName) {
        if (themeName === 'dark-mode') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', themeName);
    }

    function changeFontSize(change) {
        const body = document.body;
        const currentSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
        body.style.fontSize = (currentSize + change) + 'px';
    }

    lightModeButton.addEventListener('click', () => setTheme('light-mode'));
    darkModeButton.addEventListener('click', () => setTheme('dark-mode'));
    decreaseFontButton.addEventListener('click', () => changeFontSize(-1));
    increaseFontButton.addEventListener('click', () => changeFontSize(1));

    // Set initial theme
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    setTheme(savedTheme);
});