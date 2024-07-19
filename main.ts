#!/usr/bin/env node

// word counterr project
import inquirer from "inquirer"
const ans : {
    sent : string;
} = await inquirer.prompt([{
    name: "sent",
    type: "input",
    message: "Enter your sentence to count the givern words."
}])

// output defined
const done = ans.sent.trim().split(" ")
console.log(done)

console.log(`Your sentence word count is ${done.length}`)