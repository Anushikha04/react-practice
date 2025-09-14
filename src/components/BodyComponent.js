import {restaurentsData} from "../utils/data";
import CardComponent from "./CardComponent";
import {useState} from 'react'

const BodyComponent = () => {
  const [resData, setResData] = useState(restaurentsData);
  return (
    <div className="body">
      <div>Search</div>
      <div>
        <button onClick={() => {
          const filteredRestaurants = resData.filter(res => res.info.avgRating > 4);
          setResData(filteredRestaurants);
        }}>top rated restaurants</button>
      </div>
      <div className="body-cards-container">
        {resData.map(res => {
          return <CardComponent key={res.info.id} resData={res}/>
        })}
      </div>
    </div>
  );
};

export default BodyComponent;