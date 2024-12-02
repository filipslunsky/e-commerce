import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOnePiece, removeOnePiece, removeItem } from "./state/slice";

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

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    if (cart.length === 0) {
        return (
            <>
                <p>Your shopping cart is empty.</p>
            </>
        )
    }

    return (
        <>
            <h2>Cart</h2>
            {
                cart.map((item) => {
                    return (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <p>Made by: {item.manufacturer}</p>
                            <button onClick={() => {handleAddOne(item.id)}}>+</button>
                            <p>Amount: {item.amount}</p>
                            <button onClick={() => {handleRemoveOne(item.id)}}>-</button>
                            <p>Price per piece: ${item.currentPrice.toFixed(2)}</p>
                            <p>Total price: ${(item.amount * item.currentPrice).toFixed(2)}</p>
                            <button onClick={() => {handleRemoveCompletely(item.id)}}>trash</button>
                        </div>
                    )
                })
            }
            <p>Total price of all: ${totalPrice.toFixed(2)} </p>
        </>
    );
}
 
export default Cart;