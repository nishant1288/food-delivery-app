import { useEffect, useState } from "react";
import { MENU_API } from "../constants";

const useRestaurantMenu = (restid) => {

    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(MENU_API + restid);
        console.log('Before Json parse', data)
        const json = await data.json();
        console.log('After json parse', json)
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;