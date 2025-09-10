function negativo(){
    let esnumeronegativo = document.getElementById("esnegativo");

    esnumeronegativo = parseInt(esnumeronegativo.value);

    if(esnumeronegativo < 0){
        alert("Es un numero negativo");
        console.log(esnumeronegativo, "comprobando");
    }else{
        alert("No es numero negativo");
         console.log(noesnumeronegativo, "comprobando");
    }
}

