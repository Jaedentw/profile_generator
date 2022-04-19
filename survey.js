const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

rl.question("What is your name? Nicknames are also acceptable :)\n", (answer) => {
  answers.push(answer)
  rl.question("What's an activity you like doing?\n", (answer) => {
    answers.push(answer)
    rl.question("What do you listen to while doing that?\n", (answer) => {
      answers.push(answer)
      rl.question("Which meal in the day if your favorite?\n", (answer) => {
        answers.push(answer)
        rl.question("What is your favorite thing to eat for that meal?\n", (answer) => {
          answers.push(answer)
          rl.question("Which sport is your absolute favorite?\n", (answer) => {
            answers.push(answer)
            rl.question("What skill are you most proud of?\n", (answer) => {
              answers.push(answer)
              console.log(`Hey there! My name is ${answers[0]}. My favorite thing to do is ${answers[1]} while I listen to ${answers[2]}. My favorite meal in the day is ${answers[3]} especially when its ${answers[4]}! My favorite sport is ${answers[5]}, so take me to a game if you like it too. The skill I'm most proud of is ${answers[6]}. That's me :) I look forward to meeting everyone!`)
              rl.close();
            });
          });
        });
      });
    });
  });
});

