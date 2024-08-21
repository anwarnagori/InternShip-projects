const text = document.querySelector(".second-text");
const userName = "MUHAMMAD ANWAR";
const hafiz = "HAFIZ-E-QURAN";
const developer = "FRONT-END WEB DEVELOPER";

const textLoad = () => {
    setTimeout(() => {
        text.textContent = `${userName}`;
    }, 0)
    setTimeout(() => {
        text.textContent = `${hafiz}`;
    }, 4000)
    setTimeout(() => {
        text.textContent = `${developer}`;
    }, 8000)
}

textLoad();

setInterval(textLoad, 12000);