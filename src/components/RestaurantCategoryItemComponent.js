import CARD_IMG_URL from "../utils/constants";

const RestaurantCategoryItemComponent = ({data}) => {
    // console.log(data)
    return (
        <div className="flex justify-between border-b p-4">
            <div>
                <h2 className="font-bold">{data.name}</h2>
                <h2 className="font-bold">{'Rs ' + (data.price ? (data.price/100) : (data.defaultPrice/100))}</h2>
                <p>{data.description}</p>
            </div>
            <div className="w-40 h-auto">
                <img src={CARD_IMG_URL + data.imageId} alt="no image found"/>
            </div>
        </div>
    )
}

export default RestaurantCategoryItemComponent;