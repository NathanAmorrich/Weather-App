
let weather = {
  API_Key : "d78f4606c5ba94c8b3d176f95d59163a",
  fetchWeather: function(city_searched) {

    unitSelected = document.getElementById("units_list").value;
    
    if(unitSelected == "°C")
    {
      unitAPICall = "metric";
      windUnit = " km/h";
    } 
    else
    {
      unitAPICall = "imperial";
      windUnit = " mph";
    }
    
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q='
      +city_searched
      +'&units='+unitAPICall+'&appid='
      +this.API_Key

    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data){
    const{name} = data;
    const{icon, description} = data.weather[0];
    const{temp, humidity} = data.main;
    const{speed} = data.wind;
    console.log(name,icon,description,temp,humidity,speed);

    if(name == "Tallinn" || name == "Paris" || name == "Berlin"){
      //document.querySelector(".icon_"+name).src = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
      document.querySelector(".desc_"+name).innerHTML = description;
      document.querySelector(".temp_"+name).innerHTML = temp+" "+unitSelected;
      document.querySelector(".humidity_"+name).innerHTML = "Humidity : "+humidity+"%";
      document.querySelector(".wind_"+name).innerHTML = "Wind speed: "+speed+windUnit;
    }
    else{
    }

  },
  search : function(){
    localStorage.setItem('city_name', document.querySelector(".InputValue").value);
  },
  
  redirect : function(){
    window.location = "http://127.0.0.1:5500/Weather-App-main/city_page.html";
  },
};

window.onload = function() {
  weather.fetchWeather("Tallinn");
  weather.fetchWeather("Paris");
  weather.fetchWeather("Berlin");
};

document.querySelector(".researchBlock button").addEventListener("click", function(){
  weather.search();
  weather.redirect();
});



/*
.catch(err => alert("Wrong city name!"));
})
*/
