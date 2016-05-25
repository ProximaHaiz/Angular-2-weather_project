import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from "./app.component";
import {HTTP_PROVIDERS} from "@angular/http";
import{WeatherService} from './weather/weather.service'

/**
 * All classes will use the same instances of following providers elements
 */
bootstrap(AppComponent, [HTTP_PROVIDERS,WeatherService]);
