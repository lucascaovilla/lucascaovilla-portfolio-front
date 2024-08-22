import ProjectCardDTO from "./project-card.dto";

interface HomePortfolioDTO {
  backgroundImageWidth: number;
  backgroundImageHeight: number;
  backgroundImageAlt: string;
  backgroundImageAvifSrc: string;
  backgroundImageWebpSrc: string;
  backgroundImageJpgSrc: string;
  projectCards: Array<ProjectCardDTO>;
};

export default HomePortfolioDTO;
