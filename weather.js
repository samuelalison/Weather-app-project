class Weather {
    constructor(city){
        this.apiKey = 'ee5e77e842454263835134131220910';
        this.city = city;
    }

    // Fetch weather  from API 
    async getWeather(){
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);

        
        const responseData = await response.json();

        return responseData;
    }

    // change weather location 
changeLocation(city){
    this.city = city;
}
}