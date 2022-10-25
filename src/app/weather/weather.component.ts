import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../model/weather.model';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService : WeatherService) { }

  weatherData?: WeatherData;
  cityName: string = "Vadodara";

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = "";
  }

  submit() {
    this.getWeatherData(this.cityName);
    this.cityName = "";
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe((resp) => {
      console.log(resp);
      this.weatherData = resp;
    })
  }



}
