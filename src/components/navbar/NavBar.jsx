import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav id="navbar">
        <Link to="men">MEN'S APPAREL</Link>
        <Link to="women">WOMEN'S APPAREL</Link>
        <Link to="accessories">ACCESSORIES</Link>
    </nav>
  );
};
