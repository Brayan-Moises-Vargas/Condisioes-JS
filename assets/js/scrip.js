/*Primer ejercicio */
let imagen = document.getElementById("Imagenbrayan")

let borde =  document.getElementById("Imgenbrayan").style.border= "5px solid red"
let addborde = borde
function border(){
    if(addborde){
        document.getElementById("borde").innerHTML= ""
    }
        else{
            document.getElementById("borde").innerHTML="5px solid red"
        }

}
imagen.addEventListener("click", border)

 


/* Segundo ejercicio 2*/
let boton= document.getElementById("boton")

function botontotal () {
    let input1= document.getElementById("input1").value
    let input2= document.getElementById("input2").value
    let input3= document.getElementById("input3").value
    let input4= document.getElementById("input4").value

    let total= parseInt(input1) + parseInt(input2) + parseInt(input3) + parseInt(input4)
    
    if(total <= 10){
        document.getElementById("resultado").innerHTML= "llevas " + total
    } 
    
    else{
        document.getElementById("resultado").innerHTML= "llevas demasiados stiker"
   }
   
}

boton.addEventListener("click" , botontotal)


/*Tercer ejercicio */
/* */
let button= document.getElementById("button")

function probando(){
    let inputa= document.getElementById("inputa").value
    let inputb= document.getElementById("inputb").value
    let inputc= document.getElementById("inputc").value

let valor = inputa

    if(valor === "7" && inputb ==="1" && inputc==="4"){
        document.getElementById("probando").innerText="Correcto"
    }
    else if (valor === "9" && inputb ==="1" && inputc === "1"){
        document.getElementById("probando").innerText="Correcto"
    }
    else{
        document.getElementById("probando").innerText="Incorrecto"
    }

}

button.addEventListener("click" , probando)


    /* (estaba probando esto :D)

    let valorb = inputb
    
    if(valorb === "1"){
        document.getElementById("probando").innerText="Correcto"
}
else{
    document.getElementById("probando").innerText="Incorrecto"
}
let valorc = inputc 

if(valorc === "4"){ 
   document.getElementById("probando").innerText="Correcto"
}
else{
   document.getElementById("probando").innerText="Incorrecto"
}

*/

