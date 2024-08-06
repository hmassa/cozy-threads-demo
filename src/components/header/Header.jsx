import { ShoppingCart } from "@mui/icons-material";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div id="header-container">
        <div id="name-container">
          <img id="logo" src="/logo.png" alt="Cozy Threads logo" />
          <span id="title">cozy threads</span>
        </div>
        <ShoppingCart fontSize="large" />
      </div>
    </header>
  );
};
