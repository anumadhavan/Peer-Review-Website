import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../Services/review.service';
import { Router } from '@angular/router';
import { ServiceService } from '../../auth/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  reviews: any[] = [];
  currentUserId:string|null = ''; 

  constructor(
    private reviewService: ReviewService,
    private auth: ServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentUserId = this.auth.getUserId();
    this.loadAssignedReviews();
  }

  loadAssignedReviews() {
    this.reviewService.getAll().subscribe((res) => {
      this.reviews = res.filter((r: any) =>
        r.reviewerIds.some((rev: any) => rev._id === this.currentUserId)
      );
    });
  }

  goToFeedback(reviewId: string) {
    this.router.navigate([`/employee/feedback/${reviewId}`]);
  }
}
