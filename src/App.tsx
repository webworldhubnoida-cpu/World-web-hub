/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/ui/Navbar";
import { Footer } from "./components/ui/Footer";
import { ScrollProgressBar } from "./components/ui/ScrollProgressBar";
import { BackToTop } from "./components/ui/BackToTop";
import { ScrollToTop } from "./hooks/ScrollToTop";
import { motion, AnimatePresence } from "motion/react";
import { ModalProvider } from "./components/ui/ModalContext";
import { FloatingButtons } from "./components/ui/FloatingButtons";
import { PageTransition } from "./components/ui/PageTransition";

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
const Videos = lazy(() => import("./pages/Videos").then(module => ({ default: module.Videos })));
const Gallery = lazy(() => import("./pages/Gallery").then(module => ({ default: module.Gallery })));
const TechStack = lazy(() => import("./pages/TechStack").then(module => ({ default: module.TechStack })));
const Certificates = lazy(() => import("./pages/Certificates").then(module => ({ default: module.Certificates })));
const Clients = lazy(() => import("./pages/Clients").then(module => ({ default: module.Clients })));
const Branches = lazy(() => import("./pages/Branches").then(module => ({ default: module.Branches })));
const Associates = lazy(() => import("./pages/Associates").then(module => ({ default: module.Associates })));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail").then(module => ({ default: module.ServiceDetail })));
const BranchDetail = lazy(() => import("./pages/BranchDetail").then(module => ({ default: module.BranchDetail })));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy").then(module => ({ default: module.PrivacyPolicy })));
const TermsConditions = lazy(() => import("./pages/TermsConditions").then(module => ({ default: module.TermsConditions })));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy").then(module => ({ default: module.RefundPolicy })));
const WorkProcess = lazy(() => import("./pages/WorkProcess").then(module => ({ default: module.default })));

function AppContent() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-bg-light overflow-x-hidden relative">
      <ScrollProgressBar />
      <Navbar />
      
      <main className="flex-grow pt-[110px] lg:pt-[135px]">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/service/:id" element={<PageTransition><ServiceDetail /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
            <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
            <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
            <Route path="/videos" element={<PageTransition><Videos /></PageTransition>} />
            <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
            <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
            <Route path="/tech-stack" element={<PageTransition><TechStack /></PageTransition>} />
            <Route path="/certificates" element={<PageTransition><Certificates /></PageTransition>} />
            <Route path="/clients" element={<PageTransition><Clients /></PageTransition>} />
            <Route path="/branches" element={<PageTransition><Branches /></PageTransition>} />
            <Route path="/branch/:id" element={<PageTransition><BranchDetail /></PageTransition>} />
            <Route path="/associates" element={<PageTransition><Associates /></PageTransition>} />
            <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
            <Route path="/terms-conditions" element={<PageTransition><TermsConditions /></PageTransition>} />
            <Route path="/refund-policy" element={<PageTransition><RefundPolicy /></PageTransition>} />
            <Route path="/WorkProcess" element={<PageTransition><WorkProcess /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <FloatingButtons />
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
