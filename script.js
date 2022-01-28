const bubbles = document.querySelectorAll(".bubble")

// bubbles.addEventListener("click",()=>{
//     bubbles.forEach(bubble =>{
//         bubble.classList.add("pop")
//     })
// })

bubbles.forEach(bubble =>{
    bubble.addEventListener("click",()=>{
        bubble.classList.add("pop")
    })
})