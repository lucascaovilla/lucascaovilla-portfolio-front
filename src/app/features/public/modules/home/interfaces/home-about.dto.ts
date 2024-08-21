import TechnologyCardDTO from "./technology-card.dto";

interface HomeAboutDTO {
  description: string;
  caption: string;
  technologyCards: Array<TechnologyCardDTO>;
};

export default HomeAboutDTO;
