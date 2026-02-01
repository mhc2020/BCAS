import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import DonateSponsor from "../pages/DonateSponsor";
import EventDetail from "../pages/EventDetails";
import Events from "../pages/Events";
import Executive from "../pages/Executive";
import Home from "../pages/Home";
import Membership from "../pages/Membership";
import News from "../pages/News";
import NewsDetail from "../pages/NewsDetails";
import NotFound from "../pages/NotFound";
// import Privacy from "../pages/Privacy";
// import Terms from "../pages/Terms";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:slug" element={<EventDetail />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:slug" element={<NewsDetail />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/donate-sponsor" element={<DonateSponsor />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/executive" element={<Executive />} />
      <Route path="*" element={<NotFound />} />
      {/* 
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
       */}
    </Routes>
  );
}
