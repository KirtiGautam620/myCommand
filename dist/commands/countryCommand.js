const caxios = require("axios");
class CountryCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("country")
            .action(async () => await this.showCountry());
    }
    async showCountry() {
        const res = await caxios.get(`https://restcountries.com/v3.1/name/india`);
        for (let i of res.data) {
            console.log(i.name);
        }
    }
}
module.exports = CountryCommand;
