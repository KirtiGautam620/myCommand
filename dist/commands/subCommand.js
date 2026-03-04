class SubCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("sub <n1> <n2>")
            .action((n1, n2) => this.sub(n1, n2));
    }
    sub(n1, n2) {
        console.log(Number(n1) - Number(n2));
    }
}
module.exports = SubCommand;
