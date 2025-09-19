function pares(){
    let numeros = document.getElementById("numeros");
    //for para agregar numeros del 2 al 100
    // i++ es lo mismo que i = i +1
    //for(let i = 2; i<=100; i++)
    for(i = 2; i<=100; i = i + 2){
        console.log(i);
        let hr1 = document.createElement("hr");
        let numero = document.createElement("h2");
        numero.innerHTML = i;
        //if(i % 2 == 0){
            //numeros.appendChild(numero);
            //numeros.appendChild(hr1);
        //}
        numeros.appendChild(numero);
        numeros.appendChild(hr1);
    }
}