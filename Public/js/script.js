
function openNav() {
    const nav = document.getElementById('nav')
    nav.style.transform = "translateX(0%)";
}

function closeNav() {
    const nav = document.getElementById('nav')
    nav.style.transform = "translateX(100%)";
}

function navBg(){
    const header = document.getElementById('header')
    let scroll = window.scrollY;
    if(scroll>50)
    header.style.background="black"
    if(scroll ===0)
    header.style.background="transparent"
}