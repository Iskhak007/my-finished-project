let makeShort = document.querySelectorAll("h2");
makeShort.forEach((item) => {
    let texT = item.textContent;
    let changeText = "";
    let length = texT.length
    if(length>50){
        for(let i = 0;i < 50;i++){
            changeText = changeText + texT[i]
        }
        changeText = changeText + "...";
        item.textContent = changeText
    }
})
let hed = document.querySelector(".search");
let ch = 0;
window.addEventListener("scroll", () => {
    let y = window.scrollY;
    if(y==0){
        ch = 0;
    }
    if(ch==0){
        y = -140-y;
        if(y<-240){
            y = -240;
        }
        hed.style = `
            margin-top: ${y}px;
            opacity: 1;
        `
    }
    else{
        hed.style = `
            transition: 0.3s all linear;
            margin-top: -140px;
            opacity: 0.8;
        `
    }
})
document.body.addEventListener("click", () => {
    ch = ch + 1;
    ch = ch%2;
    if(ch==1){
        let ef = window.scrollY;
        hed.style = `
            transition: 0.3s all linear;
            margin-top: -140px;
        `
    }
    else{
        let y = window.scrollY;
        y = -140-y;
        if(y<-240){
            y = -240;
        }
        hed.style = `
            margin-top: ${y}px;
        `
        hed.style = `
            transition: 0.3s all linear;
            margin-top: ${y}px;
        `
    }
})
let adClick = document.querySelectorAll(".images");
