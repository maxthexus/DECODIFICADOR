const inputTexto = document.querySelector(".input-texto")
const mensagem = document.querySelector(".mensagem")

function btnCodificar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    if(inputTexto.value === ""){
        document.querySelector(".boneco").style.display = 'block'
        document.querySelector("h2.vazio").style.display = 'block'
        document.querySelector("p.vazio").style.display = 'block'
        mensagem.style.display = 'none'
        document.querySelector(".copiar").style.display = 'none'
        }else{
        document.querySelector(".boneco").style.display = 'none'
        document.querySelector("h2.vazio").style.display = 'none'
        document.querySelector("p.vazio").style.display = 'none'
        mensagem.style.display = 'block'
        document.querySelector(".copiar").style.display = 'block'
        }


}

//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"] , ["o","ober"] , ["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], 
                matrizCodigo[i][1])
        }
    }

    return stringEncriptada
}


function btnDecodificar(){
    const textoDecriptado = decriptar(inputTexto.value)
    mensagem.value = textoDecriptado
    if(inputTexto.value === ""){
        document.querySelector(".boneco").style.display = 'block'
        document.querySelector("h2.vazio").style.display = 'block'
        document.querySelector("p.vazio").style.display = 'block'
        mensagem.style.display = 'none'
        document.querySelector(".copiar").style.display = 'none'
        }else{
        document.querySelector(".boneco").style.display = 'none'
        document.querySelector("h2.vazio").style.display = 'none'
        document.querySelector("p.vazio").style.display = 'none'
        mensagem.style.display = 'block'
        document.querySelector(".copiar").style.display = 'block'
        }
    
}

function decriptar(stringDecriptada){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"] , ["o","ober"] , ["u","ufat"]]
    stringDecriptada = stringDecriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDecriptada.includes(matrizCodigo[i][1])){
           stringDecriptada = stringDecriptada.replaceAll(matrizCodigo[i][1], 
                matrizCodigo[i][0])
        }
    }

    return stringDecriptada
}

function btnCopiar(){

    navigator.clipboard.writeText(mensagem.value)

}