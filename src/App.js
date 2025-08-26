import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Spinner } from "./components/Spinner";

import { Home } from "./pages/Home";
import { Services } from "./pages/Services/Services";
import { About } from "./pages/About";
import { Contracts } from "./pages/Contracts";
import { Contact } from "./pages/Contact";
import { EventStaff } from "./pages/Services/EventStaff";
import { HotelStaff } from "./pages/Services/HotelStaff";
import { CleaningStaff } from "./pages/Services/CleaningStaff";
import ScrollToTop from "./components/ScrollToTop";
import { ChefsKitchen } from "./pages/Services/ChefsKitchen";
import { FoodService } from "./pages/Services/FoodService";
import { ITSoftware } from "./pages/Services/ItSoftware";
import { SalesMarketing } from "./pages/Services/SalesMarketing";
import { Finance } from "./pages/Services/Finance";
import { HRRecruitment } from "./pages/Services/HRRecruitment";
import { CareService } from "./pages/Services/CareService";
import { LuxuryTravel } from "./pages/Services/LuxuryTravel";
import { BusinessAdmin } from "./pages/Services/BusinessAdmin";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for window + images to fully load
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 800); // small delay for smoother effect
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/event" element={<EventStaff />} />
            <Route path="/services/hotel" element={<HotelStaff />} />
            <Route path="/services/cleaning" element={<CleaningStaff />} />
            <Route path="/services/chefs" element={<ChefsKitchen />} />
            <Route path="/services/food-service" element={<FoodService />} />
            <Route path="/services/it" element={<ITSoftware />} />
            <Route path="/services/sales" element={<SalesMarketing />} />
            <Route path="/services/finance" element={<Finance />} />
            <Route path="/services/hr" element={<HRRecruitment />} />
            <Route path="/services/care" element={<CareService />} />
            <Route path="/services/luxury" element={<LuxuryTravel />} />
            <Route path="/services/business" element={<BusinessAdmin />} />
            <Route path="/about" element={<About />} />
            <Route path="/contracts" element={<Contracts />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
