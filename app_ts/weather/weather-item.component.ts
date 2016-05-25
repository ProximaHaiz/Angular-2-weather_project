import {Component,Input} from '@angular/core';
import{WeatherItem} from './weather-item'

@Component({
    selector: 'weather-item',
    template: `
        <article class="weather-element">
            <div class="col-1">
                <h3>{{weatherItem.cityName}}</h3>
                <p class="info">{{weatherItem.description}}</p>
            </div>
            <div class="col-2">
                <span class="temperature">{{weatherItem.temperature}}°C</span>
            </div>
        </article>
    `,
    styleUrls: ['src/css/weather-item.css'],
    // inputs:['weatherItem: item']
    
})
/**
 * Class, which we use in WeatherItemList as 1 weatherItem instance 
 * There is two way to bind data:
 * 1 - using inputs:['propertyName: aliase']
 * 2 - using annotation @input left side from property declare
 */
export class WeatherItemComponent {
   @Input('item') weatherItem: WeatherItem;
}