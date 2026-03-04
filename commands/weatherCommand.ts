const waxios=require("axios")
const chalkWeather=require("chalk")
class WeatherCommand{
    program;
    constructor(program){
        this.program=program
    }
    register(){
        this.program
        .command("weather")
        .action(async()=>await this.showWeather())
    }
    async showWeather(){
        try{
            const line=()=>{
        console.log(chalkWeather.blue("--------------"))
    }
        console.log(chalkWeather.yellow("Fetching Weather...."))
        const res=await waxios.get(`https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&current_weather=true`, { timeout: 5000 })
        const data=res.data.current_weather
        line()
        console.log(chalkWeather.bold("Weather Report"))
        line()
        console.log(chalkWeather.blue("Temperature"),chalkWeather.green(data.temperature+"°C"))
        console.log(chalkWeather.blue("Wind Speed:"), chalkWeather.green(data.windspeed+" km/h"))
        console.log(chalkWeather.blue("Condition:"), chalkWeather.green("Clear"))
        line()
    }
    catch(err){
        console.log(chalkWeather.red("Error fetching weather: "+err.message))
    }
    }
}
module.exports=WeatherCommand
