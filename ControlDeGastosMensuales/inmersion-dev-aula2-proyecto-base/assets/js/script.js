let listaNombresGastos = [];
let listaValoresGastos = [];

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valosrGasto = document.getElementById('valorGasto').value;
    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valosrGasto);
    actualizarGastos();
}
function actualizarGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista= '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} 
        <button onclick= "eliminarGasto(${posicion});"> Eliminar </button> 
        </li>`;
        totalGastos += Number(valorGasto); 
    });
    listaElementos.innerHTML = htmlLista; 
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}
function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';   
}
function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    actualizarGastos();
}