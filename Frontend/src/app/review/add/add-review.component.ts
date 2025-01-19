import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
})
export class AddReviewComponent {
  businessId: string | null = null;
  rating: number = 0;
  comment: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.businessId = this.route.snapshot.paramMap.get('businessId');
  }

  onSubmit() {
    if (!this.businessId) {
      this.errorMessage = 'Business ID is missing!';
      return;
    }

    const reviewData = {
      businessId: this.businessId,
      rating: this.rating,
      comment: this.comment,
    };

    this.reviewService.addReview(reviewData).subscribe(
      (res) => {
        this.successMessage = 'Review added successfully!';
        this.errorMessage = '';
      },
      (err) => {
        this.errorMessage = 'Failed to add review!';
        this.successMessage = '';
      }
    );
  }
}
