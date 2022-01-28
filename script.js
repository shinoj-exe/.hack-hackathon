// // const bubbleNames = document.querySelectorAll(".bubble-content")
// const bubbleNames =document.getElementsByClassName("buble-content")
// const bubbles = document.querySelectorAll(".bubble")
// const close = document.querySelector(".popup-button")
// const popups = document.querySelectorAll(".popup")



// bubbles.addEventListener("click",()=>{
//     bubbles.forEach(bubble =>{
//         bubble.classList.add("pop")
//     })
// })

// bubbleNames.forEach(bubbleName =>{
//     bubbleName.addEventListener("click",()=>{
//         bubbles.forEach(bubble =>{
//             bubble.classList.add("pop")
//         })

//     })
// })

const bubbles = document.querySelectorAll(".bubble")

bubbles.forEach(bubble =>{
    bubble.addEventListener("click",()=>{
        bubble.classList.toggle("pop")
    })
})