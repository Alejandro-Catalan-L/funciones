const img = document.getElementById("img")

let semaforo = true;
img.addEventListener("click", function(){
    if(semaforo == true){
        img.style.border = "3px solid blue"
        semaforo = false
    }else{
        img.style.border = "none"
        semaforo = true
    }
    console.log(semaforo)
})