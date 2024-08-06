import { useEffect, useState } from "react";
import { CatalogItem } from "../../components/catalogItem/CatalogItem";
import "./Catalog.css";

export const Catalog = ({ category }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`/data/${category}.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => setItems(data.items))
            .catch((error) =>
                console.error(
                    "There was a problem while fetching items:",
                    error
                )
            );
    }, [category]);

    return (
        <div className="catalog">
            {items.map((item, i) => (
                <CatalogItem key={i} {...item} />
            ))}
        </div>
    );
};
