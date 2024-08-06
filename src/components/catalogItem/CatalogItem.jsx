import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import "./CatalogItem.css";
import { useState } from "react";

export const CatalogItem = (props) => {
    const { image, title, description, price } = props;
    const [modalOpen, setModalOpen] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);

    const openDetails = () => {
        setAddedToCart(false);
        setModalOpen(true);
    };
    const closeDetails = () => setModalOpen(false);

    const addToCart = () => {
        console.log(props);
        setAddedToCart(true);
    };

    return (
        <div>
            <div className="product-container" onClick={openDetails}>
                <img className="product-image" src={image} alt={title}></img>
                <div>
                    <p className="product-title">{title}</p>
                    <p className="price">${price}</p>
                </div>
            </div>
            <Dialog open={modalOpen} onClose={closeDetails}>
                <div className="modal-contents">
                    <IconButton
                        aria-label="close"
                        onClick={closeDetails}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <img src={image} alt={title}></img>
                    <div className="modal-details">
                        <p className="product-title">{title}</p>
                        <p className="price">${price}</p>
                        <p>{description}</p>
                        {addedToCart ? (
                            <button className="added-to-cart-button">
                                Added To Cart
                            </button>
                        ) : (
                            <button
                                className="add-to-cart-button"
                                type="button"
                                onClick={addToCart}
                            >
                                Add To Cart
                            </button>
                        )}
                    </div>
                </div>
            </Dialog>
        </div>
    );
};
