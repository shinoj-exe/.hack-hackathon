const bubble = document.querySelector(".bubble")



bubble.addEventListener("click",()=>{
    bubble.classList.add("pop" )
})

function yesnoCheck() {
    if (document.getElementById('organisation').checked) {
        document.getElementById('ifYes').style.visibility = 'visible';
    }
    else document.getElementById('ifYes').style.visibility = 'hidden';

} 