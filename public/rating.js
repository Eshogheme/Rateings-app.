"use strict";
const firstLi = document.querySelector("#li-1");
const secondLi = document.querySelector("#li-2");
const thirdLi = document.querySelector("#li-3");
const fourthLi = document.querySelector("#li-4");
const fifthLi = document.querySelector("#li-5");
const btn = document.querySelector("#btn");
const page2 = document.querySelector("section");
const contentPara = document.querySelector("#content-para");
console.log(btn);
firstLi.addEventListener("click", (e) => {
    if (firstLi.textContent === "1") {
        firstLi.classList.add("active-li");
        secondLi.classList.remove("active-li");
        thirdLi.classList.remove("active-li");
        fourthLi.classList.remove("active-li");
        fifthLi.classList.remove("active-li");
    }
});
secondLi.addEventListener("click", (e) => {
    if (secondLi.textContent === "2") {
        secondLi.classList.add("active-li");
        firstLi.classList.remove("active-li");
        thirdLi.classList.remove("active-li");
        fourthLi.classList.remove("active-li");
        fifthLi.classList.remove("active-li");
    }
});
thirdLi.addEventListener("click", (e) => {
    if (thirdLi.textContent === "3") {
        thirdLi.classList.add("active-li");
        secondLi.classList.remove("active-li");
        firstLi.classList.remove("active-li");
        fourthLi.classList.remove("active-li");
        fifthLi.classList.remove("active-li");
        console.log(thirdLi.textContent);
    }
});
fourthLi.addEventListener("click", (e) => {
    if (fourthLi.textContent === "4") {
        fourthLi.classList.add("active-li");
        firstLi.classList.remove("active-li");
        thirdLi.classList.remove("active-li");
        secondLi.classList.remove("active-li");
        fifthLi.classList.remove("active-li");
        console.log(fourthLi.textContent);
    }
});
fifthLi.addEventListener("click", (e) => {
    if (fifthLi.textContent === "5") {
        fifthLi.classList.add("active-li");
        secondLi.classList.remove("active-li");
        thirdLi.classList.remove("active-li");
        fourthLi.classList.remove("active-li");
        firstLi.classList.remove("active-li");
        console.log(fifthLi.textContent);
    }
});
btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (firstLi.classList.contains("active-li")) {
        page2.style.display = "block";
        contentPara.innerText = `You selected  ${firstLi.textContent}  out of 5`;
    }
    else if (secondLi.classList.contains("active-li")) {
        page2.style.display = "block";
        contentPara.innerText = `You selected  ${secondLi.textContent}  out of 5`;
    }
    else if (thirdLi.classList.contains("active-li")) {
        page2.style.display = "block";
        contentPara.innerText = `You selected  ${thirdLi.textContent}  out of 5`;
    }
    else if (fourthLi.classList.contains("active-li")) {
        page2.style.display = "block";
        contentPara.innerText = `You selected  ${fourthLi.textContent}  out of 5`;
    }
    else if (fifthLi.classList.contains("active-li")) {
        page2.style.display = "block";
        contentPara.innerText = `You selected  ${fifthLi.textContent}  out of 5`;
    }
    else {
        page2.style.display = "block";
        contentPara.innerText = "no selections were made";
    }
    console.log("clicked");
});
