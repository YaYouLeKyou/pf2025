import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="bg-primary overflow-x-hidden scroll-smooth"
        style={{
          scrollBehavior: "smooth", // Ensure smooth scrolling for all browsers
          WebkitOverflowScrolling: "touch", // iOS momentum scrolling
        }}
      >
        {/* Navbar and Hero Section */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* Main Sections */}
        <main className="flex flex-col gap-16 sm:gap-24">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact /> {/* StarsCanvas inside Contact */}
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
