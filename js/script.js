document.addEventListener("DOMContentLoaded", () => {
    const modeBtn = document.querySelector(".mode-btn");
    const langBtn = document.querySelector(".lang-btn");

    // التحقق من الوضع المحفوظ مسبقاً في المتصفح
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.remove("dark-mode");
        if (modeBtn) modeBtn.textContent = "🌙 Dark";
    } else {
        document.body.classList.add("dark-mode");
        if (modeBtn) modeBtn.textContent = "☀️ Light";
    }

    if (modeBtn) {
        modeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                modeBtn.textContent = "☀️ Light";
            } else {
                localStorage.setItem("theme", "light");
                modeBtn.textContent = "🌙 Dark";
            }
        });
    }

    if (langBtn) {
        langBtn.addEventListener("click", () => {
            alert("Language switch framework ready.");
        });
    }
});
