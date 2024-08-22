import { Component, Input } from '@angular/core';
import HomeAboutDTO from '../../modules/home/interfaces/home-about.dto';

@Component({
  selector: 'app-home-about',
  standalone: true,
  imports: [],
  templateUrl: './home-about.component.html',
  styleUrl: './home-about.component.scss'
})
export class HomeAboutComponent {
  @Input('homeAbout') homeAbout!: HomeAboutDTO;
}
