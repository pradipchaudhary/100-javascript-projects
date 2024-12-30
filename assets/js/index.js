console.log("connected js");

const shortDescription = () => {
    const description = document.querySelectorAll(".project-description");
    console.log(description);
};

shortDescription();
// Project data array
const projects = [
    {
        id: "01", // Padded id for each project
        title: "To-Do List",
        description:
            "Organize tasks with a dynamic To-Do list. Add, edit, and delete tasks with local storage support.",
        image: "./assets/images/open-ai.avif",
        liveLink: `https://github.com/pradipchaudhary/100-javascript-projects/01-todo-list`, // Dynamic live link
        codeLink: `https://github.com/pradipchaudhary/100-javascript-projects/tree/master/01-todo-list`, // Dynamic code link
        alt: "To-Do List Project Image", // Alt text for image
        tech_used: ["HTML", "CSS", "JavaScript", "Local Storage"], // Technologies used
        estimated_time: "2-3 hours", // Estimated time to complete the project
    },
    {
        id: "02",
        title: "Simple Calculator",
        description:
            "A simple calculator app built with HTML, CSS, and JavaScript to perform basic arithmetic operations.",
        image: "./assets/images/sonos.avif",
        liveLink: `https://github.com/pradipchaudhary/100-javascript-projects/02-simple-calculator`, // Dynamic live link
        codeLink: `https://github.com/pradipchaudhary/100-javascript-projects/tree/master/02-simple-calculator`, // Dynamic code link
        alt: "Simple Calculator Project Image", // Alt text for image
        tech_used: ["HTML", "CSS", "JavaScript"], // Technologies used
        estimated_time: "1-2 hours", // Estimated time to complete the project
    },
    {
        id: "03",
        title: "Digital Clock",
        description:
            "A live digital clock that updates every second. Perfect for practicing JavaScript date and time functions.",
        image: "./assets/images/nike.avif",
        liveLink: `https://github.com/pradipchaudhary/100-javascript-projects/03-digital-clock`, // Dynamic live link
        codeLink: `https://github.com/pradipchaudhary/100-javascript-projects/tree/master/03-digital-clock`, // Dynamic code link
        alt: "Digital Clock Project Image", // Alt text for image
        tech_used: ["HTML", "CSS", "JavaScript", "Date API"], // Technologies used
        estimated_time: "1-2 hours", // Estimated time to complete the project
    },
    {
        id: "04",
        title: "Tip Calculator",
        description:
            "A useful app to calculate tips based on the bill amount and selected percentage. Built with HTML, CSS, and JavaScript.",
        image: "./assets/images/nike.avif",
        liveLink: `https://github.com/pradipchaudhary/100-javascript-projects/04-tip-calculator`, // Dynamic live link
        codeLink: `https://github.com/pradipchaudhary/100-javascript-projects/tree/master/04-tip-calculator`, // Dynamic code link
        alt: "Tip Calculator Project Image", // Alt text for image
        tech_used: ["HTML", "CSS", "JavaScript"], // Technologies used
        estimated_time: "1 hour", // Estimated time to complete the project
    },
    {
        id: "05",
        title: "Temperature Converter",
        description:
            "Convert temperatures between Celsius, Fahrenheit, and Kelvin with this handy tool using JavaScript.",
        image: "./assets/images/sonos.avif",
        liveLink: `https://github.com/pradipchaudhary/100-javascript-projects/05-temperature-converter`, // Dynamic live link
        codeLink: `https://github.com/pradipchaudhary/100-javascript-projects/tree/master/05-temperature-converter`, // Dynamic code link
        alt: "Temperature Converter Project Image", // Alt text for image
        tech_used: ["HTML", "CSS", "JavaScript"], // Technologies used
        estimated_time: "1 hour", // Estimated time to complete the project
    },
    {
        id: "06",
        title: "Random Quote Generator",
        description:
            "Generates a new inspirational quote each time you click, using JavaScript and an API for quote data.",
        image: "./assets/images/open-ai.avif",
        liveLink: `https://github.com/pradipchaudhary/100-javascript-projects/06-random-quote-generator`, // Dynamic live link
        codeLink: `https://github.com/pradipchaudhary/100-javascript-projects/tree/master/06-random-quote-generator`, // Dynamic code link
        alt: "Random Quote Generator Project Image", // Alt text for image
        tech_used: ["HTML", "CSS", "JavaScript", "API"], // Technologies used
        estimated_time: "1-2 hours", // Estimated time to complete the project
    },
];

// Reference to the project grid container
const projectGrid = document.getElementById("project-grid");

// Function to generate project cards dynamically
function renderProjects() {
    projects.forEach((project) => {
        // Create the project card element
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        // Generate the tech used HTML manually
        const techUsedHTML = project.tech_used
            .map((item) => `<span class="tech-item">${item}</span>`)
            .join(" ");

        // Set the inner HTML for each card
        projectCard.innerHTML = `
            <img class="project-thumbnail" src="${project.image}" alt="${project.alt}" />
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
           
          <div class="project-tech"> ${techUsedHTML}</div>
            <p class="project-time"><strong><i class="ri-time-line"></i></strong> ${project.estimated_time}</p>
           
            <a href="${project.codeLink}" class="project-link">
                code <i class="ri-code-s-slash-line"></i>
            </a>
`;

        // Append the card to the project grid
        projectGrid.appendChild(projectCard);
    });
}

// Call the function to render projects on page load
renderProjects();
