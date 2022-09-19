

let a1 = document.getElementById("a1");
let p1 = document.getElementById("p1");
let a2 = document.getElementById("a2");
let p2 = document.getElementById("p2");
let a3 = document.getElementById("a3");
let p3 = document.getElementById("p3");
let a4 = document.getElementById("a4");
let p4 = document.getElementById("p4");

//Acceder ventana modal
let ma1 = document.getElementById("ma1");
let mp1 = document.getElementById("mp1");
let ma2 = document.getElementById("ma2");
let mp2 = document.getElementById("mp2");
let ma3 = document.getElementById("ma3");
let mp3 = document.getElementById("mp3");
let ma4 = document.getElementById("ma4");
let mp4 = document.getElementById("mp4");

//Acceder al botón Cerrar de la ventana modal
let cma1 = document.querySelector("cma1");
let cmp1 = document.querySelector("cmp1");
let cma2 = document.querySelector("cma2");
let cmp2 = document.querySelector("cmp2");
let cma3 = document.querySelector("cma3");
let cmp3 = document.querySelector("cmp3");
let cma4 = document.querySelector("cma4");
let cmp4 = document.querySelector("cmp4");

a1.addEventListener("click", () => {
    ma1.style.display = "block";
})
p1.addEventListener("click", () => {
    mp1.style.display = "block";
})
a2.addEventListener("click", () => {
    ma2.style.display = "block";
})
p2.addEventListener("click", () => {
    mp2.style.display = "block";
})
a3.addEventListener("click", () => {
    ma3.style.display = "block";
})
p3.addEventListener("click", () => {
    mp3.style.display = "block";
})
a4.addEventListener("click", () => {
    ma4.style.display = "block";
})
p4.addEventListener("click", () => {
    mp4.style.display = "block";
})

//cerrar modal
cma1.addEventListener("click", () => {
    ma1.style.display = "none";
})
cmp1.addEventListener("click", () => {
    mp1.style.display = "none";
})
cma2.addEventListener("click", () => {
    ma2.style.display = "none";
})
cmp2.addEventListener("click", () => {
    mp2.style.display = "none";
})
cma3.addEventListener("click", () => {
    ma3.style.display = "none";
})
cmp3.addEventListener("click", () => {
    mp3.style.display = "none";
})
cma4.addEventListener("click", () => {
    ma4.style.display = "none";
})
cmp4.addEventListener("click", () => {
    mp4.style.display = "none";
})

//abrir
window.addEventListener("click", (e) => {
    if (e.target == ma1) {
        ma1.style.display = "none";
    }
})
window.addEventListener("click", (e) => {
    if (e.target == mp1) {
        mp1.style.display = "none";
    }
})
window.addEventListener("click", (e) => {
    if (e.target == ma2) {
        ma2.style.display = "none";
    }
})
window.addEventListener("click", (e) => {
    if (e.target == mp2) {
        mp2.style.display = "none";
    }
})
window.addEventListener("click", (e) => {
    if (e.target == ma3) {
        ma3.style.display = "none";
    }
})
window.addEventListener("click", (e) => {
    if (e.target == mp3) {
        mp3.style.display = "none";
    }
})
window.addEventListener("click", (e) => {
    if (e.target == ma4) {
        ma4.style.display = "none";
    }
})
window.addEventListener("click", (e) => {
    if (e.target == mp4) {
        mp4.style.display = "none";
    }
})