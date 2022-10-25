import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../model/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  getWeatherData(cityName : string) : Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      // headers: new HttpHeaders()
      //   .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      //   .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('q',cityName)
        .set('appid','86f5b52b87495e29636ddb453135d29d')
        .set('units', 'metric')
        .set('mode', 'json')
    })
  }
}
