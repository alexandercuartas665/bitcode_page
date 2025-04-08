import SeperatedBar from "@/components/Common/SeperatedBar";
import Banner from "@/pages/Banner";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import ContactForm from "./contact/ContactForm";
import Services from "./services/Services";
import Products from "./products/Products";

export const metadata = {
  title: "Inicio - BITCODE",
  description: "Pagina inicio.",
  icons: {
    icon: "/favicon.png"
  }
};

export default function Home() {
  return (
    <>
      <Navbar />

      <Banner />

      <SeperatedBar />

      <SeperatedBar />

      <Services />

      <SeperatedBar />

      <Products />

      <SeperatedBar />

      {/* <Patrocinadores /> */}

      <SeperatedBar />

      <ContactForm />

      <Footer />
    </>
  );
}
