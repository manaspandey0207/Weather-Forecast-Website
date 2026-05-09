async function Fetch_Data() {

   try {

       const City = document.getElementById("City").value.toLowerCase()

       const URL = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=3955cb95e9939350197b8a07ee77f4bd&units=metric`

       let response = await fetch(URL);

       

       if(!response.ok) {

        throw new Error("Could not fetch resource")
       }

       

       

       let Data = await response.json();

       document.getElementById("Name_of_City").innerHTML = "📍" + Data.name

       document.getElementById("Temp").innerHTML = "🌡️Temperature ;- " + Data.main.temp + "C"

       document.getElementById("Weather").innerHTML = "☁️weather - " + Data.weather[0].main;

       document.getElementById("Humidity").innerHTML = "💧Humidity - " + Data.main.Humidity;

       document.getElementById("Wind").innerHTML = "🌬️Wind - " + Data.main.wind_speed;

       



    }
   catch (error){

    console.error(error);


   }
   
    


}
