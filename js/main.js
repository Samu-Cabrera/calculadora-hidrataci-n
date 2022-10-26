const resul = document.getElementById('resul');
const resul2 = document.getElementById('resul2');
const peso = document.getElementById('peso');
const botonCalcular = document.getElementById('calcular');

/**
 * Válida los datos y ejecuta la función calcularFlujo
 */
botonCalcular.addEventListener('click', () => {
    const pesokg = parseInt(peso.value);
    
    if(peso.value === ""){
        resul.innerHTML = 'Ingrese el peso ☹️';
        resul2.innerHTML = '';

    } else {

        if(pesokg > 0){
            resul.innerHTML = `${calcularFlujo(pesokg)[0]} cc/hr`;
            resul2.innerHTML = `m+m/2 <span class="mant__Medio">${calcularFlujo(pesokg)[1]}</span> cc/hr`;
        }else {
            resul.innerHTML = `El peso debe ser mayor a 0 😊`;
            resul2.innerHTML = '';
        }
    }
    if(peso.value > 100){
        resul.innerHTML = 'Error!!!🧐';
        resul2.innerHTML = '';
    }
})

/**
 * Calcula la cantidad de líquidos  
 */
calcularFlujo = (peso) => {
    let resul = 0, mantenimiento = 0, mantenimientoMedio = 0;

    if(peso < 11){
        mantenimiento = (resul = peso * 100) / 24;
        mantenimientoMedio  = mantenimiento * 1.5;
    } else if(peso <= 20){
        mantenimiento = resul = (((peso - 10) * 50) + 1000) / 24;
        mantenimientoMedio = Math.round(mantenimiento * 1.5);
    } else if(peso <= 30){
        mantenimiento = resul = (((peso - 20) * 20) + 1500) / 24;
        mantenimientoMedio = mantenimiento * 1.5
    } else {
        mantenimiento = resul = (((peso * 4) + 7) / (peso + 90)) * 1500;
        mantenimientoMedio = resul = Math.round(mantenimiento / 24);
    }
    return [Math.round(mantenimiento), Math.round(mantenimientoMedio)];
}
