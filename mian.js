let element=document.querySelectorAll('ul li');
console.log(element);
element.forEach(e => {
    e.onclick =() => {
        element.forEach(e => e.classList.remove("active"));
        e.classList.add("active");
    };
});
// let footer = document.getElementsByClassName("footer");
// console.log(footer);
let y=document.getElementById("h");
console.log(y);
let x=document.getElementsByClassName("iPhone")
console.log(x)
function phone(z){
    let a = getComputedStyle(z);
    // console.log(a);
    let b=a.color;
    // console.log(b)
    y.src=z.src;
    document.querySelector("body").style.backgroundColor=b;
    // document.getElementById("h").style.backgroundImage=y
};

// console.log(document.querySelectorAll("img"));