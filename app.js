let hora = document.querySelector('h1');
hora.innerHTML = ('Hora del Reto')

function clicado(){
    alert("Mirar la consola")
    console.log("El botón fue clícado")
}
function pron () {
    let ciudad;
    ciudad = prompt(" Ingrese el nombre de una ciudad en Colombia")
    alert(`Estuve en la ${ciudad} y me acorde de ti`)
}

function amojs (){
    alert('Yo amo JS')
}

function sum(){
    let num1;
    let num2;
    let suma;
    num1 = parseInt(prompt("ingrese el primer numero"))
    num2 = parseInt(prompt("ingrese el segundo numero "))
    suma = num1 + num2;
    
    alert(`La suma da ${suma}`)
}


