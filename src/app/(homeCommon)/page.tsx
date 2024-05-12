import Contact from "@/component/ui/Contact/Contact";
import AboutUs from "@/component/ui/Home/AboutUs";
import Brand from "@/component/ui/Home/Brand";
import FlashSale from "@/component/ui/Home/FlashSale";
import Gallery from "@/component/ui/Home/Gallery";
import HeroSection from "@/component/ui/Home/HeroSection";
import Service from "@/component/ui/Home/CustomerSupport";
import TrendingProduct from "@/component/ui/Home/TrendingProduct";


export default function Home() {
  return (
    <>
      {/* <HeroSection/> */}
      <FlashSale />
      <Brand />
      <TrendingProduct />
      <Gallery />
      <AboutUs />
      <Service />
      <Contact />
    </>
  );
}
