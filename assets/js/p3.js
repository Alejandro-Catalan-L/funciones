const boton = document.querySelector("#boton")
const respuesta = document.querySelector("#respuesta")


boton.addEventListener("click", function(){
    let n1 =document.querySelector("#select1").value
    let n2 =document.querySelector("#select2").value
    let n3 =document.querySelector("#select3").value
    let cantidad = n1 + n2 + n3
    if (cantidad == '911'){
     
      respuesta.innerHTML = "Password 1 Correcto"

    }
    else if(cantidad == '714'){
      respuesta.innerHTML = "Password2  Correcto"
    }else{
      respuesta.innerHTML = "Password Incorrecto"
    }
   })
   