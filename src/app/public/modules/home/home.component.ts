import { Component } from '@angular/core';
import { HomeBannerComponent } from "../../components/home-banner/home-banner.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HomeBannerComponent]
})
export class HomeComponent {

}
