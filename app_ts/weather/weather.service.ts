import {Injectable} from '@angular/core'
import {WEATHER_ITEMS} from './weather.data'
import {WeatherItem} from './weather-item'
import{Observable} from 'rxjs/Observable'
import{Http} from '@angular/http'
import 'rxjs/Rx';
@Injectable()
export class WeatherService{
    constructor(private _http: Http){}
    
    addWeatherItem(weatherItem: WeatherItem){
        WEATHER_ITEMS.push(weatherItem);
    }
   
    getWeatherItems(){
        return WEATHER_ITEMS;
    }
    
   searchWeatherData(cityName: string): Observable<any>{
       return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='
       + cityName + '&APPID=3f74f471749cc7573ae09e0e6b48bcb2&units=metric&lang=ua')
       .map(response => response.json()).catch(error =>{
           console.error(error);
           return Observable.throw(error.json())
       });
   }  
} 