import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class BusinessService {
  private baseUrl = 'http://localhost:5000/api/business';

  constructor(private http: HttpClient) {}


  // Add a new business
  addBusiness(businessData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, businessData);
  }
 

  getBusinesses() {
    return this.http.get(`${this.baseUrl}`);
  }

  getBusinessById(id: string | null) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
