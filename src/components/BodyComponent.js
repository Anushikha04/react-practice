import {restaurentsData} from "../utils/data";
import CardComponent, {withVegLabel} from "./CardComponent";
import {use, useState, useContext} from 'react'
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router";
import useRestaurantData from "../utils/useRestaurantData";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const {resData, setResData, filteredRes, setFilteredRes} = useRestaurantData();
  const onlineStatus = useOnlineStatus();
 

  console.log(filteredRes)

  const VegCardComponent = withVegLabel(CardComponent);

  if(!onlineStatus) {
    return <h1 class="text-3xl font-bold underline">Looks like you are offline!! please check your internet connection</h1>
  }
  
  return resData.length === 0 ? <ShimmerComponent/> :  (
    <div className="body">
      <div className="search">
        <input type="text" value={searchText} onChange={(e) => {
          setSearchText(e.target.value);
        }}/>
        <button onClick={() => {
          const filteredRestaurants = resData.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
          setFilteredRes(filteredRestaurants);
        }}>Search</button>
      </div>
      <div>
        <button onClick={() => {
          const filteredRestaurants = resData.filter(res => res.info.avgRating > 4);
          setResData(filteredRestaurants);
        }}>top rated restaurants</button>
      </div>
      <div className="body-cards-container">
        {filteredRes.map(res => {
          return <Link key={res.info.id} to={'/restaurant/'+res.info.id}>{res.info.veg ? <VegCardComponent resData={res}/> : <CardComponent resData={res}/>}</Link>
        })}
      </div>
    </div>
  );
};

export default BodyComponent;