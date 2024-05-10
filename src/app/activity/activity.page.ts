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
  caloriesInfo: any[] = [];
  activity: string = "";

  constructor(private MyCaloriesService: MyCaloriesService) {}

  async GetDailyData() {
    if (this.activity.trim() !== '') {
      console.log('User input:', this.activity);
      try {
        const response = await this.MyCaloriesService.GetDailyData(this.activity).toPromise(); // Convert Observable to Promise
        this.caloriesInfo = response;
      } catch (error) {
        console.error('Error getting activities info:', error);
      }
    } else {
      console.log('activity is empty');
    }
  }

  updateActivity(event: any) {
    this.activity = event.target.value;
  }
}