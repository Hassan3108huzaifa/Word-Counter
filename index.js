#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import ora from "ora";
async function animateText(text) {
    for (let char of text) {
        process.stdout.write(char);
        await new Promise((resolve) => setTimeout(resolve, 50));
    }
}
async function FastText(text) {
    for (let char of text) {
        process.stdout.write(char);
        await new Promise((resolve) => setTimeout(resolve, 1));
    }
}
console.log(chalk.yellow(figlet.textSync("Word Counter", { horizontalLayout: "full" })));
async function restart() {
    await FastText(chalk.cyan.bold("<--------------------------- Welcome to the Word Counter! --------------------------->\n\n"));
    const answere = await inquirer.prompt({
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the words: ",
    });
    // Split sentence into words
    const words = answere.sentence.trim().split(" ");
    // Output animated word count
    const spinner = ora(chalk.bold.yellow("Analyzing your sentence...")).start();
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait for 3 seconds
    spinner.stop();
    console.log(chalk.gray("-------------------------------------------------"));
    await FastText(chalk.bold.green(`Found Words in your sentence is: ${words.length}`));
    console.log(chalk.gray("\n-------------------------------------------------"));
    let exit = await inquirer.prompt([
        {
            name: "Exit",
            type: "confirm",
            message: "do you want to use app again"
        }
    ]);
    if (exit.Exit) {
        restart();
        console.log();
    }
    else {
        console.log();
        await FastText(chalk.cyan.bold(`<---------------------- Thanks For Usnig My ${chalk.yellow.bold('Word Counter')} app! ----------------------->\n\n`));
        await FastText(chalk.cyan.bold(`<-------------------------------- Credit: ${chalk.yellow.bold('HassanRJ')} ---------------------------------->\n\n`));
        return;
    }
}
restart();
