var aboutSection = document.getElementById("about-section");
        var skillsSection = document.getElementById("skills-section");
        var resumeSection = document.getElementById("resume-section");
        var worksSection = document.getElementById("works-section");

        const menulinks = document.querySelectorAll(".menu .menu-item");
        menulinks.forEach( el => {
            el.addEventListener("click", function() {

                let sectionToGo = aboutSection;

                switch(this.id) {
                    case "skills":
                        sectionToGo = skillsSection;
                        break;
                    case "resume":
                        sectionToGo = resumeSection;
                        break;
                    case "works":
                        sectionToGo = worksSection;
                        break;
                }
                // Scroll smoothly to section
                sectionToGo.scrollIntoView({behavior: "smooth"});
            })
        })