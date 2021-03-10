let score = [0, 1, 2, 3, 4, 5, 6];
var turn;

var team1 =
{
    name: "MI",
    runs: [],
    score: 0
}

var team2 =
{
    name: "RCB",
    runs: [],
    score: 0
}

//calling functions 
window.onload = () => {
    selecttoss();
    updatescore();
    updatenames();
    updatebuttontext();
}

// Choosing toss
let selecttoss = () => {
    turn = Math.round(Math.random()) + 1;
}

//upadating button text content
let updatebuttontext = () => {
    var button = document.getElementById("button");
    
    var result = document.getElementById("result");
    result.style.visibility =  "";
    if(team1.runs.length==6 && team2.runs.length==6 )
    {
        button.remove();
    
   result.textContent = team1.score === team2.score?"Match Draw" :`${team1.score>team2.score?team1.name:team2.name} Wins`;
    }
    else
    {
     turn = team1.runs.length === 6 ?2 : team2.runs.length === 6 ?1 :turn;
     button.textContent = `${turn === 1 ? team1.name : team2.name} batting`;
    }
}

//updating team scores
let updatescore = () => {
    document.getElementById("team1-score").textContent = team1.score;
    document.getElementById("team2-score").textContent = team2.score;
    updateruns();
}

//updating respective team names
let updatenames = () => {
    document.getElementById("team1-name").textContent = team1.name;
    document.getElementById("team2-name").textContent = team2.name;
}

// adding behaviour to button 
var buttonclicked = () =>{
   var runs = score[Math.floor(Math.random()*score.length)]
   runs = runs === 5?"W":runs;
   if(turn==1)
   {
       team1.runs.push(runs);
       team1.score = calculatescore(team1.runs);
   }
   else
{
       team2.runs.push(runs);
       team2.score = calculatescore(team2.runs);
}
updatebuttontext();
updatescore();
}

//calculating score
var calculatescore = (runs) =>{
    return runs.map(num=>{
        return num=="W"?0:num;
    }).reduce((total,num)=>total+num)
}

// updating the runs
var updateruns = () =>{
    var TeamOne = document.getElementById("team-1-score").children;
    var TeamTwo = document.getElementById("team-2-score").children;
    team1.runs.forEach((runs,index) => {
        TeamOne[index].textContent=runs;
    })
    team2.runs.forEach((runs,index) => {
        TeamTwo[index].textContent=runs;
    })
}
