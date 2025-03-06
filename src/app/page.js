import SeperatedBar from "@/components/Common/SeperatedBar";
import About from "@/pages/About";
import Banner from "@/pages/Banner";
import FeaturesTwo from "@/pages/FeaturesTwo";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import ContactForm from "./contact/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />

      <Banner />

      <FeaturesTwo />

      <SeperatedBar />

      <About />

      <SeperatedBar />

      <Services />

      <SeperatedBar />

      <Projects />

      <SeperatedBar />

      {/* <Patrocinadores /> */}

      <SeperatedBar />

      <ContactForm />

      <Footer />
    </>
  );
}
