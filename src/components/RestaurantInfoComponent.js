import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerComponent from "./ShimmerComponent";
import { useParams } from "react-router";

const RestarantInfoComponent = () => {
    const {resId} = useParams();
    const {restaurantInfoData, restaurantMenuData} = useRestaurantMenu(resId);

    if(restaurantInfoData === null) return <ShimmerComponent/>
    return (
        <div className="restaurant-info">
            <div>
                <h1>{restaurantInfoData.name}</h1>
            </div>
            <div>
                <h2>{restaurantInfoData.avgRating} - {restaurantInfoData.costForTwoMessage}</h2>
                <h3>{restaurantInfoData.areaName}</h3>
                <h3>{restaurantInfoData.cuisines.join(", ")}</h3>
            </div>
            <div>
                <ul>
                    {restaurantMenuData.map(menuItem => {
                        return <li key={menuItem?.card?.info?.id}>{menuItem?.card?.info?.name}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default RestarantInfoComponent;