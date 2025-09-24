import CARD_IMG_URL from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const CardComponent = (props) => {
  const {resData} = props;
  const {name, cuisines, costForTwo, avgRating, cloudinaryImageId} = resData.info;
  const {deliveryTime} = resData.info.sla;
   const {loggedInUser} = useContext(UserContext)
  return (
    <div className="body-card w-[250px] p-4 m-4 bg-gray-200 cursor-pointer shadow-lg rounded-lg hover:bg-gray-300">
      <img
        className="body-card-image"
        alt="card"
        src={CARD_IMG_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg">{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>user: {loggedInUser}</h4>
    </div>
  );
};

export const withVegLabel = (CardComponent) => {
  return (props) => {
    return (
      <>
      <div className="veg-label bg-black w-20 mx-4 px-4 text-white">veg</div>
      <CardComponent {...props}/>
      </>
    )
  }
}

export default CardComponent;