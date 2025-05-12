import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";


export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}
