const boton = document.querySelector("#boton")
const total = document.querySelector("#total")


boton.addEventListener("click", function(){
    let n1 =parseInt(document.querySelector("#cantidad1").value)
    let n2 =parseInt(document.querySelector("#cantidad2").value)
    let n3 =parseInt(document.querySelector("#cantidad3").value)
    let totall = n1 + n2 + n3
    if (totall <= 10){
      total.innerHTML = totall
      alert(totall)
    }
    else{
      total.innerHTML = "Tienes muchos  Stickers"
      alert("tienes muchos sticker")
    }
   })