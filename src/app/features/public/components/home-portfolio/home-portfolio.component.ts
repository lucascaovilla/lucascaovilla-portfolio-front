import { Component, Input } from '@angular/core';
import HomePortfolioDTO from '../../modules/home/interfaces/home-portfolio.dto';

@Component({
  selector: 'app-home-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './home-portfolio.component.html',
  styleUrl: './home-portfolio.component.scss'
})
export class HomePortfolioComponent {
  @Input("homePortfolio") homePortfolio!: HomePortfolioDTO;
}
