//Declaración de variables para las cajas de texto

const textArea = document.querySelector(".text-area");
const areaEncriptada = document.querySelector(".area-encriptada");
const contenido = document.querySelector(".zonaTextoEncriptadoContenedor");
const btonCopiar = document.querySelector(".boton-copiar");

//Declaración de función de encriptado

function encriptar(stringEncriptado){
    //Matriz de arreglos
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase(); 

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

//Declaración de función de desencriptado

function desencriptar(stringDesencriptado){
    //Matriz de arreglos
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase(); //toLowerCase convierte todas las letras en minusculas (o eso entendi)

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

//Declaración de funcionamiento de botones

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    areaEncriptada.value = textoEncriptado;
    textArea.value = "";
    contenido.remove();
    btonCopiar.style.visibility = "inherit";
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    areaEncriptada.value = textoEncriptado;
    textArea.value = "";
    contenido.remove();
    btonCopiar.style.visibility = "inherit";
}

btonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = areaEncriptada;
    copiar.select();
    document.execCommand("copy");
});