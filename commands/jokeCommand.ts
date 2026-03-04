const axios = require("axios")
class JokeCommand{
    program;
    constructor(program){
        this.program=program
    }
    register(){
        this.program
        .command("joke")
        .action(async()=> await this.addJoke())
    }
    async addJoke(){
        try{
        const res=await axios.get(`https://official-joke-api.appspot.com/random_joke`)
        console.log(res.data.setup)
        console.log(res.data.punchline)
        }
        catch(err){console.log(err)}
        }
}
module.exports=JokeCommand