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


//function to show the input for organisation name only when organisation radio is on
function yesnoCheck() {
    if (document.getElementById('organisation').checked) {
        document.getElementById('ifYes').style.visibility = 'visible';
    }
    else document.getElementById('ifYes').style.visibility = 'hidden';
} 
