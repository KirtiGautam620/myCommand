class DivCommand{
    program;
    constructor(program){
        this.program=program
    }
    register(){
        this.program
        .command("div <n1> <n2>")
        .action((n1,n2)=>this.div(n1,n2))
    }
    div(n1,n2){
        console.log(Number(n1)/Number(n2))
    }
}

module.exports=DivCommand
