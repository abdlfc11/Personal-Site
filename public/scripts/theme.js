const themeToggle = document.querySelector("[data-theme-toggle]");

(function initTheme() {
    const storedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const theme = storedTheme || (prefersLight ? 'light' : 'dark');
    applyTheme(theme);
})();

/**
 * Function to remove or add the data-theme attribute to document (add if the theme is 'light' remove if otherwise)
 * @param {string} theme 
 * @returns {void}
 */
function applyTheme(theme) {
    if (theme === "light") {
        document.documentElement.setAttribute("data-theme", "light");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }

    themeToggle?.setAttribute(
        "aria-label",
        theme === "light"
            ? "Switch to dark theme"
            : "Switch to light theme"
    );
}



/**
 * Function responsible for orchistrating the toggling of the site's theme.
 * It determines what the new theme is and sets this in localStorage under the key 'theme'
 * and then calls applyTheme() to change the site's theme
 * @returns {void}
 */
function clickThemeToggle() {
    const isLight =
        document.documentElement.getAttribute("data-theme") === "light";

    const nextTheme = isLight ? "dark" : "light";

    localStorage.setItem("theme", nextTheme);

    applyTheme(nextTheme);
}



themeToggle.addEventListener('click', clickThemeToggle)


