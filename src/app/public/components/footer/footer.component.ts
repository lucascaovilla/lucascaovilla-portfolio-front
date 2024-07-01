import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  contactsList: any[] = [
    {
      "link": "mailto:lucasgrisac@gmail.com",
      "target": "",
      "rel": "",
      "iconSrc": "../../../../assets/icons/socials/envelope.svg",
      "iconAlt": "email",
    },
    {
      "link": "https://dev.to",
      "target": "_blank",
      "rel": "noopener noreferrer",
      "iconSrc": "../../../../assets/icons/socials/devdotto.svg",
      "iconAlt": "Dev.to",
    },
    {
      "link": "https://github.com/lucascaovilla",
      "target": "_blank",
      "rel": "noopener noreferrer",
      "iconSrc": "../../../../assets/icons/socials/github.svg",
      "iconAlt": "GitHub",
    },
    {
      "link": "https://www.linkedin.com/in/lucasgcaovilla",
      "target": "_blank",
      "rel": "noopener noreferrer",
      "iconSrc": "../../../../assets/icons/socials/linkedin.svg",
      "iconAlt": "LinkedIn",
    },
    {
      "link": "https://medium.com/@lucascaovilla",
      "target": "_blank",
      "rel": "noopener noreferrer",
      "iconSrc": "../../../../assets/icons/socials/medium.svg",
      "iconAlt": "Medium",
    },
    {
      "link": "https://www.youtube.com/@lucascaovilla",
      "target": "_blank",
      "rel": "noopener noreferrer",
      "iconSrc": "../../../../assets/icons/socials/youtube.svg",
      "iconAlt": "YouTube",
    }















  ]
}
