import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../../Services/feedback.service';
import { ReviewService } from '../../Services/review.service';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../auth/service.service';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  reviewId = '';
  review: any;
  content = '';
  currentUserId:string|null = ''; 

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private feedbackService: FeedbackService,
    private auth: ServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reviewId = this.route.snapshot.paramMap.get('id') || '';
    this.loadReview();
    this.currentUserId = this.auth.getUserId();

  }

  loadReview() {
    this.reviewService.getAll().subscribe((reviews) => {
      this.review = reviews.find((r: any) => r._id === this.reviewId);
    });
  }

  submitFeedback() {
    const data = {
      reviewId: this.reviewId,
      reviewerId: this.currentUserId,
      content: this.content
    };

    this.feedbackService.submitFeedback(data).subscribe(() => {
      alert('Feedback submitted!');
      this.router.navigate(['/employee/reviews']);
    });
  }
}
