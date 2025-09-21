import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restaurantInfoData, setRestaurantInfoData] = useState(null);
  const [restaurantMenuData, setRestaurantMenuData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + "&restaurantId=" + resId);
    const json = await data.json();
    console.log(json);
    setRestaurantInfoData(json?.data?.cards[2]?.card?.card?.info);
    setRestaurantMenuData(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  };

  return { restaurantInfoData, restaurantMenuData  };
};

export default useRestaurantMenu;
