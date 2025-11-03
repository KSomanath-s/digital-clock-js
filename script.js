
setInterval(() => {
    const digitalTime = document.querySelector("#digitalTime");
    const newTime = new Date();
    digitalTime.textContent = newTime.toLocaleTimeString();
}, 1000);

