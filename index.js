const perimetroDelCuadrado = (ladoDelCuadrado) => ladoDelCuadrado * 4;
const areaDelCuadrado = (ladoDelCuadrado) => ladoDelCuadrado * ladoDelCuadrado;

var calcularAreaCuadrado = () => {

    const ladoDelCuadrado = document.querySelector("#lado-cuadrado").value;
    const resultado = areaDelCuadrado(ladoDelCuadrado)
    document.querySelector("#resultado").innerHTML = resultado
}



// const ladoDelCuadrado = 6;
// const PI = 3.1416;
// let variableQueCambia
// const area = lado * lado;
// const perimetro = lado * 4;

// console.log(`Area: ${area}`);
// console.group({ area: area, perimetro: perimetro })






