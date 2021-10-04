$(document).scroll(function() {

    let borderAnimation = document.getElementsByClassName("header")[0];
        
    if(window.scrollY > 150){
        borderAnimation.style.borderBottomWidth = "1px";
        borderAnimation.style.borderBottomStyle = "solid";
        borderAnimation.style.borderBottomColor = "#2980b9";
    }
    else{
        borderAnimation.style.borderBottom = "none";
    }
});

let myButton = document.getElementsByClassName("mobile-nav-trigger")[0];
let myMenuItem1 = document.getElementsByClassName("slideMenu1")[0];
let myMenuItem2 = document.getElementsByClassName("slideMenu2")[0];
let myMenuItem3 = document.getElementsByClassName("slideMenu3")[0];
let myMenuItem4 = document.getElementsByClassName("slideMenu4")[0];
let myMenuItem5 = document.getElementsByClassName("slideMenu5")[0];
let myMenuItem6 = document.getElementsByClassName("slideMenu6")[0];

myButton.addEventListener('click', activeMenuMobile);
myMenuItem1.addEventListener('click', activeMenuMobile);
myMenuItem2.addEventListener('click', activeMenuMobile);
myMenuItem3.addEventListener('click', activeMenuMobile);
myMenuItem4.addEventListener('click', activeMenuMobile);
myMenuItem5.addEventListener('click', activeMenuMobile);
myMenuItem6.addEventListener('click', activeMenuMobile);

function activeMenuMobile (){
    let menu = document.getElementById("ondeAmagicaAcontece");

    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    }
    else{
        menu.style.display = 'block';
    }
};

console.log(window.scrollY);
console.log(innerWidth);

const mobileBanner = document.getElementById("bannerTopo");
const bannerCarros = document.getElementById("bannerCarros");
const bannerBrasilEntregas = document.getElementById("bannerBrasil");
const vidrosAutomotivosImage = document.getElementById("vidrosAutomotivosImage");
console.log(vidrosAutomotivosImage.src);

if(innerWidth < 800){
    mobileBanner.src = "./mobile_images/capaMobile.jpg";
    bannerCarros.src = "./mobile_images/carrosMobile.jpg";
    bannerBrasilEntregas.src = "./mobile_images/0mapa.jpg";
    vidrosAutomotivosImage.src = "./mobile_images/corolla-cross-mobile.jpg";
};

$("#telefone").mask("(00) 00000-0000");

$('#email').mask("A", {
	translation: {
		"A": { pattern: /[\w@\-.+]/, recursive: true }
	}
});





