import React, { lazy, Suspense } from "react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Skills = lazy(() => import("./components/Skills"));

const renderLoader = () => <p>Loading...</p>;

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <Suspense fallback={renderLoader()}>
        <About />
        <Skills />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
