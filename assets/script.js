function acao(){
    // Variaveis de altura e peso
    let altura = parseInt(document.querySelector(".altura").value)
    let peso = parseInt(document.querySelector(".peso").value)
    
    // Resultado
    altura /=100
    let total = peso / (altura * altura)

    document.querySelector(".resultado").innerHTML = `IMC: ` + total.toFixed(2)

    if(isNaN(altura) || isNaN(peso)) { //Verifica se esta vazio
        alert("Valores Inválidos")    
    }else if(total.toFixed(2) <= 18){ //Abaixo do peso
        // Inserindo a cor
        document.querySelector(".baixoPeso").style.background = "#83C635"

        // Resetando as outras cores
        document.querySelector(".normal").style.background = ""
        document.querySelector(".sobrepeso").style.background = ""
        document.querySelector(".obesidade").style.background = ""
        
        // Resetando o valor do input
        document.querySelector(".altura").value = ""
        document.querySelector(".peso").value = ""
    }else if(total.toFixed(2) >= 18.5 && total.toFixed(2) <= 24.99){ //Pesso normal
        // Inserindo a cor 
        document.querySelector(".normal").style.background = "#C0D90B" 

        // Resetando as outras cores
        document.querySelector(".baixoPeso").style.background = ""
        document.querySelector(".sobrepeso").style.background = ""
        document.querySelector(".obesidade").style.background = ""
        
        // Resetando o valor do input
        document.querySelector(".altura").value = ""
        document.querySelector(".peso").value = ""
    }else if(total.toFixed(2) >= 25 && total.toFixed(2) <= 29.99){ //Sobrepeso
        // Inserindo a cor
        document.querySelector(".sobrepeso").style.background = "#FCA500"

        // Resetando as outras cores
        document.querySelector(".baixoPeso").style.background = ""
        document.querySelector(".normal").style.background = ""
        document.querySelector(".obesidade").style.background = ""

        // Resetando o valor do input
        document.querySelector(".altura").value = ""
        document.querySelector(".peso").value = ""
    }else if(total.toFixed(2) >= 30){ //Obesidade
        // Inserindo a cor
        document.querySelector(".obesidade").style.background = "#F67600"

        // Resetando as outras cores
        document.querySelector(".baixoPeso").style.background = ""
        document.querySelector(".normal").style.background = ""
        document.querySelector(".sobrepeso").style.background = ""

        // Resetando o valor do input
        document.querySelector(".altura").value = ""
        document.querySelector(".peso").value = ""
    }else if(total.toFixed(2) <= 0){ //Verifica se é menor que zero
        alert("Valores Inválidos")  
    }

}