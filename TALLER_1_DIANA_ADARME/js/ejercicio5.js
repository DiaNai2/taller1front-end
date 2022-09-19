let a1 = document.getElementById("calarea1")
let p1 = document.getElementById("calperimetro1")
let a2 = document.getElementById("calarea2")
let p2 = document.getElementById("calperimetro2")
let a3 = document.getElementById("calarea3")
let p3 = document.getElementById("calperimetro3")
let a4 = document.getElementById("calarea4")
let p4 = document.getElementById("calperimetro4")
let total

function area(){
    let arc = document.getElementById("arc").value
    arc = parseInt(arc)
    total = (arc*arc)*3.14
    alert(total)
}
function area2(){
    let bt = document.getElementById("bt").value
    bt = parseInt(bt)
    let at = document.getElementById("at").value
    at = parseInt(at)
    total = (bt*at)/2
    alert(total)
}
function area3(){
    let br = document.getElementById("br").value
    br = parseInt(br)
    let ar = document.getElementById("ar").value
    ar = parseInt(ar)
    total = br*ar
    alert(total)
}

function area4(){
    let lc = document.getElementById("lc").value
    lc = parseInt(lc)
    total = lc*lc
    alert(total)
}


function perimetro(){
    let pec = document.getElementById("pec").value
    pec = parseInt(pec)
    total = 2*3.14*pec
    alert(total)
}
function perimetro2(){
    let l1 = document.getElementById("l1").value
    l1 = parseInt(l1)
    let l2 = document.getElementById("l2").value
    l2 = parseInt(l2)
    let l3 = document.getElementById("l3").value
    l3 = parseInt(l3)
    total = l1+l2+l3
    alert(total)
}
function perimetro3(){
    let br2 = document.getElementById("br2").value
    br2 = parseInt(br2)
    let ar2 = document.getElementById("ar2").value
    ar2 = parseInt(ar2)
    total = (br2*2)+(ar2*2)
    alert(total)
}
function perimetro4(){
    let lc2 = document.getElementById("lc2").value
   lc2 = parseInt(lc2)
    total = lc2*4
    alert(total)
}


a1.addEventListener('click',area)
a2.addEventListener('click',area2)
a3.addEventListener('click',area3)
a4.addEventListener('click',area4)
p1.addEventListener('click',perimetro)
p2.addEventListener('click',perimetro2)
p3.addEventListener('click',perimetro3)
p4.addEventListener('click',perimetro4)