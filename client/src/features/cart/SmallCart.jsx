import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "./state/slice";
import trashIcon from '../../assets/img/icon-delete.svg';
import './smallCart.css';

const SmallCart = () => {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    const handleRemoveCompletely = (id) => {
        dispatch(removeItem({id}));
    };

    return (
        <>
            <div className="smallCartContainer">
                <h2 className="smallCartHeading">Cart</h2>
                <hr />
            </div>
            {
                cart.length === 0
                ?
                <p className="smallCartEmpty">Your cart is empty.</p>
                :
                <div className="smallCartItemsContainer">
                    {
                        cart.map((item) => {
                            return (
                                <div key={item.id} className="smallCartItemContainer">
                                    <img className="smallCartItemImage" src={item.thumbnail} alt="small image" />
                                    <div className="smallCartTextContainer">
                                        <p className="smallCartText">{item.name}</p>
                                        <p className="smallCartText">
                                            <span className="smallCartBasicPrice">${item.currentPrice.toFixed(2)} x {item.amount}</span>
                                            <span className="smallCartTotalPrice">${(item.amount * item.currentPrice).toFixed(2)}</span>
                                        </p>
                                    </div>
                                    <button className="smallCartRemoveButton" onClick={() => {handleRemoveCompletely(item.id)}}>
                                        <img src={trashIcon} alt="trash icon" />
                                    </button>
                                </div>
                            )
                        })
                    }
                    <button className="smallCartCheckoutButton">Checkout</button>
                </div>
            }
        </>
    );
}
 
export default SmallCart;