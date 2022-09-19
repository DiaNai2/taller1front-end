//longitud
let p =document.getElementById("palabra")
let b1=document.getElementById("longitud")
console.log("hooola"+p)
    function longitud(){
        let a = p.value.length
        alert(a)
    }


    b1.addEventListener('click', longitud)

//mayuscula
let ma =document.getElementById("palabra")
let b2 =document.getElementById("mayuscula")
console.log(ma)
    function mayuscula(){
        let b = ma.value.toUpperCase()
        alert(b)
    }


    b2.addEventListener('click', mayuscula)

//minuscula
let mi =document.getElementById("palabra")
let b3 =document.getElementById("minuscula")
console.log(mi)
    function minuscula(){
        let c = mi.value.toLowerCase()
        alert(c)
    }
    


//primera letra
let pl =document.getElementById("palabra")
let b4 =document.getElementById("pletra")
console.log(pl)
    function pLetra(){
        let d = pl.value.charAt(0)
        alert(d)
    }


    b4.addEventListener('click', pLetra)