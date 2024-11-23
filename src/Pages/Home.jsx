import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Portfolio from "../Components/Portfolio";
import WhyChooseUs from "../Components/WhyChooseUs";
import AboutUs from "../Components/AboutUs";
import Blog from "../Components/Blog";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Blog />
      <Testimonials />
    </main>
  );
};

export default Home;
