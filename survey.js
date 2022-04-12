const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {
  name: "What's your name? Nicknames are also acceptable: ",
  activity: "What's an activity you like doing? ",
  music: "What do you listen to while doing that? ",
  meal: "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  food: "What's your favourite thing to eat for that meal? ",
  sport: "Which sport is your absolute favourite? ",
  superpower: "What is your superpower? In a few words, tell us what you are amazing at! "

};

rl.question(`${questions.name}`, (name) => {
  rl.question(`${questions.activity}`, (activity) => {
    rl.question(`${questions.music}`, (music) => {
      rl.question(`${questions.meal}`, (meal) => {
        rl.question(`${questions.food}`, (food) => {
          rl.question(`${questions.sport}`, (sport) => {
            rl.question(`${questions.superpower}`, (superpower) => {
      
              rl.close();
              console.log(`Hi ${name}! It's great you to hear that you like ${activity}.  You listen to ${music}? You've got great taste! You're big fan of having ${food} at ${meal}.  ${sport} is so much fun to play.  With ${superpower} you're sure to be a success.`);

            });
          });
        });
      });
    });
  });
});
