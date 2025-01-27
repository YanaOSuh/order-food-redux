const ChangeQuantity = ({ quantity, setQuantity }) => {

    const addQuantity = () => {
        const newQuantity = quantity +1;
        setQuantity(newQuantity);
    }
    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity -1;
        setQuantity(newQuantity);
    }
    return(
        <div className="quantity-container">
            <button className="btn-plus-minus" onClick={addQuantity}>+</button>
            <p className="quantity">{quantity}</p>
            <button className="btn-plus-minus"  onClick={removeQuantity}>-</button>
        </div>
    )
}
export default ChangeQuantity;