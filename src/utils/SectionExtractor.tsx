import AboutUsOne from "@/components/Sections/aboutUs/AboutUs1";
import HeaderOne from "@/components/Sections/headers/HeaderOne";
import HeroSectionOne from "@/components/Sections/heroSections/HeroSectionOne";
import RatingSectionOne from "@/components/Sections/ratings/rating1";
import ServicesOne from "@/components/Sections/services/ServicesOne";
import StaticOneSection from "@/components/Sections/statis/StatisOne";
import WhyUsOne from "@/components/Sections/whyUs/WhyUsOne";

type props = {
  info: any;
};
const THEME_VAR = { LIGHT: "light", DARK: "dark" };

const SectionExtractor = ({ info }: props) => {
  switch (info.elementId) {
    case "100a01":
      return <HeroSectionOne components={info.data} />;
    case "00000":
      return <HeaderOne components={info.data} />;
    case "200aa01":
      return <ServicesOne components={info.data} />;
    case "300a01":
      return <RatingSectionOne components={info.data} />;
    case "400a01":
      return <AboutUsOne components={info.data} />;
    case "50a001":
      return <StaticOneSection components={info.data} />;
    case "60a001":
      return <WhyUsOne components={info.data} />;
    default:
      return <section>unknown section</section>;
  }
};

export default SectionExtractor;
