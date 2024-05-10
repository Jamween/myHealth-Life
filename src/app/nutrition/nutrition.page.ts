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

 

  async getNutritionalInfo() {
    if (this.foodQuery.trim() !== '') {
      console.log('Your input:', this.foodQuery); 
      try {
        const response = await this.nutritionService.getNutritionalInfo(this.foodQuery).toPromise();
        this.nutritionalInfo = response;
      } catch (error) {
        console.error('Error getting your nutritional info:', error);
      }
    } else {
      console.log('empty'); 
    }
  }

  updateFoodQuery(event: any) {
    this.foodQuery = event.target.value;
  }
  
}