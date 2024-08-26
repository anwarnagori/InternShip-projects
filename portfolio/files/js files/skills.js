// const options = document.querySelectorAll("label");

// function skillsPoll() {
//     for (let i = 0; i < options.length; i++) {
//         options[i].addEventListener("click", () => {
//             for (let j = 0; j < options.length; j++) {
//                 if (options[j].classList.contains("selected"));
//                 else {
//                     options[j].classList.remove("selected");
//                 }
//             }
//         })
//         options[i].classList.add("selected");
//         for (let k = 0; k < options.length; k++) {
//             options[k].classList.add("selected");
//         }
//         let forVail = options[i].getAttribute("for");
//         let selectInput = document.querySelector("#" + forVail);
//         let getAtt = selectInput.getAttribute("type");

//         if (getAtt == "checkbox") {
//             selectInput.getAttribute("type", "radio");
//         }
//         else if (selectInput.checked == true) {
//             options[i].classList.remove("selected");
//             selectInput.setAttribute("type", "checkbox");
//         }

//         let array = [];

//         for (let i = 0; i < options.length; i++) {
//             if (options[i].classList.contains("selected")) {
//                 array.push(1);
//             }
//         }
//         if (array.length == 0) {
//             for (let m = 0; m < options.length; m++) {
//                 options[m].removeAttribute("class");
//             }
//         }
//     }
// }

// skillsPoll();