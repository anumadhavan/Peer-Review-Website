import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FeedbackService {
  private baseUrl = 'http://localhost:5000/api/feedbacks';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getByReviewId(reviewId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/review/${reviewId}`);
  }

  submitFeedback(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
}
