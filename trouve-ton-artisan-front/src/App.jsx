import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ArtisanProfile from "./pages/ArtisanProfile";
import ArtisansList from "./pages/ArtisansList";
import BeingBuilt from "./pages/BeingBuilt";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/artisans" element={<ArtisansList />}></Route>
          <Route path="/artisans/:id" element={<ArtisanProfile />}></Route>
          <Route path="/being-built" element={<BeingBuilt />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
