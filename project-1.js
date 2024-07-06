document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'b68eccc020c704a7ffa3ae6ad3ef4c86';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        displayWeather(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('City not found');
      });
  });
  
  function displayWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  
    document.getElementById('cityName').textContent = cityName;
    document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
    document.getElementById('description').textContent = `Description: ${description}`;
    document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
    document.getElementById('windSpeed').textContent = `Wind Speed: ${windSpeed} m/s`;
    document.getElementById('weatherIcon').src = icon;
  
    document.querySelector('.weather').style.display = 'block';
  }
  