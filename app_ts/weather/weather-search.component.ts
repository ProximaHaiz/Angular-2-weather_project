import{Component} from '@angular/core'
import{ControlGroup} from '@angular/common'
import{WeatherService} from './weather.service'
import {WeatherItem} from './weather-item'
@Component({
    selector:'my-weather-search',
    template:`
    <section class="weather-search">
        <form (ngSubmit)="onSubmit(f)"  #f="ngForm">
               <label for="city">City</label>
               <input ngControl="location" type="text" id="city" required/>
               <button type="submit">Add City</button>
        </form>
        <div>
            <span class="info">City found:</span>City name
        </div>   
    </section>
    `   
})
export class WeatherSearchComponent{
    constructor(private _weatherService: WeatherService){}
    /**
     * invoke search method from service and set location param from input field
     */
    onSubmit(form: ControlGroup){
       this._weatherService.searchWeatherData(form.value.location)
       .subscribe(
           data => {
               const weatherItem = new WeatherItem(
                   data.name, data.weather[0].description, data.main.temp);
                   this._weatherService.addWeatherItem(weatherItem);
           }
       );  
    }
}