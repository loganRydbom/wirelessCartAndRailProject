async function getData() {
    // TODO: Pull data from Supabase
    let dPosition = 0;
    let pos = 0;
    let com = 0;
    let sp = 0;

    localStorage.setItem("setpoint", sp)
    return [dPosition, pos, com]
}

async function updateData() {
    const [desiredPosition, position, command] = await getData();

    let desiredPositionValue = document.getElementById("desiredPosition")
    let positionValue = document.getElementById("position")
    let commandValue = document.getElementById("command")

}