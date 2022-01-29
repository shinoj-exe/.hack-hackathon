/*const resultsList = document.getElementById('qsns')
        new URLSearchParams(window.location.search).forEach((value,
        name) => {
            resultsList.append(`${name}: ${value}`)
            resultsList.append(document.createElement('br'))
           
        })*/
var questAns = {};
function checkButtn(){
    if(document.getElementById('q1y').checked)
        {questAns.q1=document.getElementById('q1y').value}
    else questAns.q1=document.getElementById('q1n').value

    if(document.getElementById('q2y').checked)
        {questAns.q2=document.getElementById('q2y').value}
    else questAns.q2=document.getElementById('q2n').value


    if(document.getElementById('q3y').checked)
        {questAns.q3=document.getElementById('q3y').value}
    else questAns.q3=document.getElementById('q3n').value


    if(document.getElementById('q4y').checked)
        {questAns.q4=document.getElementById('q4y').value}
    else questAns.q4=document.getElementById('q4n').value



    if(document.getElementById('q5y').checked)
        {questAns.q5=document.getElementById('q5y').value}
    else questAns.q5=document.getElementById('q5n').value
    
    console.log(questAns)
    let countd=0;
    let counta=0;

    if(questAns.q1=='y')
        countd++;    
    if(questAns.q2=='y')
        countd++;
    if(questAns.q3=='y')
        counta++;
    if(questAns.q4=='y')
        counta++;
    if(questAns.q5=='y')
        countd++;

    if(countd>counta)
        console.log("chances of 1)depression 2)anxiety")
    else console.log("chances of 1)anxiety 2)depression")

    console.log(counta,countd)
}
