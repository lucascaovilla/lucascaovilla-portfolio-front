import HomeAboutDTO from "./home-about.dto";
import HomeBannerDTO from "./home-banner.dto";
import HomePortfolioDTO from "./home-portfolio.dto";

interface HomeDTO {
  homeBanner: HomeBannerDTO;
  homeAbout: HomeAboutDTO;
  homePortfolio: HomePortfolioDTO;
};

export default HomeDTO;
