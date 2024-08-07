import { useSelector } from "react-redux";
import { selectCartContents } from "../../redux/cartSlice";
import { CartItem } from "../../components/cartItem/CartItem";
import "./Cart.css";

export const Cart = () => {
    const cartContents = useSelector(selectCartContents);
    return (
        <div className="cart-container">
            <h2>{"My Cart"}</h2>
            {cartContents.length > 0 ? (
                <>
                    <div className="item-list">
                        {cartContents.map((item, i) => {
                            return <CartItem key={i} {...item} />;
                        })}
                    </div>
                    <div className="checkout-button">
                        <button type="button">{"Checkout"}</button>
                    </div>
                </>
            ) : (
                <p>{"Your cart is empty :("}</p>
            )}
        </div>
    );
};
