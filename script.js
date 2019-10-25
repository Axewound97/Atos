function calcular_imc() {
    var nro_peso = Number(document.getElementById('peso').value);
    var nro_altura = Number(document.getElementById('altura').value);
    var resultado = Math.round(nro_peso / (nro_altura*nro_altura))
    var el_query = document.querySelector('.calculo')
    if (resultado <18.5){
        
    }
    if (resultado >= 18.5 && resultado <= 24){
        el_query.innerHTML="Tu IMC es: "+resultado+"<br>Tu nivel de peso es<br>SALUDABLE"
    }

}