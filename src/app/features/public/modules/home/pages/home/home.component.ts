import { Component, OnInit } from '@angular/core';
import { HomeBannerComponent } from '../../../../components/home-banner/home-banner.component';
import { HomeAboutComponent } from '../../../../components/home-about/home-about.component';
import { HomePortfolioComponent } from '../../../../components/home-portfolio/home-portfolio.component';
import HomeDTO from '../../interfaces/home.dto';
import HomeService from '../../services/home.service';
import ResponseDTO from '../../../../../../core/DTOs/response.dto';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HomeBannerComponent, HomeAboutComponent, HomePortfolioComponent]
})
export class HomeComponent implements OnInit {
  homeData: HomeDTO | null = null;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.home().subscribe({
      next: (response: HomeDTO) => {
        this.homeData = response;
      },
      error: (error) => {
        console.error('Error fetching home data', error);
      }
    });
  }
}
