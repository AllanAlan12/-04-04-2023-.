function somar(){
    let numero1 = Number (document.querySelector ("#numero1").value)
    let numero2 = Number (document.querySelector ("#numero2").value)
   let resultado = numero1 + numero2
   document.querySelector("#resultado").value = resultado
}

function subtrair(){
    let numero1 = Number (document.querySelector ("#numero1").value)
    let numero2 = Number (document.querySelector ("#numero2").value)
   let resultado = numero1 - numero2
   document.querySelector("#resultado").value = resultado
}
function multiplicar(){
    let numero1 = Number (document.querySelector ("#numero1").value)
    let numero2 = Number (document.querySelector ("#numero2").value)
   let resultado = numero1 * numero2
   document.querySelector("#resultado").value = resultado
}

function dividir(){
    let numero1 = Number (document.querySelector ("#numero1").value)
    let numero2 = Number (document.querySelector ("#numero2").value)
    if (numero2 != 0){
   let resultado = numero1 / numero2
   document.querySelector("#resultado").value = resultado
}else {
    document.querySelector("#erroZero").innerText = "Não existe divisão por 0"
    document.querySelector("#resultado").value = " "
}
}
function apagaErro(){
    document.querySelector("erroZero").innerText=" "
}

function Limpar(){
    document.querySelector("#erroZero").innerText = ""
    document.querySelector("#resultado").value = ""
    document.querySelector("#numero1").value = ""
    document.querySelector("#numero2").value = ""
}