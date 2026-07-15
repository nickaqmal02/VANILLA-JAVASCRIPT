

document.title = "my website";

console.dir(document);

const username = "nicky";

const welcomeMsg = document.getElementById("welcome-msg"
);

welcomeMsg.textContent += username === "" ? `Guest` : username;



