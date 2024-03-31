import AboutUsOne from "@/components/Sections/aboutUs/AboutUs1";
import FooterOne from "@/components/Sections/footer/footerOne";
import HeaderOne from "@/components/Sections/headers/HeaderOne";
import HeaderTwo from "@/components/Sections/headers/HeaderTwo";
import HeroSectionOne from "@/components/Sections/heroSections/HeroSectionOne";
import HeroSectionTwo from "@/components/Sections/heroSections/HeroSectionTwo";
import RatingSectionOne from "@/components/Sections/ratings/rating1";
import ResumeOne from "@/components/Sections/resume/ResumeOne";
import ServicesOne from "@/components/Sections/services/ServicesOne";
import StaticOneSection from "@/components/Sections/statis/StatisOne";
import WhyUsOne from "@/components/Sections/whyUs/WhyUsOne";

type props = {
  info: any;
};
const THEME_VAR = { LIGHT: "light", DARK: "dark" };

const SectionExtractor = ({ info }: props) => {
  switch (info.elementId) {
    case "10001":
      return <HeroSectionOne info={info} />;
    case "10002":
      return <HeroSectionTwo info={info} />;
    case "00000":
      return <HeaderOne info={info} />;
    case "00001":
      return <HeaderTwo info={info} />;
    case "20001":
      return <ServicesOne info={info} />;
    case "30001":
      return <RatingSectionOne info={info} />;
    case "40001":
      return <AboutUsOne info={info} />;
    case "50001":
      return <StaticOneSection info={info} />;
    case "60001":
      return <WhyUsOne info={info} />;
    case "70001":
      return <ResumeOne info={info} />;
    case "99999":
      return <FooterOne info={info} />;
    default:
      return <section>unknown section</section>;
  }
};

export default SectionExtractor;
