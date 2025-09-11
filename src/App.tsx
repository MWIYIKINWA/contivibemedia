
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import StoreNews from "./pages/StoreNews";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { RadioProvider } from "./context/AppContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ServiceDetail from "./pages/ServiceDetail";
import NewsDetail from "./pages/NewsDetail";
import GoToTop from "./components/GoToTop";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      offset: 120,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RadioProvider>
          <BrowserRouter>
          <GoToTop/>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services/:id" element={<ServiceDetail />} /> 
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/store-news" element={<StoreNews />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </RadioProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
