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


    // =========================
    // RESUME BUILDER
    // =========================

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


            if (!name || !email || !skills) {

                alert(
                    "Please enter your Name, Email and Skills."
                );

                return;
            }


            function escapeHTML(text) {

                return text
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");
            }


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

            `;

            resumeOutput.style.display = "block";

            resumeOutput.scrollIntoView({
                behavior: "smooth"
            });

        });
    }


    // =========================
    // AI SKILL ANALYSIS
    // =========================

    const analyzeButton =
        document.getElementById("analyzeSkills");

    const skillResult =
        document.getElementById("skillResult");


    if (analyzeButton && skillResult) {

        analyzeButton.addEventListener("click", function () {

            const input =
                document.getElementById("skillInput").value
                .trim()
                .toLowerCase();


            if (!input) {

                alert(
                    "Please enter your skills first."
                );

                return;
            }


            const userSkills = input
                .split(",")
                .map(function (skill) {
                    return skill.trim();
                })
                .filter(Boolean);


            const recommendedSkills = {

                html: "CSS",
                css: "JavaScript",
                javascript: "React.js",
                react: "Node.js",
                "react.js": "Node.js",
                node: "Express.js",
                "node.js": "Express.js",
                python: "Django / Flask",
                java: "Spring Boot",
                sql: "Database Design",
                mysql: "Advanced SQL",
                git: "GitHub",
                github: "GitHub Actions"
            };


            let recommendations = [];


            userSkills.forEach(function (skill) {

                if (recommendedSkills[skill]) {

                    recommendations.push(
                        recommendedSkills[skill]
                    );
                }

            });


            recommendations =
                [...new Set(recommendations)];


            let resultHTML = `
                <h3>🎯 Your Skill Report</h3>

                <p>
                    <strong>Your Skills:</strong>
                    ${userSkills.join(", ")}
                </p>
            `;


            if (recommendations.length > 0) {

                resultHTML += `

                    <h3>📚 Recommended Next Skills</h3>

                    <ul>
                        ${recommendations
                            .map(function (skill) {
                                return `<li>${skill}</li>`;
                            })
                            .join("")}
                    </ul>

                    <p>
                        🚀 Keep learning these skills
                        to improve your career readiness.
                    </p>
                `;

            } else {

                resultHTML += `

                    <h3>💡 Recommendation</h3>

                    <p>
                        Start with HTML, CSS, JavaScript,
                        Git and SQL to build a strong
                        web development foundation.
                    </p>
                `;
            }


            skillResult.innerHTML = resultHTML;

            skillResult.style.display = "block";

            skillResult.scrollIntoView({
                behavior: "smooth"
            });

        });
    }


    console.log(
        "CareerAI loaded successfully 🚀"
    );

});