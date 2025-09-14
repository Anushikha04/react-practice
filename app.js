import React from "react";
import ReactDOM from "react-dom/client";

// const div = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ]),
// ]);
// const title = 'hello there'
// const jsxHeading = (
//   <div id="parent" className="parent" tabIndex="2">
//     <div id="child">
//       <h1>I am h1 tag</h1>
//       <h2>I am h2 tag</h2>
//     </div>
//     <div id="chil2">
//       <h1>I am h1 tag</h1>
//       <h2>I am h2 tag</h2>
//     </div>
//   </div>
// );

// const FunctionComp = () => <h1>hello</h1>;
// const Newcomp = () => {
//   return (
//     <div>
//       <h2>test</h2>
//       {title}
//       {FunctionComp()}
//       <FunctionComp />
//       <FunctionComp></FunctionComp>
//       <h2>test</h2>
//     </div>
//   );
// };

// const reactEl = (
//     <div>
//         {Newcomp()}
//     </div>
// )

// const header = React.createElement(
//   "h1",
//   { id: "header", hello: "hello", className: "new test testing" },
//   "hello from react"
// );

const restaurentsData = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "830418",
      name: "Indian Coffee House",
      cloudinaryImageId: "2469fa88ee9b0b5d1366ba88f2a7fa7f",
      locality: "Chhindwara City",
      areaName: "Khajri Chowk",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "Chinese", "Fast Food", "Beverages"],
      avgRating: 4.5,
      veg: true,
      parentId: "106448",
      avgRatingString: "4.5",
      totalRatingsString: "247",
      sla: {
        deliveryTime: 52,
        lastMileTravel: 13.1,
        serviceability: "SERVICEABLE",
        slaString: "50-60 mins",
        lastMileTravelString: "13.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-14 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-South%20Indian.png",
            description: "Delivery!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d557c3fe-0348-40c3-a68d-d7c3ddfb2ce3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/indian-coffee-house-city-khajri-chowk-rest830418",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "945448",
      name: "Yummy Better",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/22/5c6d3a34-1ac1-44ca-94cf-7e9122459ebc_945448.jpg",
      locality: "Chhindwara City",
      areaName: "Chhindwara City",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Fast Food"],
      veg: true,
      parentId: "557138",
      avgRatingString: "--",
      sla: {
        deliveryTime: 66,
        lastMileTravel: 14.2,
        serviceability: "SERVICEABLE",
        slaString: "65-75 mins",
        lastMileTravelString: "14.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-14 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d557c3fe-0348-40c3-a68d-d7c3ddfb2ce3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/yummy-better-chhindwara-city-rest945448",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "151509",
      name: "Dawat Restaurant (hotel Surya)",
      cloudinaryImageId: "pegljnajfpylaxlni05s",
      locality: "Sinchai Colony",
      areaName: "Chhindwara Locality",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "South Indian"],
      avgRating: 4.8,
      veg: true,
      parentId: "68916",
      avgRatingString: "4.8",
      totalRatingsString: "29",
      sla: {
        deliveryTime: 62,
        lastMileTravel: 13.8,
        serviceability: "SERVICEABLE",
        slaString: "60-70 mins",
        lastMileTravelString: "13.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-14 10:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d557c3fe-0348-40c3-a68d-d7c3ddfb2ce3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/dawat-restaurant-hotel-surya-sinchai-colony-chhindwara-locality-rest151509",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1046102",
      name: "Tasty Talk",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/16/7cbbb087-5eb9-4464-bce2-8e8a392d19a2_1046102.jpg",
      locality: "Chhindwara City",
      areaName: "Chhindwara City",
      costForTwo: "₹200 for two",
      cuisines: [
        "Chinese",
        "Italian",
        "Pizzas",
        "Pastas",
        "Fast Food",
        "Burgers",
        "Cafe",
      ],
      avgRating: 4.1,
      veg: true,
      parentId: "618935",
      avgRatingString: "4.1",
      totalRatingsString: "11",
      sla: {
        deliveryTime: 63,
        lastMileTravel: 12.1,
        serviceability: "SERVICEABLE",
        slaString: "60-70 mins",
        lastMileTravelString: "12.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 9 am, today",
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d557c3fe-0348-40c3-a68d-d7c3ddfb2ce3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/tasty-talk-chhindwara-city-rest1046102",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "429061",
      name: "Deccan Dosa",
      cloudinaryImageId: "mtr8w6msayubnigqmbkn",
      locality: "Parasia Road",
      areaName: "Chhindwara Locality",
      costForTwo: "₹280 for two",
      cuisines: ["South Indian"],
      avgRating: 2.5,
      veg: true,
      parentId: "239338",
      avgRatingString: "2.5",
      totalRatingsString: "3",
      sla: {
        deliveryTime: 62,
        lastMileTravel: 13.6,
        serviceability: "SERVICEABLE",
        slaString: "60-70 mins",
        lastMileTravelString: "13.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 9 am, today",
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d557c3fe-0348-40c3-a68d-d7c3ddfb2ce3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/deccan-dosa-parasia-road-chhindwara-locality-rest429061",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "795047",
      name: "New Radhey Shyam Choule Bhature Delhi Wala",
      cloudinaryImageId: "0adf25c57357161b20c11281d8a443e6",
      locality: "VIP Road",
      areaName: "Mohan Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Snacks", "Chinese"],
      avgRating: 2.9,
      veg: true,
      parentId: "475337",
      avgRatingString: "2.9",
      totalRatingsString: "3",
      sla: {
        deliveryTime: 64,
        lastMileTravel: 13.1,
        serviceability: "SERVICEABLE",
        slaString: "60-70 mins",
        lastMileTravelString: "13.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 9 am, today",
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d557c3fe-0348-40c3-a68d-d7c3ddfb2ce3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/new-radhey-shyam-choule-bhature-delhi-wala-vip-road-mohan-nagar-rest795047",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1014987",
      name: "Shree Siddhivinayak Cafe & Restaurant",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/25/c6192e15-89b6-444b-958d-8f85469b87d7_1014987.jpg",
      locality: "Chhindwara",
      areaName: "Chhindwara City",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Continental"],
      veg: true,
      parentId: "591971",
      avgRatingString: "--",
      sla: {
        deliveryTime: 62,
        lastMileTravel: 12.1,
        serviceability: "SERVICEABLE",
        slaString: "60-70 mins",
        lastMileTravelString: "12.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 9 am, today",
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d557c3fe-0348-40c3-a68d-d7c3ddfb2ce3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/shree-siddhivinayak-cafe-and-restaurant-chhindwara-city-rest1014987",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "981278",
      name: "Malwa Family Restaurant",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/26/51443e33-cc93-4cd2-bbce-8c8f3c544fd1_981278.JPG",
      locality: "Chhindwara City",
      areaName: "Chhindwara City",
      costForTwo: "₹300 for two",
      cuisines: ["Indian"],
      avgRating: 4.1,
      parentId: "573724",
      avgRatingString: "4.1",
      totalRatingsString: "43",
      sla: {
        deliveryTime: 63,
        lastMileTravel: 13.1,
        serviceability: "SERVICEABLE",
        slaString: "60-70 mins",
        lastMileTravelString: "13.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 9:45 am, today",
      },
      badges: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d557c3fe-0348-40c3-a68d-d7c3ddfb2ce3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/malwa-family-restaurant-chhindwara-city-rest981278",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const HeaderComponent = () => {
  return (
    <div className="header-container">
      <div className="header-logo-container">
        <img
          className="header-logo"
          alt="logo"
          src="https://images.unsplash.com/photo-1547494784-d143dea885b4?q=80&w=2906&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="header-nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <div>Search</div>
      <div className="body-cards-container">
        {restaurentsData.map(res => {
          return <CardComponent key={res.info.id} resData={res}/>
        })}
      </div>
    </div>
  );
};

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
        src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const AppLayoutComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Newcomp />);
root.render(<AppLayoutComponent />);
