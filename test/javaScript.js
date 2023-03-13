function log(msg) {
    const logElem = document.querySelector(".log");
  
    const time = new Date();
    const timeStr = time.toLocaleTimeString();
    logElem.innerHTML += `${timeStr}: ${msg}<br/>`;
}
  
log("Logging mouse events inside this container…");

function logEvent(event) {
    const msg = `Event <strong>${event.type}</strong> at <em>${event.clientX}, ${event.clientY}</em>`;
    log(msg);
}

const boxElem = document.querySelector(".box");

boxElem.addEventListener("mousedown", logEvent);
boxElem.addEventListener("mouseup", logEvent);
boxElem.addEventListener("click", logEvent);
boxElem.addEventListener("mouseenter", logEvent);
boxElem.addEventListener("mouseleave", logEvent);
