class   MulCommand{
    program;
    constructor(program){
        this.program=program
    }
    register(){
        this.program
        .command("mul <n1> <n2>")
        .action((n1,n2)=>this.mul(n1,n2))
    }
    mul(n1,n2){
        console.log(Number(n1)*Number(n2))
    }
}
module.exports=MulCommand