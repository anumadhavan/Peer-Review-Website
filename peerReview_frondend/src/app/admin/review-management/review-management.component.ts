import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../Services/review.service';
import { EmployeeService } from '../../Services/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-management',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './review-management.component.html',
  styleUrls: ['./review-management.component.css']
})
export class ReviewManagementComponent implements OnInit {
  employees: any[] = [];
  reviews: any[] = [];
  form : {
    revieweeId: string;
    reviewerIds: string[];
    dueDate: string;
  }= {
    revieweeId: '',
    reviewerIds:[],
    dueDate: ''
  };
  empId=null;

  constructor(private reviewService: ReviewService, private employeeService: EmployeeService) {}

  ngOnInit() {
    this.loadEmployees();
    this.loadReviews();
  }

  loadEmployees() {
    this.employeeService.getAll().subscribe((res) => this.employees = res);
  }

  loadReviews() {
    this.reviewService.getAll().subscribe((res) => this.reviews = res);
  }

  createReview() {
    this.reviewService.create(this.form).subscribe(() => {
      this.form = { revieweeId: '', reviewerIds: [], dueDate: '' };
      this.loadReviews();
    });
  }
  onReviewerToggle(empId: string, event:Event) {
    const input = event.target as HTMLInputElement;
    const checked = input.checked;
    const idx = this.form.reviewerIds.indexOf(empId);
  
    if (checked && idx === -1) {
      this.form.reviewerIds.push(empId); 
    } else if (!checked && idx !== -1) {
      this.form.reviewerIds.splice(idx, 1); 
    }
  }
  
}
