import { useEffect, useState } from "react";
import { CatalogItem } from "../../components/catalogItem/CatalogItem";
import "./Catalog.css";

export const Catalog = ({ category, title }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`/data/products.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                const allItems = data.items;
                if (category === "all") {
                    setItems(allItems);
                } else {
                    const fliteredItems = allItems.filter(
                        (item) => item.category === category
                    );
                    setItems(fliteredItems);
                }
            })
            .catch((error) =>
                console.error(
                    "There was a problem while fetching items:",
                    error
                )
            );
    }, [category]);

    return (
        <div className="catalog-container">
            <h2>{title}</h2>
            <div className="catalog">
                {items.map((item) => (
                    <CatalogItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};
