//peso x altura al cuadrado 


function calcular() {
    var a= document.getElementById("altura").value;
    var p= document.getElementById("peso").value;

    var imc = parseFloat(p)/(parseFloat(a)**2);
    var oms = "";
    var resultado= "";


    if (imc < 18.5){
        oms= "Bajo peso "
        resultado="Delgado"
    }
    else if (imc >= 18.5 && imc <=24.9){
        oms= "Adecuado"
        resultado="Aceptable"
    }
    else if (imc >= 25.0 && imc <=29.9){
        oms= "Sobrepeso"
        resultado="Sobrepeso"
    }
    else if (imc >= 30.0 && imc <=34.9){
        oms= "Obesidad grado 1"
        resultado="Obesidad"
    }
    else if (imc >= 35.0 && imc <=39.9){
        oms= "Obesidad grado 2"
        resultado="Obesidad"
    }
    else if (imc >= 40){
        oms= "Obesidad grado 3"
        resultado="Obesidad"
    }
                                       
    document.getElementById("texto").innerHTML=("su IMC es " + Math.round(imc*100)/100 + " OMS: "+ oms + " Resultado: " + resultado);            
    colorizar(resultado);
}
function colorizar(resultado) {
    var form = document.getElementById("imcform");
    form.className = "form"; 
    form.classList.add(resultado); 

}

