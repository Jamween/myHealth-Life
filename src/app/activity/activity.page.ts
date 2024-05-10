import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader,IonRadio,IonList, IonTitle, IonToolbar,IonItem,IonLabel,IonText,IonBackButton,IonButton, IonInput, IonButtons } from '@ionic/angular/standalone';
import { MyCaloriesService } from '../my-calories.service';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
  standalone: true,
  imports: [IonButtons , IonContent , IonHeader , IonRadio , IonInput , IonTitle , IonList , IonToolbar , CommonModule , IonButton , FormsModule , IonItem , IonLabel , IonBackButton , IonText]
})
export class ActivityPage {
  caloriesInfo: any[] = []; // Array to store daily calorie information
  activity: string = ""; // Variable to store user input activity

  constructor(private MyCaloriesService: MyCaloriesService) {}

  // Function to retrieve daily calorie data based on user activity
  async GetDailyData() {
    // Check if the activity input is not empty
    if (this.activity.trim() !== '') {
      console.log('User input:', this.activity); // Log user input activity to console
      try {
        // Call the MyCaloriesService to get daily data for the provided activity
        const response = await this.MyCaloriesService.GetDailyData(this.activity).toPromise(); 
        this.caloriesInfo = response; // Assign the response data to the caloriesInfo array
      } catch (error) {
        console.error('Error getting activities info:', error); // Log any errors that occur during data retrieval
      }
    } else {
      console.log('activity is null'); // Log message if activity input is empty
    }
  }

  // Function to update the activity variable based on user input
  updateActivity(event: any) {
    this.activity = event.target.value; // Update the activity variable with the value from the input field
  }
}