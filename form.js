// const resultsList = document.getElementById('qsns')
//         new URLSearchParams(window.location.search).forEach((value,
//         name) => {
//             resultsList.append(`${name}: ${value}`)
//             resultsList.append(document.createElement('br'))
           
//         })
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
  //import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAFFfP-Ej3KtxQ3DU-dMkiuRshCF-JYF84",
    authDomain: "myusers-b76f0.firebaseapp.com",
    databaseURL: "https://myusers-b76f0-default-rtdb.firebaseio.com",
    projectId: "myusers-b76f0",
    storageBucket: "myusers-b76f0.appspot.com",
    messagingSenderId: "721621691724",
    appId: "1:721621691724:web:565a138d6e8d9ed59fb3e9",
    measurementId: "G-RLCNGWEE0Z"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  import {getDatabase, ref, set, child, update, remove}
  from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";
  const db=getDatabase();
  var uname=document.getElementById("uname");
  var age=document.getElementById("age");
  var address=document.getElementById("address");
  var btn=document.getElementById("btn");

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


    set(ref(db, "users/"+ uname.value),{
        Name:uname.value,
        Age: age.value,
        address: address.value,
        q1:questAns.q1,
        q2: questAns.q2,
        q3: questAns.q3,
        q4: questAns.q4,
        q5: questAns.q5,
        q6: questAns.q6,
        q7: questAns.q7,
        q8: questAns.q8,
        q9: questAns.q9,
        q10: questAns.q10,
        q11: questAns.q11,
        q12: questAns.q12,
        q13: questAns.q13,
        q14: questAns.q14
    })
    .then(()=>{
    alert("Data has been successfully stored!")
    })
    .catch((error)=>{
    alert(error);
    });



    
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

    var issues =["anxiety","depression","personality_disorders","PTSD","Schizophrenia"]
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
        <br>
        CHECK OUT THESE RESOURCES BELOW TO KNOW MORE ABOUT IT:
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
btn.addEventListener('click',checkButtn);


