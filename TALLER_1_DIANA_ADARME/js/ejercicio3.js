let calcular = document.getElementById("calcular")

function triangulos(){
    let l1 = document.getElementById("valor1").value
    l1 = parseInt(l1)
    let l2 = document.getElementById("valor2").value
    l2 = parseInt(l2)
    let l3 = document.getElementById("valor3").value
    l3 = parseInt(l3)

    if(l1==l2 && l2==l3 ){

        alert("Es un triángulo equilatero")
    }
    else if(l1==l2 || l1==l3 || l2==l3){
   
        alert("Es un triángulo isosceles")
    }   
    else if(l1!=l2 && l2!=l3 ){
   
        alert("Es un triángulo escaleno")
    }
    else{
        alert('error 34')
    }
}

calcular.addEventListener('click',triangulos)