/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/ui/Navbar";
import { Footer } from "./components/ui/Footer";
import { ScrollProgressBar } from "./components/ui/ScrollProgressBar";
import { BackToTop } from "./components/ui/BackToTop";
import { ScrollToTop } from "./hooks/ScrollToTop";
import { Loader } from "./components/ui/Loader";
import { motion, AnimatePresence } from "motion/react";
import { ModalProvider } from "./components/ui/ModalContext";

// Lazy Pages
const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const About = lazy(() => import("./pages/About").then(module => ({ default: module.About })));
const Services = lazy(() => import("./pages/Services").then(module => ({ default: module.Services })));
const Projects = lazy(() => import("./pages/Projects").then(module => ({ default: module.Projects })));
const Contact = lazy(() => import("./pages/Contact").then(module => ({ default: module.Contact })));
const Team = lazy(() => import("./pages/Team").then(module => ({ default: module.Team })));
const FAQ = lazy(() => import("./pages/FAQ").then(module => ({ default: module.FAQ })));
const Pricing = lazy(() => import("./pages/Pricing").then(module => ({ default: module.Pricing })));
const Blog = lazy(() => import("./pages/Blog").then(module => ({ default: module.Blog })));
const Careers = lazy(() => import("./pages/Careers").then(module => ({ default: module.Careers })));
const TechStack = lazy(() => import("./pages/TechStack").then(module => ({ default: module.TechStack })));
const CaseStudies = lazy(() => import("./pages/CaseStudies").then(module => ({ default: module.CaseStudies })));
const Clients = lazy(() => import("./pages/Clients").then(module => ({ default: module.Clients })));
const Branches = lazy(() => import("./pages/Branches").then(module => ({ default: module.Branches })));
const Associates = lazy(() => import("./pages/Associates").then(module => ({ default: module.Associates })));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail").then(module => ({ default: module.ServiceDetail })));
const BranchDetail = lazy(() => import("./pages/BranchDetail").then(module => ({ default: module.BranchDetail })));

function AppContent() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-bg-light overflow-x-hidden">
      <ScrollProgressBar />
      <Navbar />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
          >
            <Suspense fallback={<Loader />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/service/:id" element={<ServiceDetail />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/team" element={<Team />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/tech-stack" element={<TechStack />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/branches" element={<Branches />} />
                <Route path="/branch/:id" element={<BranchDetail />} />
                <Route path="/associates" element={<Associates />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ModalProvider>
        <ScrollToTop />
        <AppContent />
      </ModalProvider>
    </Router>
  );
}
