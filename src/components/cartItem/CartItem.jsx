import "./CartItem.css";

export const CartItem = (props) => {
    const { image, title, price, description } = props;

    return (
        <div className="cart-card">
            <img className="cart-image" src={image} alt={title}></img>
            <div className="cart-item-details">
                <p className="product-title">{title}</p>
                <p>{description}</p>
                <p className="price">${price}</p>
            </div>
        </div>
    )
}