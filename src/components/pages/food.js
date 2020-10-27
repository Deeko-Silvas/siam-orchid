import React from 'react';
import HeroImage from '../hero-image/heroImage';
import FoodMenu from '../food-menu/foodMenu';
import MenuDownload from '../food-menu/menuDownload';

const Food = ({ name, food, menus, hero, setMenu }) => {
    return (
        <div className="food-page">
            <h1 className="accessibility">`${name} menu page`</h1>
            <HeroImage hero={hero} />
            <FoodMenu 
                food={food}
                setMenu={setMenu}
            />
            <MenuDownload menus={menus}/>
        </div>

    )
}

export default Food;