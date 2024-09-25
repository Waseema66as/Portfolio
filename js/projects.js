let projects = [
  {
    title: "softleed.com",
    link: "https://softleed.com/index.html#hero",
    team_lead: "Abbas Raza",
    lead_linkedIn: "https://www.linkedin.com/in/abbas-chawan/",
    description:
      "Premier Software Solution Provider - Where Digital Dreams Come to Life!",
    alignment: "left",
  },
  {
    title: "Bulk WhatsApp",
    link: "https://softleed.com/index.html#team",
    team_lead: "Abbas Raza",
    lead_linkedIn: "https://www.linkedin.com/in/abbas-chawan/",
    description:
      "The ultimate solution for sending bulk WhatsApp messages with just one click. Say goodbye to the hassle of manual messaging and hello to effortless communication with your audience.",
    alignment: "right",
  },
  {
    title: "jewellery-shop",
    link: "https://waseema66as.github.io/jewellery-shop/index.html",
    description:
      "Responsive websites using modern frontend technologies, ensuring seamless user interactions and smooth navigation.",
    alignment: "left",
  },
  {
    title: "Fash Fits",
    link: "https://waseema66as.github.io/CPISM-PROJECT/index.html",
    description:
      "FashFits is a user-friendly online platform where users can explore fashion Stylists, view collections, and receive personalized styling recommendations.",
    alignment: "right",
  },
  {
    title: "bootstrap_classes",
    link: "https://waseema66as.github.io/bootstrao_classes/classes.css",
    description:
      "A collection of custom Bootstrap classes designed to enhance the flexibility of your web projects. Tailored for developers looking to extend Bootstrap’s core functionalities with personalized styling and reusable components.",
    alignment: "left",
  },
  {
    title: "all_in_one",
    link: "https://waseema66as.github.io/all_in_one/",
    description:
      "A comprehensive webpage featuring various array operations like push, shift, and more. It serves as a practical demonstration of array manipulation techniques, offering interactive examples and explanations for learning purposes.",
    alignment: "right",
  },
  {
    title: "calculator Javascript",
    link: "https://waseema66as.github.io/calculaterJavascript/",
    description:
      "An intuitive calculator built using a JavaScript library, offering essential arithmetic functions with a clean and simple user interface. This project showcases how to implement fundamental calculation logic using JavaScript.",
    alignment: "left",
  },
  {
    title: "javascript-bulb-on-off",
    link: "https://waseema66as.github.io/javascript-bulb-on-off/",
    description:
      "A JavaScript-powered feature to turn a virtual light bulb on and off. This project demonstrates the basics of DOM manipulation and event handling in JavaScript through a fun and interactive example.",
    alignment: "right",
  },
  {
    title: "Get-w_g_n",
    link: "https://waseema66as.github.io/Get-w_g_n/",
    description:
      "A utility webpage designed to retrieve WhatsApp group numbers efficiently. This tool simplifies the process of extracting group numbers, making it easier for users to access and manage WhatsApp group numbers.",
    alignment: "left",
  },
  {
    title: "Simon-game",
    link: "https://waseema66as.github.io/Simon-game/",
    description:
      "An engaging version of the classic Simon game built with JavaScript. Players must memorize and repeat sequences of colors and sounds, offering an entertaining way to explore the use of arrays, event listeners, and game logic in JavaScript.",
    alignment: "right",
  },
  {
    title: "calculator custom",
    link: "https://waseema66as.github.io/calculatercustom/",
    description:
      "A custom-built calculator that goes beyond basic operations. This project highlights the integration of advanced JavaScript features and user interface design, providing a flexible and efficient tool for performing custom calculations.",
    alignment: "left",
  },
  {
    title: "Universities-by-Country",
    link: "https://waseema66as.github.io/Universities-by-Country/",
    description:
      "An intuitive platform that allows users to search and explore universities from various countries. This project simplifies the process of finding institutions by region, helping users discover and compare academic opportunities worldwide.",
    alignment: "right",
  },
];

let projects_container = document.querySelector("#projects-container");
let projectsHTML = "";
projects.forEach((project) => {
  projectsHTML += `
      <div class="timeline-item ${project.alignment} wow slideIn${
    project.alignment === "left" ? "Left" : "Right"
  }" data-wow-delay="0.1s">
        <div class="timeline-text">
          <a href="${project.link}" target="_blank">
            <div class="timeline-date">link: ${project.title}</div>
          </a>
          <h2>${project.title}</h2>
          ${
            project.team_lead
              ? `<a href="${project.lead_linkedIn}" target="_blank">
            <h4>Team leader: ${project.team_lead} <i class="fa-brands fa-linkedin"></i></h4>
          </a>`
              : ""
          }
          <p>${project.description}</p>
        </div>
      </div>
    `;
});
projects_container.innerHTML = projectsHTML;
