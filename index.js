#!/usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "atHome",
        choices: ["Mountains", "Forest"],
        message: "You are at your home. Select place where you want to go",
        // when(answers) {
        //     return answers.atHome == "Home"
        // },
    },
    {
        type: "list",
        name: "atMountains",
        choices: ["Forest", "Home"],
        message: "You are at mountains. Select place where you want to go",
        when(answers) {
            return answers.atHome == "Mountains";
        },
    },
    {
        type: "list",
        name: "atForest",
        choices: ["Home", "Mountains"],
        message: "You are at forest. Select place where you want to go",
        when(answers) {
            return answers.atHome == "Forest";
        },
    },
]);
if (answers.atHome) {
    console.log("Thankyou for playing");
}
