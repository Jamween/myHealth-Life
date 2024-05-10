import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyCaloriesService {
  private apiKey = 'kGB0mX/D1vgSbAxsTfXDqA==vIBYXG0ZECA2pnAB';
  private apiUrl = 'https://api.api-ninjas.com/v1/caloriesburned';

  constructor(private http: HttpClient) { }

  
  GetDailyData(activity: string): Observable<any> {
    const headers = new HttpHeaders().set('X-Api-Key', this.apiKey);
    return this.http.get(`${this.apiUrl}?activity=${activity}`, { headers });
  }
}

