import AboutSection from "../components/home/AboutSection";
import CalloutStrip from "../components/home/CalloutStrip";
import Carousel from "../components/home/Carousel";
import EnquirySection from "../components/home/EnquirySection";
import EventsSection from "../components/home/EventsSection";
import NewsSection from "../components/home/NewsSection";

export default function Home() {
  return (
    <div className="w-full">
      {/* Full width only */}
      <Carousel />

      {/* Everything below is centered */}
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* <div className="mt-8">
          <Hero />
        </div> */}

        <div className="mt-14">
          <AboutSection />
        </div>

        <div className="mt-14">
          <EventsSection />
        </div>

        <div className="mt-14">
          <NewsSection />
        </div>

        <div className="mt-14">
          <CalloutStrip />
        </div>

        <div className="mt-14">
          <EnquirySection />
        </div>
      </div>
    </div>
  );
}
