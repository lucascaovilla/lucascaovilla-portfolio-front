import { Component } from '@angular/core';

@Component({
  selector: 'app-home-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './home-portfolio.component.html',
  styleUrl: './home-portfolio.component.scss'
})
export class HomePortfolioComponent {
  backgroundImageAvifSrc: string = "../../../../assets/images/home-portfolio/white-laptop-setup.jpeg";
  backgroundImageWebpSrc: string = "../../../../assets/images/home-portfolio/white-laptop-setup.jpeg";
  backgroundImageSrc: string = "../../../../assets/images/home-portfolio/white-laptop-setup.jpeg";
  backgroundImageAlt: string = "Table with white laptop and setup for coding.";
  backgroundImageWidth: string = "1920";
  backgroundImageHeight: string = "1278";
  projectsList: any[] = [
    {
      title: "Automatic storage worker",
      description: "A system developed for Arduino UNO R3 focused on delivering resources to it's operator as requested. Specially focused on industrial applications.",
      url: "https://github.com/lucascaovilla/storage-manager",
    },
    {
      title: "LibFt - My own LibC",
      description: "Libft is my own implemented C library with the main functions of the original LibC.",
      url: "https://github.com/lucascaovilla/libft",
    },
    {
      title: "My Portfolio Site",
      description: "An angular application to present myself (it's this portfolio).",
      url: "https://github.com/lucascaovilla/lucascaovilla-front",
    },
    {
      title: "Introduction to Quantum Computing (pt-BR)",
      description: "Recording of MLSA live about quantum computing for begginers. Introduction to the main aspects of quantum systems.",
      url: "https://youtu.be/ikNW4etNXOg",
    },
  ];
}
