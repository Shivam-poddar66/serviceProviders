import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../services/business.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  businesses: any[] = [];

  constructor(private businessService: BusinessService) {}

  ngOnInit() {
    this.businessService.getBusinesses().subscribe((data: any) => {
      this.businesses = data;
    });
  }
}
