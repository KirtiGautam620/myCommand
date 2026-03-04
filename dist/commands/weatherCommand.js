const waxios = require("axios");
const chalkWeather = require("chalk");
class WeatherCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("weather")
            .action(async () => await this.showWeather());
    }
    async showWeather() {
        try {
            const line = () => {
                console.log(chalkWeather.blue("--------------"));
            };
            console.log(chalkWeather.yellow("Fetching Weather...."));
            const res = await waxios.get(`https://wttr.in/London?format=j1`);
            const data = res.data.current_condition[0];
            line();
            console.log(chalkWeather.bold("Weather Report"));
            line();
            console.log(chalkWeather.blue("Temperature"), chalkWeather.green(data.temp_C + "C"));
            console.log(chalkWeather.blue("Humidity:"), chalkWeather.green(data.humidity + "%"));
            console.log(chalkWeather.blue("Condition:"), chalkWeather.green(data.weatherDesc[0].value));
            line();
        }
        catch (err) {
            console.log(chalkWeather.red(err));
        }
    }
}
module.exports = WeatherCommand;
