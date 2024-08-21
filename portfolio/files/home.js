const text = document.querySelector(".second-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "MUHAMMAD ANWAR";
    }, 0)
    setTimeout(() => {
        text.textContent = "HAFIZ-E-QURAN";
    }, 4000)
    setTimeout(() => {
        text.textContent = "FRONT-END WEB DEVELOPER";
    }, 8000)
}

textLoad();

setInterval(textLoad, 12000);