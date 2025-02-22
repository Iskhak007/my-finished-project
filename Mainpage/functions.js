let cube = document.querySelector('.about_us')
let about_us = document.querySelector('.about-us');
about_us.addEventListener("click", () => {
    let scrl = cube.offsetTop;
    scrl = Math.round(scrl)-70;
    window.scroll({
        top: scrl,
        behavior: "smooth"
    })
})
document.addEventListener('scroll', () => {
    let x = window.scrollY;
    let y = x/700;
    let dg = x
    let hed = document.querySelector('header');
    let op = 0;
    y = y*2
    if(op<1-y){
        op = 1-y;
    }
    x = x - 95;
    if(x<0){
        x = 0;
    }
    hed.style = `
        transform: translateY(${-x}px);
        opacity: ${op};
    `
    let eff = Math.round(x)
    if(eff%2==0){
        let lft = Math.random()*10000;
        lft = Math.round(lft);
        lft = lft%1300;
        let d = document.createElement("span");
        let pl = document.createElement("span");
        pl.style = `
            width: 150px;
            height: 25px;
            left: ${lft}px;
            top: 0px;
            position: absolute;
            animation: circ 6s alternate;
            z-index: -10000;
        `
        let nch = Math.random()*100;
        nch = Math.round(nch);
        let s = Math.round(Math.random()*10000);
        if(nch%2==0){
            d.style = `
                position: absolute;
                width: 25px;
                height: 25px;
                background-color: blue;
                filter: hue-rotate(${(s)%360}deg) blur(5px);
                left: 0px;
                border-radius: 50%;
                animation: zigzag 0.9s infinite alternate;
                top: 0px;
                z-index: -100000;
                border: 1px solid black;
            `
        }
        else{
            d.style = `
                position: absolute;
                width: 25px;
                height: 25px;
                background-color: pink;
                filter: hue-rotate(${(eff*30)%360}deg) blur(5px);
                right: 0px;
                border-radius: 50%;
                animation: zigzag2 0.9s infinite alternate;
                top: 0px;
                z-index: -100000;
                border: 1px solid black;
            `
        }
        pl.appendChild(d);
        document.body.append(pl);
        setTimeout(() => {
            pl.remove();
        },6000);
    }
})
let goods = document.querySelectorAll('.nouts');
let pict = document.querySelectorAll('.pecturess')
let blck = document.querySelector('.block');
goods.forEach((itm,id) => {
    let shiftleft = itm.offsetLeft;
    if(shiftleft>=680){
        pict.item(id).style = `
            transform: scale(0);
        `
    }
})
blck.addEventListener('scroll', (e) => {
    let leftSide = e.target.scrollLeft;
    goods.forEach((itm,id) => {
        let shiftleft = itm.offsetLeft;
        let leftMeas = shiftleft;
        shiftleft = shiftleft - leftSide
        if(shiftleft>=700 || shiftleft<=-250){
            pict.item(id).style = `
                transform: scale(0);
            `
        }
        else{
            pict.item(id).style = `
                transform: scale(1);
            `
        }
    })
})
goods.forEach((elem,ind) => {
    pict.item(ind).addEventListener('mouseenter', () => {
        pict.item(ind).style = `
            transform: scale(1.3);
            opacity: 1;
            border: 2px solid rgb(128, 52, 234); 
            cursor: pointer;
            box-shadow: 0 0 40px rgb(80, 40, 168);
        `
    })
    pict.item(ind).addEventListener('mouseleave', () => {
        pict.item(ind).style = `
            transform: scale(1);
            opacity: 0.85;
            border: 2px solid rgb(111, 111, 111);
            cursor: none;
        `
    })
});
/**<-----      cube unfinished */
let pit = document.querySelector(".pictures");
let an = document.querySelector(".an");
pit.addEventListener("mousemove",(event) => {
    let x = pit.getBoundingClientRect().left;
    x = Math.round(x);
    let mx = event.clientX;
    mx = mx-x;
    let len = pit.clientWidth;
    let dg = (mx*360)/len;
    an.style = `
        transform: rotateY(${dg}deg);
    `
})
// let buttonEffect = document.querySelector(".togoods");
// buttonEffect.addEventListener("mouseenter", () => {

// })