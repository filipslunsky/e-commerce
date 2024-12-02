import { useSelector, useDispatch } from "react-redux";
import { addOnePiece, removeOnePiece, removeItem } from "./state/slice";
import plusIcon from '../../assets/img/icon-plus.svg';
import minusIcon from '../../assets/img/icon-minus.svg';
import trashIcon from '../../assets/img/icon-delete.svg';
import './cart.css';

const Cart = () => {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    const handleAddOne = (id) => {
        dispatch(addOnePiece({id}));
    };

    const handleRemoveOne = (id) => {
        dispatch(removeOnePiece({id}));
    };

    const handleRemoveCompletely = (id) => {
        dispatch(removeItem({id}));
    };

    const totalPrice = cart.reduce((acc, item) => acc + item.amount * item.currentPrice, 0);

    if (cart.length === 0) {
        return (
            <>
                <p className="statusMessage">Your shopping cart is empty.</p>
            </>
        )
    }

    return (
        <>
            <div className="mainCartContainer">
                <h2 className="infoHeader">Shopping Cart</h2>
                {
                    cart.map((item) => {
                        return (
                            <div className="cartItemContainer" key={item.id}>
                                <p className="cartItemName">{item.name}</p>
                                <p className="cartItemManufacturer">Made by: {item.manufacturer}</p>
                                <p className="cartPricePerPiece">Price per piece: <span className="cartPricePerPieceNumber">${item.currentPrice.toFixed(2)}</span></p>
                                <div className="cartCalculateContainer">
                                    <button className="cartMinusButton" onClick={() => {handleRemoveOne(item.id)}}><img src={minusIcon} /></button>
                                    <p className="cartAmount">{item.amount}</p>
                                    <button className="cartPlusButton" onClick={() => {handleAddOne(item.id)}}><img src={plusIcon} /></button>
                                </div>
                                <div className="cartPriceContainer">
                                    <p className="cartItemTotalPrice">Total price: ${(item.amount * item.currentPrice).toFixed(2)}</p>
                                    <button className="cartRemoveButton" onClick={() => {handleRemoveCompletely(item.id)}}><img src={trashIcon} /></button>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="cartTotalPriceContainer">
                   <p className="cartTotalPrice">Total price of all: ${totalPrice.toFixed(2)}</p>
                </div>
            </div>
        </>
    );
}
 
export default Cart;