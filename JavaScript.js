document.addEventListener("DOMContentLoaded", () => {
    const eventButton = document.createElement("button");
    const symposiumButton = document.createElement("button");
    const athleticMeetButton = document.createElement("button");

    const eventSection = document.querySelector("#treePlanting");
    const symposiumSection = document.querySelector("#symposium");
    const athleticMeetSection = document.querySelector("#athleticMeet");

    const sections = [eventSection, symposiumSection, athleticMeetSection];
    const buttons = [eventButton, symposiumButton, athleticMeetButton];

    function hideAllSections() {
        sections.forEach((section) => {
            section.style.display = "none";
        });

        buttons.forEach((button) => {
            button.style.backgroundColor = "transparent"; // Keep empty background initially
            button.style.color = "#0077b6"; // Reset color
            button.style.border = "2px solid #0077b6"; // Empty border
        });
    }

    function styleButton(button) {
        button.style.backgroundColor = "transparent"; // Empty background
        button.style.color = "#0077b6"; // Border color
        button.style.border = "2px solid #0077b6"; // Border style
        button.style.padding = "10px 20px";
        button.style.margin = "10px";
        button.style.borderRadius = "5px"; // Rounded corners
        button.style.fontSize = "16px"; // Modern button size
        button.style.cursor = "pointer";
        button.style.transition = "background-color 0.3s, color 0.3s, border 0.3s";
    }

    function createButton(button, label, section) {
        button.textContent = label;
        styleButton(button);
        button.addEventListener("click", () => {
            hideAllSections();
            section.style.display = "block";
            button.style.backgroundColor = "#0077b6"; // Change background when active
            button.style.color = "white"; // Change text color when active
        });
        section.querySelector("#button-container").appendChild(button); // Add button to the button container
    }

    // Initialize buttons
    createButton(eventButton, "Division Schools Press Conference", eventSection);
    createButton(symposiumButton, "Municipal Festival of Talents", symposiumSection);
    createButton(athleticMeetButton, "Municipal Athletic Meet", athleticMeetSection);

    // Default state: hide all sections
    hideAllSections();
});
