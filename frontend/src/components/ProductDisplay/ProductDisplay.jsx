import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    const [selectedSize, setSelectedSize] = useState("");

    // Wait until product data is available
    if (!product) {
        return <div>Loading product...</div>;
    }

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size before adding the product to cart.");
            return;
        }

        addToCart(product.id);
    };

    return (
        <div className='productdisplay'>

            {/* LEFT SIDE - PRODUCT IMAGES */}
            <div className="productdisplay-left">

                <div className="productdisplay-img-list">
                    <img
                        className="prodimg"
                        src={product.image}
                        alt={product.name}
                    />

                    <img
                        className="prodimg"
                        src={product.image}
                        alt={product.name}
                    />

                    <img
                        className="prodimg"
                        src={product.image}
                        alt={product.name}
                    />

                    <img
                        className="prodimg"
                        src={product.image}
                        alt={product.name}
                    />
                </div>

            </div>

            {/* MAIN PRODUCT IMAGE */}
            <div className="productdisplay-img">
                <img
                    className='productdisplay-main-img'
                    src={product.image}
                    alt={product.name}
                />
            </div>

            {/* RIGHT SIDE - PRODUCT DETAILS */}
            <div className="productdisplay-right">

                <h1>{product.name}</h1>

                {/* RATING */}
                <div className="productdisplay-right-star">

                    <img
                        className="starimg"
                        src={star_icon}
                        alt="star"
                    />

                    <img
                        className="starimg"
                        src={star_icon}
                        alt="star"
                    />

                    <img
                        className="starimg"
                        src={star_icon}
                        alt="star"
                    />

                    <img
                        className="starimg"
                        src={star_icon}
                        alt="star"
                    />

                    <img
                        className="starimg"
                        src={star_dull_icon}
                        alt="dull star"
                    />

                    <p>(122)</p>

                </div>

                {/* PRICE */}
                <div className="productdisplay-right-prices">

                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>

                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>

                </div>

                {/* DESCRIPTION */}
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt,
                    close-fitting and with a round neckline and short sleeves,
                    worn as an undershirt or outer garment.
                </div>

                {/* SIZE SELECTION */}
                <div className="productdisplay-right-size">

                    <h1>Select Size</h1>

                    <div className="productdisplay-right-sizes">

                        {["S", "M", "L", "XL", "XXL"].map((size) => (

                            <div
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={
                                    selectedSize === size
                                        ? "selected-size"
                                        : ""
                                }
                            >
                                {size}
                            </div>

                        ))}

                    </div>

                    {/* SELECTED SIZE */}
                    {selectedSize && (
                        <p className="selected-size-text">
                            Selected Size: <strong>{selectedSize}</strong>
                        </p>
                    )}

                    {/* ADD TO CART */}
                    <button onClick={handleAddToCart}>
                        ADD TO CART
                    </button>

                    {/* CATEGORY */}
                    <p className='productdisplay-right-category'>
                        <span>Category :</span>
                        {product.category}
                    </p>

                    {/* TAGS */}
                    <p className='productdisplay-right-category'>
                        <span>Tags :</span>
                        Modern, Latest
                    </p>

                </div>

            </div>

        </div>
    )
}

export default ProductDisplay