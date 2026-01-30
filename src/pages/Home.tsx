import CalloutStrip from "../components/home/CalloutStrip";
import Carousel from "../components/home/Carousel";
import Hero from "../components/home/Hero";
import InfoCards from "../components/home/InfoCards";

export default function Home() {
  return (
    <div className="space-y-10">
      {/* 바로 navbar 아래 carousel */}
      <Carousel />

      {/* hero (your left-right layout) */}
      <Hero />

      {/* 3 info cards */}
      <InfoCards />

      {/* callout strip */}
      <CalloutStrip />
    </div>
  );
}
