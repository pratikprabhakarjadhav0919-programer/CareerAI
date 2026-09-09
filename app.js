// CareerAI - Interactive Features

// Smooth navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Welcome message
document.addEventListener("DOMContentLoaded", function() {
    console.log("CareerAI loaded successfully 🚀");
});


// Career readiness calculator
function calculateCareerScore(resume, skills, interview, roadmap) {

    const score =
        (resume * 0.30) +
        (skills * 0.30) +
        (interview * 0.20) +
        (roadmap * 0.20);

    return Math.round(score);
}


// Example score
const careerScore = calculateCareerScore(
    78,
    67,
    80,
    46
);

console.log("Career Readiness:", careerScore + "%");


// Resume score button
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function() {

        if (this.textContent.includes("Get Started")) {

            alert(
                "Welcome to CareerAI! 🚀\n\n" +
                "Your personalized career journey starts now."
            );

        }

    });

});


// Feature card interaction
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", function() {

        const title = this.querySelector("h3");

        if (title) {
            alert(
                title.textContent +
                "\n\nThis CareerAI feature will be available in the next version."
            );
        }

    });

});


// Dashboard statistics animation
const statNumbers = document.querySelectorAll(".stat-box h3");

statNumbers.forEach(stat => {

    stat.style.transition = "transform 0.3s";

    stat.addEventListener("mouseenter", function() {
        this.style.transform = "scale(1.1)";
    });

    stat.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
    });

});