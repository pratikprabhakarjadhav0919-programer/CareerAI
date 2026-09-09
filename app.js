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

// =========================
// AI CAREER ADVISOR
// =========================

const careerButton = document.getElementById("getCareer");
const careerResult = document.getElementById("careerResult");

if (careerButton && careerResult) {

    careerButton.addEventListener("click", function () {

        const interest = document
            .getElementById("careerInterest")
            .value
            .trim()
            .toLowerCase();

        const skills = document
            .getElementById("careerSkills")
            .value
            .trim()
            .toLowerCase();


        if (!interest || !skills) {
            alert("Please enter your interest and skills.");
            return;
        }


        let career = "";
        let roadmap = "";


        if (
            interest.includes("web") ||
            skills.includes("html") ||
            skills.includes("css") ||
            skills.includes("javascript")
        ) {
            career = "🌐 Full Stack Web Developer";
            roadmap =
                "HTML → CSS → JavaScript → React → Node.js → Database → GitHub";
        }

        else if (
            interest.includes("data") ||
            skills.includes("python") ||
            skills.includes("sql")
        ) {
            career = "📊 Data Analyst / Data Professional";
            roadmap =
                "Python → SQL → Statistics → Pandas → Data Visualization → Projects";
        }

        else if (
            interest.includes("app") ||
            skills.includes("java") ||
            skills.includes("android")
        ) {
            career = "📱 Android Developer";
            roadmap =
                "Java/Kotlin → Android Studio → UI → APIs → Database → Projects";
        }

        else if (
            interest.includes("design") ||
            skills.includes("figma") ||
            skills.includes("ui")
        ) {
            career = "🎨 UI/UX Designer";
            roadmap =
                "UI Basics → Figma → UX Research → Wireframes → Prototypes → Portfolio";
        }

        else {
            career = "💻 Software Developer";
            roadmap =
                "Programming Basics → OOP → Data Structures → GitHub → Projects → Interview Prep";
        }


        careerResult.innerHTML = `
            <h3>🎯 Recommended Career</h3>

            <h2>${career}</h2>

            <h3>🗺️ Suggested Roadmap</h3>

            <p>${roadmap}</p>

            <p>
                🚀 Keep building projects and improving your skills!
            </p>
        `;

        careerResult.style.display = "block";

        careerResult.scrollIntoView({
            behavior: "smooth"
        });

    });
}

// =========================
// AI INTERVIEW PREP
// =========================

const interviewQuestions = [
    {
        question: "What is HTML?",
        keywords: ["markup", "web", "structure"]
    },
    {
        question: "What is CSS?",
        keywords: ["style", "design", "web"]
    },
    {
        question: "What is JavaScript?",
        keywords: ["programming", "script", "web"]
    },
    {
        question: "What is a database?",
        keywords: ["data", "store", "information"]
    },
    {
        question: "What is GitHub?",
        keywords: ["code", "repository", "git"]
    }
];

let currentQuestion = 0;
let interviewScore = 0;

const questionElement =
    document.getElementById("question");

const answerElement =
    document.getElementById("answer");

const checkAnswerButton =
    document.getElementById("checkAnswer");

const nextQuestionButton =
    document.getElementById("nextQuestion");

const interviewResult =
    document.getElementById("interviewResult");


function showQuestion() {

    if (!questionElement) return;

    questionElement.textContent =
        interviewQuestions[currentQuestion].question;

    answerElement.value = "";

    interviewResult.style.display = "none";
}


if (checkAnswerButton) {

    checkAnswerButton.addEventListener("click", function () {

        const answer =
            answerElement.value.trim().toLowerCase();

        if (!answer) {
            alert("Please write your answer first.");
            return;
        }

        const keywords =
            interviewQuestions[currentQuestion].keywords;

        let matched = 0;

        keywords.forEach(function (keyword) {

            if (answer.includes(keyword)) {
                matched++;
            }

        });

        const percentage =
            Math.round((matched / keywords.length) * 100);

        if (percentage >= 60) {
            interviewScore++;
        }

        interviewResult.innerHTML = `
            <h3>📊 Answer Result</h3>

            <p>
                Your answer matched
                <strong>${percentage}%</strong>
                of the important concepts.
            </p>

            <p>
                ${percentage >= 60
                    ? "✅ Good answer! Keep improving."
                    : "💡 Try to include more important concepts."
                }
            </p>
        `;

        interviewResult.style.display = "block";
    });
}


if (nextQuestionButton) {

    nextQuestionButton.addEventListener("click", function () {

        currentQuestion++;

        if (currentQuestion >= interviewQuestions.length) {

            questionElement.textContent =
                "🎉 Interview Completed!";

            answerElement.style.display = "none";
            checkAnswerButton.style.display = "none";
            nextQuestionButton.style.display = "none";

            interviewResult.innerHTML = `
                <h3>🏆 Final Score</h3>

                <p>
                    You answered
                    <strong>${interviewScore}</strong>
                    out of
                    <strong>${interviewQuestions.length}</strong>
                    questions well.
                </p>

                <p>
                    🚀 Keep practicing to improve your interview skills!
                </p>
            `;

            interviewResult.style.display = "block";

            return;
        }

        showQuestion();
    });
}


// Start first question
showQuestion();

    console.log(
        "CareerAI loaded successfully 🚀"
    );

});