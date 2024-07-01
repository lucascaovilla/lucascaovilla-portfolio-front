import { Component } from '@angular/core';
import { HomeBannerComponent } from "../../components/home-banner/home-banner.component";
import { HomeAboutComponent } from "../../components/home-about/home-about.component";
import { HomePortfolioComponent } from "../../components/home-portfolio/home-portfolio.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HomeBannerComponent, HomeAboutComponent, HomePortfolioComponent]
})
export class HomeComponent {

}
