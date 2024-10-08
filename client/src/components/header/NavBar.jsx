import { Link } from "react-router-dom";
import "./Header.css";

export const NavBar = () => {
  return (
    <nav id="navbar">
        <LinkItem to="men" name="MEN'S APPAREL" />
        <LinkItem to="women" name="WOMEN'S APPAREL" />
        <LinkItem to="accessories" name="ACCESSORIES" />
        <LinkItem to="" name="ALL" />
    </nav>
  );
};

const LinkItem = ({to, name}) => {
    return (
        <div className="link-container">
            <Link className="link" to={to}>{name}</Link>
        </div>
    )
}
