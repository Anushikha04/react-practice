import RestaurantCategoryItemComponent from "./RestaurantCategoryItemComponent";
import { useState } from "react";

const RestaurantItemComponent = ({
  data,
  showItems,
  setShowIndex,
  setShowItem,
}) => {
  // const [showItems, setShowItems] = useState(false);
  const showCategoryItems = () => {
    // setShowItems(!showItems);
    setShowIndex();
    setShowItem();
  };
  return (
    <div>
      <div
        className="bg-white shadow-lg p-4 m-4 cursor-pointer"
        onClick={showCategoryItems}
      >
        <div className="flex justify-between ">
          <div>
            <span className="font-bold text-lg">{data.title}</span>
            <span className="font-bold">({data.itemCards.length})</span>
          </div>
          <div>down</div>
        </div>

        <div>
          {showItems &&
            data.itemCards.map((item) => {
              return (
                <RestaurantCategoryItemComponent
                  data={item.card.info}
                  key={item?.card?.info?.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantItemComponent;
