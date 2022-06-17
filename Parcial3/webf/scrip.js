const formElement = document.getElementById("guardarPedido");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let cliente = document.getElementById("cliente").value;
    let cantidadpupusas = document.getElementById("cantidadpupusas").value;
    let cantidadbebidas = document.getElementById("cantidadbebidas").value;
    let costototal = document.getElementById("costototal").value;
    let pedido = {cliente:cliente, cantidadpupusas:cantidadpupusas, cantidadbebidas:cantidadbebidas, costototal:costototal}
    let pedidoJson = JSON.stringify(pedido);
    //Mandar pedido al Backend y guardarlos ahi
    fetch('http://localhost:3000/pedido',{
        method : 'Post',
        body : pedidoJson
    })
} )

fetch('http://localhost:3000/pedido').then(x => x.json()).then(console.log)