import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Dish = ({dish}) => {
    const [quantity,setQuantity] = useState(1);
    const dispatch = useDispatch()

    return (
        <div className="dish-container">
            <img className="dishPic" src={`${dish.img}.jpg`} alt="" />
            <h2>{dish.name}</h2>
            <p>$ {dish.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
            <button className="btn-add-to-cart" onClick={() => {dispatch(addItemToCart({dish, quantity}));
            }}>Add to cart</button>
        </div>
    )
}
export default Dish;