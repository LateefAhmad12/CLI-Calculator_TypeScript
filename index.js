#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const getStop = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function letsStart() {
    let grainbow = chalkAnimation.rainbow("let's Start Calculation....");
    await getStop();
    grainbow.stop();
}
await letsStart();
async function question() {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "operation",
            message: chalk.bgGreen("Which Operation do you want to Perform?"),
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "number1",
            message: chalk.greenBright("Enter Number 1.."),
        },
        {
            type: "number",
            name: "number2",
            message: chalk.greenBright("Enter Number 2.."),
        }
    ]);
    if (answer.operation == "Addition") {
        console.log(chalk.yellowBright(`${answer.number1} + ${answer.number2} = ${answer.number1 + answer.number2}`));
    }
    else if (answer.operation == "Subtraction") {
        console.log(chalk.yellowBright(`${answer.number1} - ${answer.number2} = ${answer.number1 - answer.number2}`));
    }
    else if (answer.operation == "Multiplication") {
        console.log(chalk.yellowBright(`${answer.number1} * ${answer.number2} = ${answer.number1 * answer.number2}`));
    }
    else if (answer.operation == "Division") {
        console.log(chalk.yellowBright(`${answer.number1} / ${answer.number2} = ${answer.number1 / answer.number2}`));
    }
}
// await againQuestion()
async function againQuestion() {
    do {
        await question();
        var grestart = await inquirer.prompt([
            {
                type: "list",
                name: "again",
                message: chalk.bgBlueBright("Do You Want to Start Operations Aagin? Press Y or N"),
                choices: ["Yes", "No"]
            },
        ]);
    } while (grestart.again == "Yes");
}
await againQuestion();
