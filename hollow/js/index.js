var list = document.getElementById("list3");
var menu = document.getElementById("menu1");
var k = 0;
menu.addEventListener("click", ()=>{
    if (k % 2 === 1){  
        list.classList.add("list-menu");
    }
    else{
        list.classList.remove("list-menu");
    }
    k++;
})