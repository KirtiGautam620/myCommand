class AddCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("add <n1> <n2>")
            .action((n1, n2) => this.add(n1, n2));
    }
    add(n1, n2) {
        console.log(Number(n1) + Number(n2));
    }
}
module.exports = AddCommand;
