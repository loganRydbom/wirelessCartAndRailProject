async function getData() {
    // TODO: Pull data from Supabase
    let dPosition = 0;
    //let dPositon = await [...] (where ... is pulling from supabase)
    let pos = 0;
    //let pos = await [...] (where ... is pulling from supabase)
    let com = 0;
    //let com = await [...] (where ... is pulling from supabase)
    let sp = 0;
    //let sp = await [...] (where ... is pulling from supabase)

    localStorage.setItem("setpoint", sp)
    return [dPosition, pos, com]
}

function updateData() {
    const [desiredPosition, position, command] = getData();

    let desiredPositionValue = document.getElementById("desiredPosition")
    let positionValue = document.getElementById("position")
    let commandValue = document.getElementById("command")

}