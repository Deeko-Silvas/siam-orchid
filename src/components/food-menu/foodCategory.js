import React, {useState} from 'react';
import FoodMenuItem from './foodMenuItem'

import './foodCategory.css';

const FoodCategory = ({ category }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const renderFoodItems = category[1].map((item, index) => {
        return (
            <FoodMenuItem
                key={index}
                item={item}
            />
        )
    })

    const openMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className={`menu-food-category-container ${menuOpen ? "menu-open" : null}`}>
            <div className="menu-food-category-inner-container">
                <div className="menu-food-items-header">
                    <h4>
                        {category[0].replace(/_/g, " ")}
                    </h4>
                </div>
                <div className="menu-food-items-container">
                    {renderFoodItems}
                </div>
                <div className="menu-open-button">
                    <i className="far fa-times-circle" onClick={openMenu}></i>
                </div>
            </div>

        </div>
    )
    
}

export default FoodCategory;