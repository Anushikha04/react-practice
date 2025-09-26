import { useDispatch } from "react-redux";
import CARD_IMG_URL from "../utils/constants";
import { addItem } from "../utils/redux/cartSlice";

const RestaurantCategoryItemComponent = ({data}) => {
    const dispatch = useDispatch();
    const handleDispatch = (item) => {
        dispatch(addItem(item))
    }
    return (
        <div className="flex justify-between border-b p-4">
            <div>
                <h2 className="font-bold">{data.name}</h2>
                <h2 className="font-bold">{'Rs ' + (data.price ? (data.price/100) : (data.defaultPrice/100))}</h2>
                <p>{data.description}</p>
            </div>
            <div className="w-40 h-auto">
                <button className="text-white bg-black p-2 m-2" onClick={() => {handleDispatch(data)}}>Add+</button>
                <img src={CARD_IMG_URL + data.imageId} alt="no image found"/>
            </div>
        </div>
    )
}

export default RestaurantCategoryItemComponent;