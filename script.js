
const digitalTime = document.querySelector("#digitalTime");

setInterval(() => {
    const newTime = new Date();
    digitalTime.textContent = newTime.toLocaleTimeString();
}, 1000);

