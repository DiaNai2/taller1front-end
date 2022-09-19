let boton = document.getElementById("validar")

function profesores(){
    let s1 = document.getElementById("nom").value
    s1 = parseInt(s1)
    let s2 = document.getElementById("ape").value
    s2 = parseInt(s2)
    let s3 = document.getElementById("mat").value
    s3 = parseInt(s3)

    if(s1==1 && s2==1 && s3==1 ){
        alert("usted es Tatiana Cabrera y es instructora de JavaScript")
    }
    else if(s1==2 && s2==2 && s3==2 ){
        alert("usted es Adriana Duarte y es instructora de Diseño")
    }
    else if(s1==3 && s2==3 && s3==3 ){
        alert("usted es Jhonatan Espitica y es instructor de PHP")
    }
    else if(s1==4 && s2==4 && s3==4 ){
        alert("usted es Fernando Galindo y es instructor de Base de datos")
    }
    else {
        alert("Los datos no coinciden")
    }
}

boton.addEventListener('click',profesores)