import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  sectionsList: any[] = [
    {
      "link": "#home",
      "title": "Home",
    },
    {
      "link": "#about",
      "title": "About",
    },
    {
      "link": "#portfolio",
      "title": "Portfolio",
    },
    {
      "link": "#footer",
      "title": "Contact",
    },
  ]
}
