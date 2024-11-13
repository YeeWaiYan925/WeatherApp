let weather = {
    apiKey: "1f769962d500de08ce237a5ef2a03488",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        ).then((response) => {
            console.log(response); // Log response for debugging
            if (!response.ok) {
                throw new Error("City not found"); // Error handling
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data)) // Call displayWeather on success
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            alert(error.message); // Alert user about the error
        });
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name; // Added space
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h"; // Added space for units
    },
};