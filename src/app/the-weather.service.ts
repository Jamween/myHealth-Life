import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'f2f6768be4aff6c51291c10325dbe06e';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeather(latitude: number, longitude: number) {
    const url = `${this.apiUrl}?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
