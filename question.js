var questions = [
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<js>", "<script>", "<javascript>", "<scripting>"],
        answer: "<script>"
    },

    {
        title: "Where is the correct place to insert a JavaScript?",
        choices: ["the <body> section", "the <head> setion","Both", "none of the above"],
        answer: "the <body> section"
    },

    {
        title:"What is the correct syntax for referring to an external script called <xxx.js>?",
        choices: ["<script href=<xxx.js>>", "<script name = <xxx.js>>", "<script src = <xxx.js>>", "none of the above"],
        answer: "<script src = <xxx.js>>"
    },


    {
        title: "If we declare a variable, let test = 1, then later, reassign, stating var test = 2, what will happen if both are in the same scope?",
        choices: ["both variables will be declared", "JavaScript will raise a SyntaxError", "var test will reassign let test", "var test will be ignored as test is already declared"],
        answer: "JavaScript will raise a SyntaxError"
    },

    {
        title: "What are the main differences between let and const?",
        choices: ["let can be reassigned, const cannot be reassigned", "let cannot be reassigned, const can be reassigned","let is functional scope, while const is block scope", "let is block scope, while const is functional scope"],
        answer: "let can be reassigned, const cannot be reassigned"

    }
]