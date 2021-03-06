const Kahoot = require("kahoot.js-updated");
const kahoots = [];

let name = 'User'; // Your username
let id = 6647250; // Pin of the game
let amountOfBots = 200; // How much bots you want

console.log("Joining kahoot...");

for(let client = 0; client < amountOfBots; client++)
{
    kahoots.push(new Kahoot);
    kahoots[client].join(id, `${name} ${String(client)}`).catch(e => console.log(e));

    kahoots[client].on("Joined", () => {
        console.log(`${name} ${String(client)} Connected to Kahoot game`);
    });
    kahoots[client].on("QuestionStart", question => {
        question.answer(Math.floor(Math.random() * question.quizQuestionAnswers[question.questionIndex]) + 0);
    });
    kahoots[client].on("Disconnect", (reason) => {
        console.log(`${name} ${String(client)} Disconnected, reason: ${reason}`);
    })

}
