async function getWeather() {
    let city = document.getElementById("cityInput").value;
    if (city.trim() !== "") {
        let apiKey = "cdaab16c015fe32c75fa4b207c254b5f";
        let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        try {
            let response = await fetch(URL);
            let Data = await response.json();

            // Sunrise and Sunset conversion to readable time
            let sunrise = new Date(Data.sys.sunrise * 1000).toLocaleTimeString();
            let sunset = new Date(Data.sys.sunset * 1000).toLocaleTimeString();

            document.getElementById("WeatherInfo").innerHTML = `
                <h4>${Data.name}, ${Data.sys.country}</h4>
                <p>Sunrise: ${sunrise}</p>
                <p>Sunset: ${sunset}</p>
                <p>Temperature: ${Data.main.temp}°C</p>
                <p>Humidity: ${Data.main.humidity}%</p>
                <p>Condition: ${Data.weather[0].description}</p>
            `;
        } catch (err) {
            document.getElementById("WeatherInfo").innerHTML = `Error fetching data: ${err.message}`;
        }
    } else {
        document.getElementById("WeatherInfo").innerHTML = `Please enter a city name.`;
    }
}
