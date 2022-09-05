import { useState } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import AboutComponent from "./pages/About";
import HomeComponent from "./pages/Home";
import StoreComponent from "./pages/Store";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <NavbarComponent />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/store" element={<StoreComponent />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
