document.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.querySelector(".lang-btn");
    const translations = {
        ar: { home: "الرئيسية", structural: "البيم الإنشائي", architectural: "البيم المعماري", courses: "الكورسات", contact: "تواصل معنا", login: "تسجيل الدخول", register: "إنشاء حساب", langCode: "EN", dir: "rtl" },
        en: { home: "Home", structural: "Structural BIM", architectural: "Architectural BIM", courses: "Courses", contact: "Contact Us", login: "Login", register: "Register", langCode: "AR", dir: "ltr" }
    };
    let currentLang = "ar";
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            currentLang = currentLang === "ar" ? "en" : "ar";
            const t = translations[currentLang];
            document.documentElement.setAttribute("dir", t.dir);
            document.documentElement.setAttribute("lang", currentLang);
            langBtn.textContent = t.langCode;
            document.querySelector(".navbar a[href='index.html']").textContent = t.home;
            document.querySelector(".navbar a[href='courses.html']").textContent = t.courses;
            document.querySelector(".navbar a[href='contact.html']").textContent = t.contact;
            document.querySelector(".login-btn").textContent = t.login;
            document.querySelector(".register-btn").textContent = t.register;
        });
    }
});
