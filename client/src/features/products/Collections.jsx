import { useState } from "react";
import plusIcon from '../../assets/img/icon-plus.svg';
import minusIcon from '../../assets/img/icon-minus.svg';
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
            <div className="productContainer">
                <div className="leftContainer">
                    <div className="imageContainer">
                        <
                            img
                            src={images[index]}
                            alt="large product image"
                            onClick={toggleLightBox}
                            />
                    </div>
                    <div className="thumbnailContainer">
                        {
                            thumbnails.map((item, indx) => {
                                return (
                                        <
                                        img
                                        key={indx}
                                        src={item}
                                        alt="small product image"
                                        onClick={() => displayImage(indx)}
                                        className={index == indx ? 'currentlyDisplayed' : ''}
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
                        <p className="currentPrice">$125.00</p>
                        <p className="discount">50%</p>
                        <p className="originalPrice">$250.00</p>
                    </div>
                    <div className="amountContainer">
                        <img className="minus symbol" src={minusIcon} alt="minus symbol" onClick={removeOne} />
                        <span>{amount}</span>
                        <img className="plus symbol" src={plusIcon} alt="plus symbol" onClick={addOne} />
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Collections;