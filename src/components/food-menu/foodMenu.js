import React from 'react';
import FoodCategory from './foodCategory';
import SetMenu from './setMenu';

import './foodMenu.css';

const FoodMenu = ({ food, setMenu }) => {
    const categories = Object.entries(food)

    const renderCategories = categories.map(category => {
        return (
            <FoodCategory 
                key={category}
                category={category}
            />
        )
    })

    return (
        <div className="menu-container">
            {renderCategories}
            <SetMenu setMenu={setMenu}/>
        </div>
    )
}

export default FoodMenu;