import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchProductsService } from 'src/app/services/fetch-products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  allBanners: any[] = [];
  allCategories: any[] = [];

  //ngx-carousel settings
  customOptions: any = {
    loop: true,
    autoplay: true,
    dots: true,
    navSpeed: 500,
    items: 1.5,
    margin: 4,
    autoWidth: true,
  };

  constructor(
    private fetchBanners: FetchProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllBanners();
    this.getAllCategories();
  }

  getAllBanners(): void {
    this.fetchBanners.getBanners().subscribe((res: any) => {
      if (res) {
        this.allBanners = res;
      } else {
        this.allBanners = [];
      }
    });
  }

  getAllCategories(): void {
    this.fetchBanners.getCategories().subscribe((res: any) => {
      if (res) {
        this.allCategories = res;
      } else {
        this.allCategories = [];
      }
    });
  }

  navigateToExplore(): void {
    this.router.navigate(['/products']);
  }
}
