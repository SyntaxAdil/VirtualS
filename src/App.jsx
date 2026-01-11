import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Feature } from "./components/Feature";
import { Workflow } from "./components/Workflow";
import { Price } from "./components/Price";
import { Feedback } from "./components/Feedback";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <section>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <Workflow />
        <Price />
        <Feedback />
      </div>
      <Footer />

      <ScrollToTop />
    </section>
  );
}

export default App;
