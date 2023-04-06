import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorsDataService {

  constructor(private http:HttpClient) { }

  GetSensorData(){
    return this.http.get("http://127.0.0.1:5000/");
  }
}
