var lst = document.getElementsByClassName("in-item");
var pale = document.getElementById("pale");
var btn = document.getElementById("btn1");
btn.addEventListener("click", ()=>{
    if (document.getElementById("inp2").value === "🌚"){      
        pale.innerHTML = "🌝"
    }else if (document.getElementById("inp2").value === "نسم"){      
        pale.innerHTML = "Majd"
    }
    else if (document.getElementById("inp2").value === "toto"){
        pale.innerHTML = "Tala"
    } else {
        pale.innerHTML = "Pale"
    }
    for(let i = 0; i < lst.length; i++){
        let v = document.getElementById("inp" + i.toString());
        if (v.value == ""){
            v.style.backgroundColor = "#ffc4c469"
        } else {
            v.style.backgroundColor = "#ffe4c469"
        }
        
    }
})