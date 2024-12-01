import { useState } from "react";
import plusIcon from '../../assets/img/icon-plus.svg';
import minusIcon from '../../assets/img/icon-minus.svg';
import cartIcon from '../../assets/img/icon-cart-white.svg';
import closeIcon from '../../assets/img/icon-close.svg';
import nextIcon from '../../assets/img/icon-next.svg';
import previousIcon from '../../assets/img/icon-previous.svg';
import './productPage.css';
import thumbnail1 from '../../assets/img/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../assets/img/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../assets/img/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../assets/img/image-product-4-thumbnail.jpg';
import image1 from '../../assets/img/image-product-1.jpg';
import image2 from '../../assets/img/image-product-2.jpg';
import image3 from '../../assets/img/image-product-3.jpg';
import image4 from '../../assets/img/image-product-4.jpg';

const Collections = () => {
    const [amount, setAmount] = useState(0);
    const [index, setIndex] = useState(0);
    const [lightBox, setLightBox] = useState(false);

    const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];
    const images = [image1, image2, image3, image4];

    const displayImage = (index) => {
        setIndex(index);
    };

    const displayNextImage = () => {
        index < images.length - 1 ? setIndex(index + 1) : setIndex(0);
    };

    const displayPrevImage = () => {
        index > 0 ? setIndex(index - 1) : setIndex(images.length - 1);
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

    return (
        <>
            <div className={lightBox ? "productContainer lightBoxOn" : "productContainer"}>
                <div className="leftProductContainer">
                    <div className="imageContainer">
                        <
                            img
                            src={images[index]}
                            alt="large product image"
                            onClick={toggleLightBox}
                            className="mainImage"
                        />
                        <button onClick={displayPrevImage} className="previousButtonMobile"><img src={previousIcon} alt="left arrow" /></button>
                        <button onClick={displayNextImage} className="nextButtonMobile"><img src={nextIcon} alt="right arrow" /></button>
                    </div>
                    <div className="thumbnailsContainer">
                        {
                            thumbnails.map((item, indx) => {
                                return (
                                        <
                                        img
                                        key={indx}
                                        src={item}
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
                    <h2 className="productMaufacturer">SNEAKER COMPANY</h2>
                    <h3 className="productName">Fall Limited Edition Sneakers</h3>
                    <p className="productDescription">These low-profile sneakers are your perfect
                    casual wear companion. Featuring a durable
                    rubber outer sole, they'll withstand everything
                    the weather can offer.</p>
                    <div className="priceContainer">
                        <div className="leftPriceContainer"><span className="currentPrice">$125.00</span><span className="discount">50%</span></div>
                        <p className="originalPrice">$250.00</p>
                    </div>
                    <div className="amountContainer">
                        <div className="calculateContainer">
                            {/* put images to buttons and restyle */}
                            <img className="minusButton" src={minusIcon} alt="minus symbol" onClick={removeOne} />
                            <span className="amountNumber">{amount}</span>
                            <img className="plusButton" src={plusIcon} alt="plus symbol" onClick={addOne} />
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
                            src={images[index]}
                            alt="large product image"
                            onClick={toggleLightBox}
                            className="lightBoxMainImage"
                            />
                            <button onClick={displayPrevImage} className="previousButton"><img src={previousIcon} alt="left arrow" /></button>
                            <button onClick={displayNextImage} className="nextButton"><img src={nextIcon} alt="right arrow" /></button>
                    </div>
                    <div className="lightBoxThumbnailsContainer">
                        {
                            thumbnails.map((item, indx) => {
                                return (
                                        <
                                        img
                                        key={indx}
                                        src={item}
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