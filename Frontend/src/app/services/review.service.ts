import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private baseUrl = 'http://localhost:5000/api/review';

  constructor(private http: HttpClient) {}

  getReviewsByBusiness(businessId: string) {
    return this.http.get(`${this.baseUrl}/business/${businessId}`);
  }

  addReview(reviewData: { businessId: string; rating: number; comment: string }) {
    return this.http.post(`${this.baseUrl}`, reviewData);
  }
}
