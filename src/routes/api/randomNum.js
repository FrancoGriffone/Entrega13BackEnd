let numeros = [] //numeros aleatorios
let objetoNumeros = [] //el objeto con claves y valor (ejemplo: 1:0, primero el numero y segundo las veces que salió)

const generarNumeros = (i) =>{
    for(i=0; i<100000000; i++){
        numeros.push(parseInt(Math.random() * 1000 + 1));
    }    
    console.log(numeros);
    verificar();
}

const verificar = () => {
    let contador = 0;
    let indice;
    for (let j = 1; j <= 1000;){
        indice = numeros.indexOf(j)
        if (indice != -1){
            contador++
            numeros.splice(indice, 1);
        } else {
            objetoNumeros.push({[j]: contador});
        contador = 0;
        j++;
        }
    }
    console.log(JSON.stringify(objetoNumeros, null, 2));
};

generarNumeros();