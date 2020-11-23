var readline = require("readline-sync");

var userName = readline.question(("Whats your name ? "));

var score = 0;

var sc =(score = 0);

var a =0;

var chalk = require('chalk');

console.log(chalk.magenta("WELCOME " + userName.toUpperCase() + " TO GAME OF THRONES QUIZ ?"));

console.log(chalk.green("RULES OF THE QUIZ ARE:"))
console.log(chalk.green("1 : TO ENTER LEVEL 2 OF QUIZ ,YOU HAVE TO GIVE ATLEAST 3 CORRECT ANSWER "))
console.log(chalk.green("2 : IF YOU DON'T GIVE ATLEAST THREE CORRECT ANSWER YOU HAVE TO PLAY LEVEL 1 AGAIN"))


function play(question , answer){
   var userAnswer = readline.question(question);
   console.log("Your answer is: ", userAnswer )
   if (userAnswer.toUpperCase() == answer.toUpperCase()){
     console.log(chalk.blue("Correct answer"))
      sc++;
   } else {
     console.log(chalk.red("Oops,thats the wrong answer"))
   }
}

const queBankLevel1 = [
	{
		question: `
	Que-1 Who killed Ned Stark?
	a: Ilym pain
	b: Cersei lannister
	c: Jaime lannister\n`,
		answer: "a"
	},
	{
		question: `
  Que-2 Who killed the night king?
	a: Jorah mormont
	b: arya stark\n`,
		answer: "b"
	},
	{
		question: `
	Que-3 Who killed tywin lannister?
	a: Tyrion
	b: Tywin
	c: Ollena
	\n`,
		answer: "a"
	},
	{
		question: `
  Que-4	Who killed joffery?
	a: Ollena
	b: Martell
	c: Tyrion\n`,
		answer: "a"
	}
];

const queBankLevel2 = [
	{
		question: `
	Que-1 What was jon "snow" real name?
	a: Rhaegar targaryen
	b: Aegon targaryen
	c: Viserys targaryen\n`,
		answer: "b"
	},
	{
		question: `
  Que-2  Who gave arya stark training to become faceless?
	a: Syrio Forel
	b: Joaquin hagar\n`,
		answer: "b"
	},
	{
		question: `
	Que-3 Who was three-eyed raven?
	a: Brandon stark
	b: Ricon stark
	c: Ramsey bolton\n`,
		answer: "a"
	},
	{
		question: `
  Que-4	Who was "Lord of whispers"?
	a: Lord varys
	b: Lord baelish\n`,
		answer: "a"
	}
];

function start(){
     level1()
    if (sc>=3){
      console.log("LEVEL 2")   
    }else if(sc<3){
		level1()
		sc = a;
    }
}

for (; ;){
   start();
if (sc>=3){
  break; 
}
}

level2();

function level2(){
for (var i = 0; i< queBankLevel2.length ; i++){
  var currentQuestions2 = queBankLevel2[i]
  play(currentQuestions2.question, currentQuestions2.answer)
}
}
function level1(){
for (var i = 0; i< queBankLevel1.length ; i++){
    var currentQuestions1 = queBankLevel1[i]
    play(currentQuestions1.question,currentQuestions1.answer)   
}
}

    
var highScore = [
  {
  name: "shailesh" ,
  scor : 8
  },

{
  name: userName,
  scor: sc
} ]


function highestScore(){
    if (highScore[1].scor >=  highScore[0].scor){
    console.log("CONGRATS YOU MADE THE HIGH SCORE")
  }
  }

highestScore();

console.log(chalk.magenta("GREAT " + userName.toUpperCase() + " YOU DID A FANTASTIC JOB"))
console.log("Your final score is : ",
chalk.green(sc))
