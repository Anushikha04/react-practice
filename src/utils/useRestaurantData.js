import { useEffect, useState } from "react";
import { MAIN_BODY_RESTAURANT_DATA } from "./constants";

const useRestaurantData = () => {
  const [resData, setResData] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MAIN_BODY_RESTAURANT_DATA);
    const json = await data.json();
    setResData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return { resData, setResData, filteredRes, setFilteredRes };
};
 export default useRestaurantData;