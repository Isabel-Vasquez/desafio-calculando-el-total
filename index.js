let precio = 400000;

let precioSpan = document.querySelector('.precio-inicial');
precioSpan.innerHTML = precio;

const cantidadInput = document.querySelector('#input-id');
let cantidadValue = cantidadInput.value;

function masValue() {
	cantidadInput.value = ++cantidadValue;
	valorTotal();
	console.log(cantidadValue);
}

function restarValue() {
	if (cantidadValue > 0) {
		cantidadInput.value = --cantidadValue;
		valorTotal();
		console.log(cantidadValue);
	}
}

function valorTotal() {
	let valorTotalElement = document.querySelector('#valor-total');
	valorTotalElement.innerHTML = cantidadValue * precio;
}

document.getElementById('sumar').addEventListener('click', masValue);
document.getElementById('restar').addEventListener('click', restarValue);
