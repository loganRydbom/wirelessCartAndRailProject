function updateSetpoint() {
    let setpoint = localStorage.getItem("setpoint");
    let sp = document.getElementById("setpoint");

    sp.textContent = setpoint;
}

function increaseSetpoint() {
    let spValue = Number(document.getElementById("setpoint").textContent);
    let sp = document.getElementById("setpoint");

    if (spValue < 32) {
        sp.innerHTML = (spValue + 1);
        console.log("[SETPOINT] User adjusted setpoint to:", spValue);
    } else {
        console.log("[ERROR] User attempted to set setpoint above threshold");
    }
    // Should update in database afterwards (when the script on the server is done)
}

function decreaseSetpoint() {
    let spValue = Number(document.getElementById("setpoint").textContent);
    let sp = document.getElementById("setpoint");

    if (spValue > 2) {
        sp.textContent = (spValue - 1);
        console.log("[SETPOINT] User adjusted setpoint to:", spValue);
    } else {
        console.log("[ERROR] User attempted to set setpoint below threshold");
    }
    // Should update in database afterwards (when the script on the server is done)
}