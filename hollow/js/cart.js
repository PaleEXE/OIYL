var x = document.getElementById("cvv");
var pale = document.getElementById("pale");
var btn = document.getElementById("btn1");
var k = 0
btn.addEventListener("click", ()=>{
    if (x.value === "7122004"){      
        pale.innerHTML = "Majd"
    }
    if (x.value === "toto"){
        pale.innerHTML = "Tala"
    }
})