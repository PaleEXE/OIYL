var list = document.getElementById("list3");
var menu = document.getElementById("menu1");
var k = 1;
menu.addEventListener("click", ()=>{
    if (k % 2 === 1){  
        list.classList.add("list-menu");
        console.log(1)
    }
    else{
        list.classList.remove("list-menu");
    }
    k++;
})

