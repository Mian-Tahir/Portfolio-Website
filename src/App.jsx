import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Spinner from "./components/Spinner"; // Import Spinner

function App() {
  // State to manage loading
  const [loading, setLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    // Simulating data loading time
    setTimeout(() => {
      setLoading(false); // Set loading to false after data loads
    }, 2000);
  }, []);

  // If still loading, display the spinner
  if (loading) {
    return <Spinner />;
  }

  // Render the app once loading is done
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <PortFolio />
        <Experiance />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
