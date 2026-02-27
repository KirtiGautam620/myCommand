#!/usr/bin/env node 
const { Command } = require("commander");
const axios = require("axios"); //default export therefore no curly braces
const program = new Command(); //object
// now we will access method (command,action)
program
    .name("mycli")
    .description("version")
    .version("1.0.0");
program
    .command("greet <name>") // multiple ho skte hai
    .action((name) => { console.log(`Hello ${name}`); });
program
    .command("add <n1> <n2>")
    .description("Add two Numbers")
    .action((n1, n2) => { console.log(Number(n1) + Number(n2)); });
program
    .command("sub <n1> <n2>")
    .description("Subtract two Numbers")
    .action((n1, n2) => { console.log(Number(n1) - Number(n2)); });
program
    .command("mul <n1> <n2>")
    .description("Multiply two Numbers")
    .action((n1, n2) => { console.log(Number(n1) * Number(n2)); });
program
    .command("div <n1> <n2>")
    .description("Divide two Numbers")
    .action((n1, n2) => { console.log(Number(n1) / Number(n2)); });
program
    .command("quote")
    .description("Quote generstion")
    .action(async () => {
    const res = await axios.get(`https://zenquotes.io/api/random`);
    console.log(res.data.q);
});
program
    .command("pokemon")
    .description("pokemon info")
    .action(async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    console.log(res.data);
    console.log(res.data.sprites);
});
program
    .command("country")
    .description("country info")
    .action(async () => {
    const res = await axios.get(`https://restcountries.com/v3.1/name/india`);
    for (let i of res.data) {
        console.log(i.name);
    }
    // console.log(res.data)
});
program
    .command("joke")
    .description("Random Joke")
    .action(async () => {
    try {
        const res = await axios.get(`https://official-joke-api.appspot.com/random_joke`);
        console.log(res.data.setup);
        console.log(res.data.punclines);
    }
    catch (err) {
        console.log(err);
    }
});
program
    .command("weather")
    .description("weather info")
    .action(async () => {
    try {
        const res = await axios.get(`https://wttr.in/London?format=j1`);
        console.log(res.data.weather);
    }
    catch (err) {
        console.log(err);
    }
});
program.parse(); //saare commands likhne ke baad last mein likhna
