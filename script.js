let toggleMenu = () => {
    let open = document.getElementById("menu");
    open.classList.toggle('open');
}
let clrRed = () => {
    document.body.style.backgroundColor = "red";
    document.getElementById("currentColor").innerHTML = "RED";
    toggleMenu()
}

let clrOrange = () => {
    document.body.style.backgroundColor = "orange";
    document.getElementById("currentColor").innerHTML = "ORANGE";
    toggleMenu()
}

let clrPurple = () => {
    document.body.style.backgroundColor = "purple";
    document.getElementById("currentColor").innerHTML = "PURPLE";
    toggleMenu()
}

let clrGreen = () => {
    document.body.style.backgroundColor = "green";
    document.getElementById("currentColor").innerHTML = "GREEN";
    toggleMenu()
}

let clrBlue = () => {
    document.body.style.backgroundColor = "blue";
    document.getElementById("currentColor").innerHTML = "BLUE";
    toggleMenu()
}

let home = () => {
    document.body.style.backgroundColor = "pink";
    document.getElementById("currentColor").innerHTML = "The home page";
    toggleMenu()
}

