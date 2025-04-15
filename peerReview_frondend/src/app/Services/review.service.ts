import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private baseUrl = 'http://localhost:5000/api/reviews';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  assignReviewers(reviewId: string, reviewerIds: string[]): Observable<any> {
    return this.http.put(`${this.baseUrl}/${reviewId}/assign`, { reviewerIds });
  }
}
