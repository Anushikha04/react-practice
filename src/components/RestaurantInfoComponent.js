import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerComponent from "./ShimmerComponent";
import { useParams } from "react-router";
import RestaurantItemComponent from "./RestaurantItemComponent";
import { useState } from "react";

const RestarantInfoComponent = () => {
    const {resId} = useParams();
    const {restaurantInfoData, restaurantMenuData} = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
    const [showItem, setShowItem] = useState(false);
    let restaurantItemsCards = [];
    if(restaurantMenuData) {
        restaurantItemsCards = restaurantMenuData.filter(item => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    }

    if(restaurantInfoData === null) return <ShimmerComponent/>
    return (
        <div className="w-6/12 text-center m-auto">
            <div>
                <h1>{restaurantInfoData.name}</h1>
            </div>
            <div>
                <h2>{restaurantInfoData.avgRating} - {restaurantInfoData.costForTwoMessage}</h2>
                <h3>{restaurantInfoData.areaName}</h3>
                <h3>{restaurantInfoData.cuisines.join(", ")}</h3>
            </div>
            <div>
                {/* <ul>
                    {restaurantMenuData.map(menuItem => {
                        return <li key={menuItem?.card?.info?.id}>{menuItem?.card?.info?.name}</li>
                    })}
                </ul> */}
                {restaurantItemsCards.map((category, index) => {
                    return <div key={category?.card?.card?.title}>
                        <RestaurantItemComponent data={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)} setShowItem={() => setShowItem(index === showIndex ? false : true)}/>
                    </div>
                })}
            </div>
        </div>
    )
}

export default RestarantInfoComponent;