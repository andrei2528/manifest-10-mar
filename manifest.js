const popUp = document.getElementById("popUp");
const blur = document.getElementById("blur");
const btn = document.getElementsByClassName("btncont");
const headerBtn = document.getElementsByClassName("icons8-menu");
const page = document.getElementsByClassName("page");
console.log(popUp);

btn[1].addEventListener("click", () => {

    popUp.style.visibility = 'visible';



})
const popUpInregistrare = document.getElementsByClassName("popUp");

btn[0].addEventListener("click", () => {

    popUpInregistrare[0].style.visibility = 'visible';
})
const closePopUpInregistrare = document.getElementsByClassName("closePopUp");
closePopUpInregistrare[0].addEventListener("click", () => {
    popUpInregistrare[0].style.visibility = 'hidden';

    document.getElementById("header").classList.toggle("active");


})

const closePopUp = document.getElementById("closePopUp");
closePopUp.addEventListener("click", () => {
    popUp.style.visibility = 'hidden';
    blur.classList.toggle('active');


})

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}