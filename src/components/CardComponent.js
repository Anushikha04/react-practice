import CARD_IMG_URL from "../utils/constants";

const CardComponent = (props) => {
  console.log(props);
  const {resData} = props;
  const {name, cuisines, costForTwo, avgRating, cloudinaryImageId} = resData.info;
  const {deliveryTime} = resData.info.sla;
  return (
    <div className="body-card">
      <img
        className="body-card-image"
        alt="card"
        src={CARD_IMG_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default CardComponent;