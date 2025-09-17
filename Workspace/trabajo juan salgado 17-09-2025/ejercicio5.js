function nombres() {
    let container = document.getElementById("texto");
    container.innerHTML = "";
    let lista = ["Andrea ", "Dylan ", "Juan Jose ", "Andres ", "Johanna ", "Jeronimo ", "Miguel"];
    for (let i = 0; i < 7; i++) {
        let span = document.createElement("span");
        span.innerHTML = lista[i];
        container.appendChild(span);
    }
}