let box = document.querySelector('.chosen');
let bx = document.querySelectorAll('.skin');
let nxt = document.querySelectorAll('.next');
let bck = document.querySelectorAll('.back');
let show = document.querySelector('.opreg');
let swit = 0;
let sur = document.querySelector('.survey');
// show.addEventListener("click",() => {
//     if(swit==0){
//         sur.classList.add("on");
//         sur.classList.remove("off");
//         swit = 1;
//     }
//     else{
//         sur.classList.remove("on");
//         sur.classList.add("off");
//         swit = 0;
//     }
// })
nxt.forEach((item,id) => {
    item.addEventListener("click",() => {
        bx.forEach((itt,ind) => {
            itt.classList.remove("chosen");
            if(ind==id+1){
                itt.classList.add("chosen");
            }
        })
    })
})
bck.forEach((item,id) => {
    item.addEventListener("click",() => {
        bx.forEach((itt,ind) => {
            itt.classList.remove("chosen");
            if(ind==id){
                itt.classList.add("chosen");
            }
        })
    })
})
// bx.forEach((item,id) => {
//     bx[id].addEventListener("click",(el) => {
//         if(item.classList.contains("chosen")){
//             console.log("Yeah");
//         }
//         else{
//             bx.forEach((it) => {
//                 it.classList.remove("chosen");
//             })
//             item.classList.add("chosen")
//             console.log("Nope");
//         }
//     })
// })