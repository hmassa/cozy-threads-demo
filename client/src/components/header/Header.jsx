import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../redux/cartSlice";
import "./Header.css";

export const Header = () => {
  const cartCount = useSelector(selectCartCount);
  return (
    <header>
      <div id="header-container">
        <div id="name-container">
          <img id="logo" src="/logo.png" alt="Cozy Threads logo" />
          <span id="title">cozy threads</span>
        </div>
        <Link to={"cart"}>
          <div id="cart">
            <span>{cartCount}</span>
            <ShoppingCart fontSize="large" />
          </div>
        </Link>
      </div>
    </header>
  );
};