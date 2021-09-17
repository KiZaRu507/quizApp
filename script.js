const questions=[{
    question:'What is my name?',
    a:'Sumukh',
    b:'KiZaRu',
    c:'John',
    d:'Harvey',
    answer:'Sumukh'
},
{
    question:'Is Python An Object oriented language',
    a:'Yes',
    b:'No',
    c:'There is no such thing',
    d:'I dont care',
    answer:'Yes'

},
{
    question:'Who is the father of computers?',
    a:'Charles Babbage',
    b:'KiZaRu',
    c:'My dad',
    d:'Fuck its Kim jong un',
    answer:'Charles Babbage'
},
{
    question:'Are you vaccinated?',
    a:'Yes',
    b:'No',
    c:'Im waiting for an appointment ',
    d:'I dont believe in vaccines',
    answer:'Yes'
}];
const que=document.getElementById("question");
const a=document.getElementById("option1");
const b=document.getElementById("option2");
const c=document.getElementById("option3");
const d=document.getElementById("option4");
const submit=document.getElementById("sub");
var index=0;

const current=questions[index];
submit.addEventListener("click",loadQuestion);
function loadQuestion(){
    que.innerHTML=current.question;
    a.innerHTML=current.a;
    b.innerHTML=current.b;
    c.innerHTML=current.c;
    d.innerHTML=current.d;
    index++;
    
}
document.getElementsByClassName

