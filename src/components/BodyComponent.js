import {restaurentsData} from "../utils/data";
import CardComponent from "./CardComponent";
import {useState, useEffect} from 'react'
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router";

const BodyComponent = () => {
  // const [resData, setResData] = useState(restaurentsData);
  const [resData, setResData] = useState([]);
  // const [filteredRes, setFilteredRes] = useState(restaurentsData);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async() => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0035068&lng=77.5890953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setResData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
          return <Link key={res.info.id} to={'/restaurant/'+res.info.id}><CardComponent resData={res}/></Link>
        })}
      </div>
    </div>
  );
};

export default BodyComponent;