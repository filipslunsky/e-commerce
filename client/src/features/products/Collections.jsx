import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./state/slice";
import plusIcon from '../../assets/img/icon-plus.svg';
import minusIcon from '../../assets/img/icon-minus.svg';
import cartIcon from '../../assets/img/icon-cart-white.svg';
import closeIcon from '../../assets/img/icon-close.svg';
import nextIcon from '../../assets/img/icon-next.svg';
import previousIcon from '../../assets/img/icon-previous.svg';
import './productPage.css';

const Collections = () => {
    const [amount, setAmount] = useState(0);
    const [index, setIndex] = useState(0);
    const [lightBox, setLightBox] = useState(false);

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const status = useSelector((state) => state.products.status);

    const BASE_URL = `${import.meta.env.VITE_API_URL}`;

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const collectionProduct = products?.filter(product => product.category === 'collections') || [];
    const thumbnailsFromBE = collectionProduct[0]?.thumbnails || [];
    const imagesFromBE = collectionProduct[0]?.images || [];

    const displayImage = (index) => {
        setIndex(index);
    };

    const displayNextImage = () => {
        index < imagesFromBE.length - 1 ? setIndex(index + 1) : setIndex(0);
    };

    const displayPrevImage = () => {
        index > 0 ? setIndex(index - 1) : setIndex(imagesFromBE.length - 1);
    };

    const addOne = () => {
        setAmount(amount + 1);
    };

    const removeOne = () => {
            setAmount(amount > 0 ? amount - 1 : 0);
    };

    const toggleLightBox = () => {
        setLightBox(!lightBox);
    };

    if (status !== 'success') {
        return <h2 className="statusMessage">Loading...</h2>;
    };

    if (status === 'failed') {
        return <h2 className="statusMessage">Ooops, something is wrong, the products could not be loaded. Please try again later...</h2>;
    };

    if (collectionProduct.length === 0 || !collectionProduct[0]) {
        return <h2>No products available for the 'collections' category, please try a different one.</h2>;
    };

    return (
        <>
            <div className={lightBox ? "productContainer lightBoxOn" : "productContainer"}>
                <div className="leftProductContainer">
                    <div className="imageContainer">
                        <
                            img
                            src={`${BASE_URL}/${imagesFromBE[index]}`}
                            alt="large product image"
                            onClick={toggleLightBox}
                            className="mainImage"
                        />
                        <button onClick={displayPrevImage} className="previousButtonMobile"><img src={previousIcon} alt="left arrow" /></button>
                        <button onClick={displayNextImage} className="nextButtonMobile"><img src={nextIcon} alt="right arrow" /></button>
                    </div>
                    <div className="thumbnailsContainer">
                        {
                            thumbnailsFromBE.map((item, indx) => {
                                return (
                                        <
                                        img
                                        key={indx}
                                        src={`${BASE_URL}/${item}`}
                                        alt="small product image"
                                        onClick={() => displayImage(indx)}
                                        className={index == indx ? 'currentlyDisplayed thumbnailImage' : 'thumbnailImage'}
                                        />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="rightProductContainer">
                    <h2 className="productMaufacturer">{collectionProduct[0].manufacturer}</h2>
                    <h3 className="productName">{collectionProduct[0].name}</h3>
                    <p className="productDescription">{collectionProduct[0].description}</p>
                    <div className="priceContainer">
                        <div className="leftPriceContainer"><span className="currentPrice">{collectionProduct[0].currentPrice}</span><span className="discount">{collectionProduct[0].discountInPercent}</span></div>
                        <p className="originalPrice">{collectionProduct[0].originalPrice}</p>
                    </div>
                    <div className="amountContainer">
                        <div className="calculateContainer">
                            <button className="minusButton" onClick={removeOne}><img src={minusIcon} alt="minus symbol" /></button>
                            <span className="amountNumber">{amount}</span>
                            <button className="plusButton" onClick={addOne}><img src={plusIcon} alt="plus symbol" /></button>
                        </div>
                        <button className="addCartButton"><img src={cartIcon} alt="cart icon" className="cartIconWhite" /><span className="addCartButtonText"></span>Add to cart</button>
                    </div>
                </div>
            </div>
            {
                lightBox
                ?
                <div className="lightBoxContainer">
                    <div className="lightBoxImageContainer">
                        <button onClick={toggleLightBox} className="closeButton"><img src={closeIcon} alt="cross icon" /></button>
                        <
                            img
                            src={`${BASE_URL}/${imagesFromBE[index]}`}
                            alt="large product image"
                            onClick={toggleLightBox}
                            className="lightBoxMainImage"
                            />
                            <button onClick={displayPrevImage} className="previousButton"><img src={previousIcon} alt="left arrow" /></button>
                            <button onClick={displayNextImage} className="nextButton"><img src={nextIcon} alt="right arrow" /></button>
                    </div>
                    <div className="lightBoxThumbnailsContainer">
                        {
                            thumbnailsFromBE.map((item, indx) => {
                                return (
                                        <
                                        img
                                        key={indx}
                                        src={`${BASE_URL}/${item}`}
                                        alt="small product image"
                                        onClick={() => displayImage(indx)}
                                        className={index == indx ? 'currentlyDisplayed lightBoxThumbnailImage' : 'lightBoxThumbnailImage'}
                                        />
                                )
                            })
                        }
                    </div>
                </div>
                :
                ''
            }
        </>
    );
}
 
export default Collections;