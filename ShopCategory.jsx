import React, { useContext } from "react";
import './CSS/ShopCategory.css';
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);

 
    const filteredProducts = all_product.filter(item => item.category === props.category);

    return (
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} alt="Category Banner" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-{filteredProducts.length}</span> out of {all_product.length} products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="Sort Dropdown" />
                </div>
            </div>
            <div className="shopcategory-products">
                {filteredProducts.map(item => (
                    <Item
                        key={item.id} // Use item.id as the unique key
                        id={item.id} // Pass the id prop
                        name={item.name} // Pass the name prop
                        image={item.image} // Pass the image prop
                        new_price={item.new_price} // Pass the new_price prop
                        old_price={item.old_price} // Pass the old_price prop
                    />
                ))}
            </div>
            <div className="shopcategory-loadmore">
                <button className="load-more-button">Explore More</button>
            </div>
        </div>
    );
};

export default ShopCategory;
