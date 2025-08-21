import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";

import {Home} from "./pages/Home";
import {Services} from "./pages/Services";
import {About} from "./pages/About";
import {Contracts} from "./pages/Contracts";
import {Contact} from "./pages/Contact";

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
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
