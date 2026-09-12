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

    // منطق عرض بيانات الكورس ديناميكياً في صفحة التفاصيل
    const courseTitle = document.getElementById("course-title");
    const courseDesc = document.getElementById("course-desc");
    const courseDetailsText = document.getElementById("course-details-text");

    if (courseTitle) {
        const hash = window.location.hash.substring(1); // استخراج الكورس من الـ Hash مثل #revit
        
        const coursesData = {
            revit: {
                title: "Autodesk Revit Complete Masterclass",
                desc: "From absolute zero to professional engineering modeling across architectural and structural disciplines.",
                text: "This intensive program covers family creation, phasing, worksharing, collaboration sets, and high-level project structuring according to international BIM standards."
            },
            max: {
                title: "3ds Max Architectural Visualization",
                desc: "Realistic rendering, advanced spatial design, and high-end architectural post-production workflows.",
                text: "Master poly-modeling, lighting setups, V-Ray/Corona render engines, and material creation to deliver stunning photorealistic architectural presentations."
            },
            navisworks: {
                title: "Navisworks Project Coordination",
                desc: "Clash detection, 4D timeline simulation, and multidisciplinary coordination.",
                text: "Learn how to aggregate multiple engineering models, run automated clash detection tests, track issues, and simulate construction sequencing."
            },
            cpp: {
                title: "C++ & Engineering Tool Development",
                desc: "Build custom scripts and add-ins to automate and accelerate engineering workflows.",
                text: "Gain deep technical capabilities in programming custom tools, interacting with software APIs, and optimizing data management tasks."
            }
        };

        if (coursesData[hash]) {
            courseTitle.textContent = coursesData[hash].title;
            courseDesc.textContent = coursesData[hash].desc;
            courseDetailsText.textContent = coursesData[hash].text;
        } else {
            courseTitle.textContent = "Specialized Engineering Course";
            courseDesc.textContent = "Professional training track designed for modern engineers.";
            courseDetailsText.textContent = "Explore our hands-on labs and real-world project workflows tailored to boost your professional career.";
        }
    }
});
