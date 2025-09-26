import RestaurantCategoryItemComponent from './RestaurantCategoryItemComponent'
import { clearCart } from "../utils/redux/cartSlice"
import { useDispatch, useSelector } from "react-redux"

const CartComponent = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    if(cartItems.length === 0) return <h1>you have nothing in your cart. please add items.</h1>
    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <button className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer" onClick={() => {handleClearCart()}}>clear cart</button>
            <div className="w-6/12 m-auto">
            {cartItems.map(item => <RestaurantCategoryItemComponent key={item.id} data={item}/>)}
        
            </div>
        </div>
    )
}

export default CartComponent