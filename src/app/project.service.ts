import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {}
  getRideShareRequests(): Observable<any> {
    return this.http.get('http://172.20.1.216:8800/api/rideShareRequests');
  }
  
 
}
