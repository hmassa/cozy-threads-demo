import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Cart } from "./pages/cart/Cart";
import { Catalog } from "./pages/catalog/Catalog";
import { Header } from "./components/header/Header";
import { NavBar } from "./components/navbar/NavBar";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <NavBar />
                <Routes>
                    <Route path="/" element={<Catalog />} />
                    <Route path="/men" element={<Catalog />} />
                    <Route path="/women" element={<Catalog />} />
                    <Route path="/accessories" element={<Catalog />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
