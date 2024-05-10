import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Services from "./components/Services/services";
// import Works from "./components/Works/works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      {/* <Works /> */}
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
