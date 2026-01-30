import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
// import Executive from "../pages/Executive";
import EventDetail from "../pages/EventDetails";
import Events from "../pages/Events";
// import News from "../pages/News";
// import NewsDetail from "../pages/NewsDetail";
// import Membership from "../pages/Membership";
// import DonateSponsor from "../pages/DonateSponsor";
// import Contact from "../pages/Contact";
// import Privacy from "../pages/Privacy";
// import Terms from "../pages/Terms";
// import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:slug" element={<EventDetail />} />
      {/* <Route path="/executive" element={<Executive />} />
      
      
      <Route path="/news" element={<News />} />
      <Route path="/news/:slug" element={<NewsDetail />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/donate-sponsor" element={<DonateSponsor />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
