// const resultsList = document.getElementById('qsns')
//         new URLSearchParams(window.location.search).forEach((value,
//         name) => {
//             resultsList.append(`${name}: ${value}`)
//             resultsList.append(document.createElement('br'))
           
//         })

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

    if(document.getElementById('q6y').checked)
        {questAns.q6=document.getElementById('q6y').value}
    else questAns.q6=document.getElementById('q6n').value

    if(document.getElementById('q7y').checked)
        {questAns.q7=document.getElementById('q7y').value}
    else questAns.q7=document.getElementById('q7n').value

    if(document.getElementById('q8y').checked)
        {questAns.q8=document.getElementById('q8y').value}
    else questAns.q8=document.getElementById('q8n').value

    if(document.getElementById('q9y').checked)
        {questAns.q9=document.getElementById('q9y').value}
    else questAns.q9=document.getElementById('q9n').value

    if(document.getElementById('q10y').checked)
        {questAns.q10=document.getElementById('q10y').value}
    else questAns.q10=document.getElementById('q10n').value

    if(document.getElementById('q11y').checked)
        {questAns.q11=document.getElementById('q11y').value}
    else questAns.q11=document.getElementById('q11n').value

    if(document.getElementById('q12y').checked)
        {questAns.q12=document.getElementById('q12y').value}
    else questAns.q12=document.getElementById('q12n').value

    if(document.getElementById('q13y').checked)
        {questAns.q13=document.getElementById('q13y').value}
    else questAns.q13=document.getElementById('q13n').value

    if(document.getElementById('q14y').checked)
        {questAns.q14=document.getElementById('q14y').value}
    else questAns.q14=document.getElementById('q14n').value
    
    console.log(questAns)
    let countDepression=0;
    let countAnxiety=0;
    let countPersonality=0;
    let countPTSD=0;
    let countSchizophernia=0;
    var array = [];

    if(questAns.q1=='y')
    {
        countDepression++;    
        countAnxiety++;
    }
    if(questAns.q2=='y')
        countDepression++;
    if(questAns.q3=='y')
        countAnxiety++;
    if(questAns.q4=='y')
        countAnxiety++;
    if(questAns.q5=='y')
        countDepression++;
    if(questAns.q6=='y')
        countAnxiety++;
    if(questAns.q7=='y')
        countPersonality++;
    if(questAns.q8=='y')
        countPersonality++;
    if(questAns.q9=='y')
        countPTSD++;
    if(questAns.q10=='y')
        countSchizophernia++;
    if(questAns.q11=='y')
        countPTSD++;
    if(questAns.q12=='y')
        countPersonality++;
    if(questAns.q13=='y')
    {
        countPTSD++;
        countSchizophernia++;
    }
    if(questAns.q14=='y')
        countPersonality++;

    array[0]=countAnxiety;
    array[1]=countDepression;
    array[2]=countPTSD;
    array[3]=countPersonality;
    array[4]=countSchizophernia;
    
    array.sort(function(a,b){return a-b});
    console.log(array);
    console.log(countAnxiety,countDepression)



}
