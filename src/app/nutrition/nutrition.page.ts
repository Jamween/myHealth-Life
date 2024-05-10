import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonItem,IonInput,IonLabel,IonText,IonBackButton,IonButton,IonList, IonButtons, IonGrid } from '@ionic/angular/standalone';
import { NutritionService } from '../my-nutrition.service';

@Component({
  selector: 'app-nutrion',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
  standalone: true,
  imports: [IonGrid, IonButtons, IonContent, IonHeader, IonTitle,IonInput, IonToolbar, CommonModule,IonButton, FormsModule,IonItem,IonLabel,IonList,IonBackButton,IonText]
})
export class NutritionPage {
  foodQuery: string="";
  nutritionalInfo: any;

  constructor(private nutritionService: NutritionService) {
  }

 

  // Function to retrieve nutritional information based on user input
async getNutritionalInfo() {
  // Check if the foodQuery input is not empty
  if (this.foodQuery.trim() !== '') {
    console.log('Your input:', this.foodQuery); // Log user input to console
    try {
      // Call the nutritionService to get nutritional information for the provided foodQuery
      const response = await this.nutritionService.getNutritionalInfo(this.foodQuery).toPromise();
      this.nutritionalInfo = response; // Assign the response data to the nutritionalInfo variable
    } catch (error) {
      console.error('Error getting your nutritional info:', error); // Log any errors that occur during data retrieval
    }
  } else {
    console.log('empty'); // Log message if foodQuery input is empty
  }
}

// Function to update the foodQuery variable based on user input
updateFoodQuery(event: any) {
  this.foodQuery = event.target.value; // Update the foodQuery variable with the value from the input field
}

  
}