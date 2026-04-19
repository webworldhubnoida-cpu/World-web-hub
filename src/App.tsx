/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/ui/Navbar";
import { Footer } from "./components/ui/Footer";
import { ScrollProgressBar } from "./components/ui/ScrollProgressBar";
import { BackToTop } from "./components/ui/BackToTop";
import { ScrollToTop } from "./hooks/ScrollToTop";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Team } from "./pages/Team";
import { FAQ } from "./pages/FAQ";
import { Pricing } from "./pages/Pricing";
import { Blog } from "./pages/Blog";
import { Careers } from "./pages/Careers";
import { TechStack } from "./pages/TechStack";
import { CaseStudies } from "./pages/CaseStudies";
import { Clients } from "./pages/Clients";
import { Branches } from "./pages/Branches";
import { Associates } from "./pages/Associates";
import { ServiceDetail } from "./pages/ServiceDetail";
import { BranchDetail } from "./pages/BranchDetail";

import { motion, AnimatePresence } from "motion/react";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-bg-light overflow-x-hidden">
        <ScrollProgressBar />
        <Navbar />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Routes>
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
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}
