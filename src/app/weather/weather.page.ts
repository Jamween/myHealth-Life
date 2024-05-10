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



  // Constructor to inject WeatherService and Router dependencies
constructor(private weatherService: WeatherService, private router: Router) { }

// Lifecycle hook called after Angular initializes the component
ngOnInit(): void {
  this.getWeather(); // Call the getWeather function when the component is initialized
}

// Function to retrieve weather information based on current geolocation
async getWeather() {
  try {
    // Get the current position using Geolocation API
    const position = await Geolocation.getCurrentPosition();
    const lat = position.coords.latitude; // Extract latitude from position
    const long = position.coords.longitude; // Extract longitude from position
    
    // Call the weatherService to get weather information based on latitude and longitude
    this.weatherService.getWeather(lat, long).subscribe(
      (response) => {
        this.weatherInfo = response; // Assign the response data to the weatherInfo variable
      },
      (error) => {
        console.error('Error fetching weather:', error); // Log any errors that occur during data retrieval
      }
    );
  } catch (error) {
    console.error('Error getting current position:', error); // Log any errors that occur while getting current position
  }
}
}
