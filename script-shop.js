var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle(){
    if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight = "350px";
    }
    else
    {
        MenuItems.style.maxHeight = "0px";
    }
}

function menutoggle2(){
    MenuItems.style.maxHeight = "0px";
}

