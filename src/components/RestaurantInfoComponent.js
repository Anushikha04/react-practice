import { useEffect,useState } from "react";
import { MENU_API } from "../utils/constants";
import ShimmerComponent from "./ShimmerComponent";
import { useParams } from "react-router";

const RestarantInfoComponent = () => {
    const [restaurantInfoData, setRestaurantInfoData] = useState(null);
    const [restaurantMenuData, setRestaurantMenuData] = useState(null);
    useEffect(() => {
        fetchData();
        
    },[])

    const {resId} = useParams();

    const fetchData = async () => {
        const data = await fetch(MENU_API + '&restaurantId=' + resId);
        const json = await data.json();
        console.log(json);
        setRestaurantInfoData(json?.data?.cards[2]?.card?.card?.info)
        setRestaurantMenuData(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    }

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