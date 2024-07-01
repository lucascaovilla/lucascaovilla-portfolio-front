import { Component } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.scss'
})
export class HomeBannerComponent {
  backgroundImageAvifSrc: string = "../../../../assets/images/home-banner/white-development-setup.avif";
  backgroundImageWebpSrc: string = "../../../../assets/images/home-banner/white-development-setup.webp";
  backgroundImageSrc: string = "../../../../assets/images/home-banner/white-development-setup.jpg";
  backgroundImageAlt: string = "Table with white computer running code n a white development setup";
  backgroundImageWidth: string = "1920";
  backgroundImageHeight: string = "2880";
}
