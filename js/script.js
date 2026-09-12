document.addEventListener("DOMContentLoaded", () => {
    const modeBtn = document.querySelector(".mode-btn");
    const langBtn = document.querySelector(".lang-btn");

    if (modeBtn) {
        modeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            modeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light" : "🌙 Dark";
        });
    }

    if (langBtn) {
        langBtn.addEventListener("click", () => {
            alert("Language toggle switch framework active.");
        });
    }
});
