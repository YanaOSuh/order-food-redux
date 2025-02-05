import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice); 

    return (
        <div className="cart-container">
            <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png"/> 
            <h3>TOTAL: ${totalPrice}</h3>
            <div className="cart-dish-container">
            {cartItems.map((cartItem, index) => <CartItem cartItem={cartItem} key={index} />)}
            </div>
        </div>
    )
}
export default Cart;