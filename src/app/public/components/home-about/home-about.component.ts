import { Component } from '@angular/core';

@Component({
  selector: 'app-home-about',
  standalone: true,
  imports: [],
  templateUrl: './home-about.component.html',
  styleUrl: './home-about.component.scss'
})
export class HomeAboutComponent {
  backgroundImageSrc: string = "../../../../assets/images/white-marble-background.jpg";
  backgroundImageAlt: string = "A white marble texture background";
  description: string = "I'm a full-stack developer passionate about solving problems and writing clean, efficient code.";
  quote: string = "My passion is to create features capable of exceeding user expectations.";
  skillsList: any[] = [
    {
      "title": "C#",
      "description": "Language",
    },
    {
      "title": "DotNet",
      "description": "Framework",
    },
    {
      "title": "Angular",
      "description": "Framework",
    },
    {
      "title": "Docker",
      "description": "Devops",
    },
    {
      "title": "Postgress",
      "description": "Database",
    },
    {
      "title": "MySql",
      "description": "Database",
    },
  ];
}
