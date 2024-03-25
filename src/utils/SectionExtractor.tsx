import AboutUsOne from "@/components/Sections/aboutUs/AboutUs1";
import FooterOne from "@/components/Sections/footer/footerOne";
import HeaderOne from "@/components/Sections/headers/HeaderOne";
import HeroSectionOne from "@/components/Sections/heroSections/HeroSectionOne";
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
      return <HeroSectionOne components={info.data} />;
    case "00000":
      return <HeaderOne components={info.data} />;
    case "20001":
      return <ServicesOne components={info.data} />;
    case "30001":
      return <RatingSectionOne components={info.data} />;
    case "40001":
      return <AboutUsOne components={info.data} />;
    case "50001":
      return <StaticOneSection components={info.data} />;
    case "60001":
      return <WhyUsOne components={info.data} />;
    case "70001":
      return <ResumeOne components={info.data} />;
    case "99999":
      return <FooterOne components={info.data} />;
    default:
      return <section>unknown section</section>;
  }
};

export default SectionExtractor;
