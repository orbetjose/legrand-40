import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Vestimenta from "./pages/Vestimenta";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/codigo-de-vestimenta" element={<Vestimenta />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
