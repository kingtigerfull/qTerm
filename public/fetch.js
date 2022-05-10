class Fetch {
  async getCurrent(lat,lon) {
  
  
  //anonymous(?) key , this is the original
     const myKey = "39a9a737b07b4b703e3d1cd1e231eedc";
  //GBT/wtsi key  see my keys here: https://home.openweathermap.org/api_keys
	// const myKey = "46f8d8a24dbc61b314abf44d300d9326";
	 
	//hardcoded lat and longitude for Emporia
	//const lat =  38.4039;
	//const lon =   -96.1817;
    //make request to url

    const response = await fetch(
	//original api link (get weather per CityName):
    //  `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
	
 
	  
	  //GBT api link
	  //see: https://openweathermap.org/current#geo
	  
	  //example from website:
	  // `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={46f8d8a24dbc61b314abf44d300d9326}`
	   
	  //GBT/wtsi application	
	 // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}`
	  
	  //wtsi test THIS WORKS!
	 // `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${myKey}`
	 
	 //wtsi test  
     `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${myKey}`
	  
	  
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
