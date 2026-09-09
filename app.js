// CareerAI - Interactive Features

document.addEventListener("DOMContentLoaded", function () {

    // Smooth Navigation
    document.querySelectorAll("nav a").forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });


    // AI Resume Builder
    const generateButton =
        document.getElementById("generateResume");

    const resumeOutput =
        document.getElementById("resumeOutput");


    if (generateButton && resumeOutput) {

        generateButton.addEventListener("click", function () {

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const education =
                document.getElementById("education").value.trim();

            const skills =
                document.getElementById("skills").value.trim();

            const projects =
                document.getElementById("projects").value.trim();


            // Required fields
            if (!name || !email || !skills) {

                alert(
                    "Please enter your Name, Email and Skills."
                );

                return;
            }


            // Safe text function
            function escapeHTML(text) {

                return text
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");
            }


            // Calculate Resume Score
            const skillList = skills
                .split(",")
                .map(function (skill) {
                    return skill.trim();
                })
                .filter(Boolean);

            let score = 40;

            score += skillList.length * 8;

            if (education) {
                score += 10;
            }

            if (projects) {
                score += 10;
            }

            if (score > 100) {
                score = 100;
            }


            // Generate Resume
            resumeOutput.innerHTML = `

                <h2>📄 ${escapeHTML(name)}</h2>

                <p>
                    <strong>Email:</strong>
                    ${escapeHTML(email)}
                </p>

                <p>
                    <strong>Phone:</strong>
                    ${escapeHTML(phone || "Not provided")}
                </p>


                <h3>🎓 Education</h3>

                <p>
                    ${escapeHTML(
                        education || "Not provided"
                    )}
                </p>


                <h3>💻 Skills</h3>

                <p>
                    ${escapeHTML(skills)}
                </p>


                <h3>🚀 Projects</h3>

                <p>
                    ${escapeHTML(
                        projects || "Not provided"
                    )}
                </p>


                <h3>📊 Resume Readiness Score</h3>

                <p>
                    <strong>${score}%</strong>
                </p>


                <p>
                    🎉 Your CareerAI resume is ready!
                </p>
            `;


            // Show result
            resumeOutput.style.display = "block";


            // Scroll to result
            resumeOutput.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });
    }


    // CareerAI loaded
    console.log(
        "CareerAI loaded successfully 🚀"
    );

});