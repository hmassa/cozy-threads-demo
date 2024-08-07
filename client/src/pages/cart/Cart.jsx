import { useSelector } from "react-redux";
import { selectCartContents } from "../../redux/cartSlice";
import { CartItem } from "../../components/cartItem/CartItem";
import "./Cart.css";
import { useMemo } from "react";

export const Cart = () => {
    const cartContents = useSelector(selectCartContents);
    const totalCost = useMemo(() => {
        return cartContents.reduce((acc, item) => acc + item.price, 0)
    }, [cartContents]);
    
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
                    <div className="checkout-section">
                        <p>Total: ${totalCost}</p>
                        <button type="button">{"Checkout with Stripe"}</button>
                    </div>
                </>
            ) : (
                <p>{"Your cart is empty :("}</p>
            )}
        </div>
    );
};