import GlobalTitle from "../../Components/GlobalTitle";
import AboutUs from "./AboutUs";
import Benefits from "./Benefits";
import Card from "./Card";

const LandingPage = () => {
  return (
    <>
      <GlobalTitle title={"LANDING PAGE DESIGN"} />
      <AboutUs/>
      <Card/>
      <Benefits/>
    </>
  );
};

export default LandingPage;
