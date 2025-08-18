import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProgramsPage from "./Pages/ProgramsPage";
import FacultyPage from "./Pages/FacultyPage";
import EventsPage from "./Pages/EventsPage";
import AboutPage from "./Pages/AboutPage";
import ContactUsPage from "./Pages/ContactUsPage";
import ScrollToTop from "./Components/ScrollToTop";
import ScrollUp from "./Components/ScrollUp";
import NotFound from "./Components/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouterRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      <ScrollUp />
    </BrowserRouter>
  );
};

export default AppRoutes;
