function updateSetpoint() {
    let setpoint = localStorage.getItem("setpoint");
    let sp = document.getElementById("setpoint");

    sp.textContent = setpoint;
}

function updateSetpoint() {
    let sp = document.getElementById("setpoint");

    sp.textContent = sp.textContent + 1
}