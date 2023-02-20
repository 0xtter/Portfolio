export function scrollToSection(event) {
    event.preventDefault();
    try {
        var section = document.querySelector(event.target.parentElement.getAttribute('href'));
        if (section == null) { // For Lottie Animations
            section = document.querySelector(event.target.getAttribute('href'));
        }
        section.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
        console.error(error);
        console.error(event.target);
    }
}
