import "./restCard.css"
import { CARD_URL } from "../../utils/constants";

export const RestCard = (props) => {
    const { rescard } = props;
    const { name, cuisines, avgRating, cloudinaryImageId } = rescard?.info
    // console.log(props)
    return (
        <div className='card'>
            <img src={ CARD_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating}</h4>
        </div>
    )
}

export default RestCard;