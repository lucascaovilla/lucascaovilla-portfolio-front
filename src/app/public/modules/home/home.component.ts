import { Component } from '@angular/core';
import { HomeBannerComponent } from "../../components/home-banner/home-banner.component";
import { HomeAboutComponent } from "../../components/home-about/home-about.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HomeBannerComponent, HomeAboutComponent]
})
export class HomeComponent {

}
