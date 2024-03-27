
import useRestaurantMenu from "../../utils/useRestaurantMenu/useRestaurantMenu";
import Shimmer from "../shimmer/Shimmer";
import { useParams } from "react-router-dom";

const RestaurantCard = () => {

    const { restid } = useParams();

    const resInfo = useRestaurantMenu(restid);

    if (resInfo === null) return <Shimmer />

    const { name, avgRatingString, areaName, cuisines } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // const category = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log('Categories', category)
    // const categoryListing = category.filter((type) => {
    //     return type.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    // })
    // console.log('Category Listing', categoryListing)
    const category = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) =>
        category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    console.log('Categories', category);

    return (
        <div className="rset-card">
            <h2>{name} - {avgRatingString}</h2>
            <p>{areaName}</p>
            <h3>{cuisines.join(', ')}</h3>

            <h4>Menu</h4>
            <ul>
                {/* First 
                {
                    resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map(item => <li>{item.card.info.name }</li>)
                }

                Second
                {
                    resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map((item) => {
                        return (
                            <li>{item.card.info.name}</li>
                        )
                    } )
                } */}

                {
                    itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}</li>)
                    // 1.51.46
                }
            </ul>
        </div>
    )
}

export default RestaurantCard;

//Important Comments

// -------------------------->Use in between const fetchMenu = () => { here }<-------------------------
// console.log(json.data.cards[2].card.card.info)
// console.log(json.data.cards[5].groupedCard.cardroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name)
// console.log(json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
// --------------------------------------><------------------------------------------

//---------------------------->To fetch data from api. Now it has a custom hook<------------
// useEffect(() => {
//     fetchMenu();
// }, [])

// const fetchMenu = async () => {
//     const data = await fetch(MENU_API + restid);
//     const json = await data.json();
//     setResInfo(json.data)
// }
//---------------------------------><--------------------------------------------