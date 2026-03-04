const paxios = require("axios")
class PokemonCommand{
    program;
    constructor(program){
        this.program=program
    }
    register(){
        this.program
        .command("pokemon")
        .action(async()=> await this.addPokemon())
    }
    async addPokemon(){
        const res=await paxios.get(`https://restcountries.com/v3.1/name/india`)
    for(let i of res.data){
        console.log(i.name)
    }
}
}
module.exports=PokemonCommand