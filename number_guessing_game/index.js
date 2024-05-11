//NUMBER GUESSING GAME
  const minNum = 1;
  const maxNum = 100;
  const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let runningGame = true;

while(runningGame) {

     guess = window.prompt(`Guess a  number between ${minNum} and ${maxNum}`);
     guess = Number(guess);
     
     if(isNaN(guess)) {
        window.alert("Please enter a valid number");
     }
     else if(guess<minNum|| guess>maxNum) {
        window.alert("Please enter a valid number");

     }
     else {
        attempts++;

        if(guess<answer){
            window.alert("TOO LOW! PLEASE TRY AGAIN!");
        }
        else if(guess>answer){
            window.alert("TOO HIGH! PLEASE TRY AGAIN!");
        }
        else  {
            window.alert(`YAY!YOU GUESSED IT RIGHT:). The correct answer was ${answer}.It took you ${attempts} attempts`);
            runningGame = false;
        }
     }
}