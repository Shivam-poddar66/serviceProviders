import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-list-reviews',
  templateUrl: './list-reviews.component.html',
  styleUrls: ['./list-reviews.component.css'],
})
export class ListReviewsComponent implements OnInit {
  reviews: any[] = [];
  businessId: string | null = null;

  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.businessId = this.route.snapshot.paramMap.get('businessId');
    if (this.businessId) {
      this.reviewService.getReviewsByBusiness(this.businessId).subscribe(
        (data: any) => {
          this.reviews = data;
        },
        (err) => {
          console.error('Failed to fetch reviews:', err);
        }
      );
    }
  }
}
