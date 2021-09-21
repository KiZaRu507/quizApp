const questions=[{
    question:'Which is the best web series?',
    a:'Money heist',
    b:'The Mentalist',
    c:'Mirzapur',
    d:'Sutis',
    answer:'d'
},
{
    question:'Will Kashmir Vlog Ever Make its way out of Anshu s phone ?',
    a:'Yes',
    b:'No',
    c:'There is no such thing',
    d:'I dont care',
    answer:'c'

},
{
    question:'Which is the best anime series ?',
    a:'One piece',
    b:'Naruto',
    c:'Gintama',
    d:'DeathNote',
    answer:'a'
},
{
    question:'Which is the best indian web series?',
    a:'Asur',
    b:'Mirzapur',
    c:'The Family man ',
    d:'Sacred games',
    answer:'c'
}];
let score=0;
const que=document.getElementById("question");
const quiz=document.getElementById("quiz");
const a=document.getElementById("option1");
const b=document.getElementById("option2");
const c=document.getElementById("option3");
const d=document.getElementById("option4");
const submit=document.getElementById("sub");
var index=0;
loadQuestion();
function getSelected(){
    const answersEls=document.querySelectorAll(".answer");
    var answer;
    answersEls.forEach(answerEl=>{
        if(answerEl.checked){   
             answer=answerEl.id;
             

        }
    });
    return answer;
}


submit.addEventListener("click",()=>{
    const answer=getSelected();
    if(answer){
        if(answer===questions[index].answer){
            score++;
            
        }
        else{
            alert("Correct answer was option:"+questions[index].answer);
        }
        index++;
        loadQuestion();
        
    }
    
});
function loadQuestion(){
    deSelectAll();
    const current=questions[index];
    if(index==(questions.length-1)){
        submit.innerHTML="Submit";
        
    }
    else if(index==questions.length){
        quiz.innerHTML=`<h2>You have finished the quiz with ${score}/${questions.length} as your score!!!`
    }
    que.innerHTML=current.question;
    a.innerHTML=current.a;
    b.innerHTML=current.b;
    c.innerHTML=current.c;
    d.innerHTML=current.d;
    
}
function deSelectAll(){
    const answersEls=document.querySelectorAll(".answer");
    answersEls.forEach(answerEl=>{
        answerEl.checked=false;
    })
}

