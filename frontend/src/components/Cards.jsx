import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import exampleCard from "../../docs/images/exampleCard.png";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Cards = (props) => {
    const cardStyle = {
        borderColor: "#a0583c",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Center content vertically
        alignItems: "center", // Center content horizontally
        padding: "10px",
        width: "20vw",
        height: "40vh",
        overflow: "hidden", // Make card responsive to its container
    }
    const imgStyle = {
        width: "100%", // Make image responsive to its container
        height: "auto", // Maintain aspect ratio
        maxWidth: "15vhpx",
        maxHeight: "15vh",
        objectFit: "contain",
        overflow: "hidden",  // Limit maximum image width
    }
    const buttonStyle = {
        backgroundColor: "#a0583c",
        color: "white",
    }
    const font = {
        fontSize: "1rem", // Relative font size (1rem = 16px)
    }
    const cardBodyStyle = {
        padding: "15px", // Add padding to the card body
        maxWidth: "100%", // Ensure content doesn't exceed card width
    }
    const prodURL = String(props.link);
    const Price = String(props.price);
    const ItemName = String(props.name);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [cartCount, setCartCount] = useState(0); // State for cart count

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await api.post("/api/user/addCart/", { itemName: ItemName, price: Price, imgURL: prodURL});
            setSubmitted(true);
            setCartCount(cartCount + 1); // Increment cart count
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        } catch (error) {
            console.error(error);
            alert("Error occurred while adding to cart.");
            setLoading(false);
        }
    };

    return (
        <div className="card" style={cardStyle}>
            <img src={props.product} className="card-img-top" alt="../docs/images/exampleCard.png" style={imgStyle} />
            <div className="card-body" style={cardBodyStyle}>
                <p className="card-title fw-bolder fs-6" style={font}><a href={props.link}>{props.name}</a></p>
                <p className="card-text fw-medium fs-4" style={font}>From {props.price}</p>
                <p className="card-text fw-medium" style={font}></p>
                <button className="btn" style={submitted ? { ...buttonStyle, backgroundColor: 'green' } : buttonStyle} onClick={handleSubmit} disabled={loading}>
                    {loading ? 'Adding...' : submitted ? `Added to Cart ✔️(${cartCount})` : `Add to Cart`} {/* Display cart count */}
                </button>
            </div>
        </div>
    );
}

export default Cards;
