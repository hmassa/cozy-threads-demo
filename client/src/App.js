import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Cart } from "./pages/cart/Cart";
import { Catalog } from "./pages/catalog/Catalog";
import { Header } from "./components/header/Header";
import { CheckoutRedirect } from "./pages/checkoutRedirect/CheckoutRedirect";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Header/>}>
                        <Route index element={<Catalog category={"all"} title={"All Items"}/>} />
                        <Route path="/men" element={<Catalog category={"mens"} title={"Men's Apparel"}/>} />
                        <Route path="/women" element={<Catalog category={"womens"} title="Women's Apparel"/>}/>
                        <Route path="/accessories" element={<Catalog category={"accessories"} title={"Accessories"}/>} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/success" element={<CheckoutRedirect />} />
                        <Route path="/cancelled" element={<CheckoutRedirect failure/>} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
