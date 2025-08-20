import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import HomePage from "./Pages/HomePage/index"
import ProgramsPage from "./Pages/ProgramsPage";
import FacultyPage from "./Pages/FacultyPage";
import EventsPage from "./Pages/EventsPage";
import AboutPage from "./Pages/AboutPage";
import ContactUsPage from "./Pages/ContactUsPage";
import ScrollToTop from "./Components/ScrollToTop";
import ScrollUp from "./Components/ScrollUp";
import NotFound from "./Components/NotFound";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <RouterRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programmes" element={<ProgramsPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      <ScrollUp />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
