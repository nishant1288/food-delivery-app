import "./body.css";
import { useEffect, useState } from "react";
import { RestCard } from '../rest-card/RestCard';
import Shimmer from '../shimmer/Shimmer';
import { Link } from "react-router-dom";

import cardData from '../../utils/mockData';
import useOnlineStatus from "../../utils/useOnlineStatus/useOnlineStatus";

let cardData2 = [
    {
        "info": {
            "id": "403973",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "Dombivli East",
            "areaName": "Dombivli East",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 3.9,
        }
    },
    {
        "info": {
            "id": "403974",
            "name": "New Modern Cafe- Pure Veg",
            "cloudinaryImageId": "gkgehgbk1bxvdwinq5bm",
            "locality": "Dombivli East",
            "areaName": "Dombivli East",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Indian",
                "Chinese",
                "Biryani"
            ],
            "avgRating": 4.3,
        }
    },
    {
        "info": {
            "id": "403975",
            "name": "New Rest",
            "cloudinaryImageId": "gkgehgbk1bxvdwinq5bm",
            "locality": "Dombivli East",
            "areaName": "Dombivli East",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Indian",
                "Chinese",
                "Biryani"
            ],
            "avgRating": 4.3,
        }
    }
]

const Body = () => {

    const [cards, setCards] = useState([]);
    const [filterCards, setFilterCards] = useState([]);
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        console.log('Cards', cards)
    }, [cards]);

    const onlineStatus = useOnlineStatus();

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2094006&lng=73.0939483&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await data.json();
        // console.log(jsonData?.data?.cards[2]?.card?.card.gridElements?.infoWithStyle?.restaurants)
        if (jsonData) {
            setCards(jsonData?.data?.cards[2]?.card?.card.gridElements?.infoWithStyle?.restaurants);
            setFilterCards(jsonData?.data?.cards[2]?.card?.card.gridElements?.infoWithStyle?.restaurants)
        }
    }

    if (onlineStatus === false) { return (<h1>Looks like you are offline</h1>) }
    
    return cards.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='filter'>

                <div className="search">

                    <input type="text" value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                            console.log(searchValue);
                        }}>
                    </input>

                    <button onClick={() => {
                        console.log(searchValue)
                        let searchCards = cards.filter((card) => card.info.name.toLowerCase().includes(searchValue.toLowerCase()));
                        setFilterCards(searchCards)
                    }}>Search</button>

                </div>

                <button className="filter-btn" onClick={() => {
                    let cardDataList = cards.filter((card) => card.info.avgRating > 4.3)
                    setFilterCards(cardDataList)
                }}>Top Rated Filter</button>

            </div>
            <div className='rest-container'>
                {
                    filterCards.map(data =>
                        <Link key={data.info.id} to={'/restaurant/' + data.info.id}>
                            <RestCard rescard={data} />
                        </Link>)
                }
            </div>
        </div>
    )
}





export default Body;