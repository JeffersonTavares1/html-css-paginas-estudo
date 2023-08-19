/*colecionando o button*/
const bntMobile = document.getElementById("btn-mobile");

/**/
function toggleMenu(event) {
    
    /*aqui esta relacionado ao addEventListener(touchstart) deixa mais rápida do smartphone*/ 
    if (event.type == "touchstart") event.preventDefault();
    
    /*colecionando o bav*/
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    
    
    /*aqui esta relacionado a sensibilidade para cegos. pata nevagar com tab na página*/
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    
    /*aqui esta relacionado a sensibilidade para cegos*/
    if (active) {
        event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
        event.currentTarget.setAttribute("aria-label", "Abrir Menu");

    }
}

/*ao clicar ativa a função toggleMenu*/
bntMobile.addEventListener("click", toggleMenu);

/*aqui e pra fuciona melhor no mobile*/
bntMobile.addEventListener("touchstart", toggleMenu);



