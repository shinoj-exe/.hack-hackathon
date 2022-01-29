// const resultsList = document.getElementById('qsns')
//         new URLSearchParams(window.location.search).forEach((value,
//         name) => {
//             resultsList.append(`${name}: ${value}`)
//             resultsList.append(document.createElement('br'))
           
//         })


const formResult = document.getElementById("form-results");

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

    for(var i=0;i<array.length;i++){
        gfg[i]=new array
    }
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
    
    // array.sort(function(a,b){return a-b});


    console.log(array);
    console.log(countAnxiety,countDepression)

    console.log(array[array.length-1]);

    console.log(array);

    var issues =["anxiety","depression","personality_disorder","PTSD","Schizophrenia"]
    var temp;

    for(var i=0;i<array.length;i++)
    {
        for(var j=0;j<array.length-i-1;j++)
        {
            if(array[j]>array[j+1])
            {
                temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;

                temp=issues[j];
                issues[j]=issues[j+1];
                issues[j+1]=temp;
            }
        }
    }

    var sum=0,percentage1,percentage2;

    for( var k=0;k< array.length;k++)
    {
        sum=sum+array[k];
    }

    percentage1 =(array[array.length-1])/sum;
    percentage2 = (array[array.length-2]/sum);

    percentage1 =percentage1.toFixed(2);
    percentage2 =percentage2.toFixed(2);

    
    console.log(issues);
    console.log(array);
    console.log(sum);



    function showResult(){
    const formResult = document.getElementById("form-results");

        const result = document.createElement("div")

        result.innerHTML=`
        <div class="result-title">
        <h1>HERE IS OUR ANALYSIS FROM THE GIVEN INFORMATION</h1>
    </div>
    <div class="result-content">
        According to the info you have provided to us, we have come to a conclusion that you might be suffering from <span>${issues[issues.length-1]}(${percentage1}%)</span> or <span>${issues[issues.length-2]}(${percentage2}%)</span>.
        We are here to help you with some free resources on these issues please do go through them and do the required.
    </div>
    <div class="result-resources">
        <div class="resource-1">
            <a href="issues/${issues[issues.length-1]}.html"><button>${issues[issues.length-1]}</button></a>
        </div>
        <div class="resource-2">
            <a href="issues/${issues[issues.length-2]}.html"><button>${issues[issues.length-2]}</button></a>
        </div>
    </div>

    <div class="result-ngo">
        We will also be providing the information provided by you to NGO's that are willing to support you. 
    </div>
        `

        formResult.appendChild(result);
    }

    showResult();
}

