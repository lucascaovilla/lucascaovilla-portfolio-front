import { Component, Input } from '@angular/core';
import HomeBannerDTO from '../../modules/home/interfaces/home-banner.dto';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.scss'
})
export class HomeBannerComponent {
  @Input('homeBanner') homeBanner!: HomeBannerDTO;
}
