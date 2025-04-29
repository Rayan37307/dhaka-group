
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PartnerBrandsSlider from "@/components/PartnerBrandsSlider";
import ResortsList from "@/components/ResortsList";
import Footer from "@/components/Footer";
import About from "@/components/About";
import BoardMembers from "@/components/BoardMem";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PartnerBrandsSlider />
      <About />
      <ResortsList />
      <BoardMembers />
      <Contact />
      <Footer />
    </main>
  );
}
