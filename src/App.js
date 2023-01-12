import React, { useEffect } from "react";
import "./App.css";
<<<<<<< HEAD
import { fetchCatalog } from "./redux/reducers/catalog_slice";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Model2D from "./pages/Model-2D";
import Model3D from "./pages/Model-3D";
=======
import Navbar from "./components/navbar";
import Main from "./components/main";
>>>>>>> 93e7294 (redux and components added)

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalog());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Navbar />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model-2d" element={<Model2D />} />
        <Route path="/model-3d/:name" element={<Model3D />} />
      </Routes>
      <Footer />
=======
      <Main />
>>>>>>> 93e7294 (redux and components added)
    </div>
  );
}

export default App;
