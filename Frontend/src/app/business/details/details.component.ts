import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessService } from '../../services/business.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  business: any;

  constructor(
    private route: ActivatedRoute,
    private businessService: BusinessService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.businessService.getBusinessById(id).subscribe((data: any) => {
      this.business = data;
    });
  }
}
