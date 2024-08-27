const text = document.querySelector(".second-text");
const userName = "MUHAMMAD ANWAR";
const developer = "FRONT-END WEB DEVELOPER";

const textLoad = () => {
    setTimeout(() => {
        text.textContent = `${userName}`;
    }, 0)
    setTimeout(() => {
        text.textContent = `${developer}`;
    }, 4000)
}

textLoad();

setInterval(textLoad, 8000);


// function toggleNavbar() {
//     const navbar = document.getElementById('nav');
//     if (navbar.style.display === 'flex') {
//         navbar.style.display = 'none';
//     }
//     else {
//         navbar.style.display = 'flex';
//     }
// }