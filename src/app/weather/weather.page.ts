import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton,IonBackButton, IonCardContent,IonCard, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons } from '@ionic/angular/standalone';
import { WeatherService } from '../the-weather.service';
import { Geolocation } from '@capacitor/geolocation';
import { Router } from '@angular/router';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonBackButton,IonButton,IonCard,IonCardContent,IonCardHeader]
})
export class WeatherPage implements OnInit {
  weatherInfo: any;
  position: any = "";
  lat: string = "";
  long: string = "";

  constructor(private weatherService: WeatherService,private router: Router) { }

  ngOnInit(): void {
    this.getWeather();
  }

  async getWeather() {
    try {
      const position = await Geolocation.getCurrentPosition();
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      
      
      this.weatherService.getWeather(lat, long).subscribe(
        (response) => {
          this.weatherInfo = response;
        },
        (error) => {
          console.error('Error fetching weather:', error);
        }
      );
    } catch (error) {
      console.error('Error getting current position:', error);
    }
  }
}
