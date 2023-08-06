This is a react application built on vite for weather forecast.
* https://openweathermap.org/api is the API used to fetch the weather of any city all over the world
* https://www.abstractapi.com/api/time-date-timezone-api is the APi used to fetch the time of the city


About the application:
* This application is used to fetch the current weather condition of any city all over the world
* It shows the current temperature in both celsius and fahrenheit  and current time of your desired city
* It shows all the important weather details like current temperature, minimum temperature, maximum temperature, humidity etc.
* This application is completely responsive and can be viewed and used from any type of device
* This application is built purely using react with the help of above mentioned two APIs



Application Guide:
1. Upon hitting the url, homepage appears with the weather details of Paris(which is set as default)
2. Enter the desired city name in the input field and hit enter
   Note: Make sure the spelling of the city name is correct and no space is    
   added at the end of the city name
3. Once you hit enter, a nice page loads with all the important weather details
4. All the details are shown in celsius(°C)
5. The top right side of the application, you can see a "°F" button, clicking on it converts all the celsius parameters to fahrenheit
6. The background image of the application changes based on the temperature of the city.
    * If the temperature is <20°C or <68°F, the the background will be cool       image else the background will be a hot image.
8. If you enter wrong city name and hit enter, a 404 not found page loads and it has a button, clicking on it will takes you to the home page
