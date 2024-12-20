import GlobalTitle from "../../Components/GlobalTitle";
import OurTeam from "../../Components/OurTeam";
import AboutKeyan from "./AboutKeyan";
import HowDoWe from "./HowDoWe";
import PopularService from "./PopularService";


const AboutPage = () => {
  return (
    <>
      <GlobalTitle title={"ABOUT US"} />
      <AboutKeyan/>
      <PopularService/>
      <HowDoWe />
      <OurTeam />
    </>
  );
};

export default AboutPage;
