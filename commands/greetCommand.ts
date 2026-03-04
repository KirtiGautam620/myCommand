const chalk=require("chalk")
class Greet_Command{
    name;
    program;
    constructor(program){
        this.program=program;
    }
    
    register(){
        this.program
        .command("greet <name>")
        .action((name)=>this.sayHello(name))
    }
    sayHello(name){
        console.log(chalk.green(`hello ${name}`))
    }

}
module.exports=Greet_Command