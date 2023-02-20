export function scrollToSection(event) {
    event.preventDefault();
    try {
        const section = document.querySelector(event.target.parentElement.getAttribute('href'));
        section.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
        console.error(error);
        console.error(event.target);
    }
}
