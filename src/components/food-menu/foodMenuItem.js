import React from 'react';
import './foodMenuItem.css';

const FoodMenuItem = ({ item }) => {
    let spice = [...Array(item.spice)]
    return (
        <div className="food-menu-item">
            <div className="menu-food-item-heading">
                <h6 className="menu-food-item-title">
                    {`${item.num}. ${item.item}`}
                </h6>
                <ul className="menu-food-item-icons">
                    {spice.map((s, index) => {
                        return (
                            <li key={index}><i className="fas fa-pepper-hot"></i></li>
                        )
                    })}
                </ul>
                {item.price > 0 ?
                <h6 className="menu-food-item-price-list">
                    {`£${item.price}`}
                </h6> : null}
            </div>
            {item.options.length > 0 ? 
                    item.options.map((option, index) => {
                        return (
                            <h6 className="price-options">{option}: £{parseFloat(item.optionsPrice[index]).toFixed(2)}</h6>
                        )
                }) : null
            }
            <p>{item.decription}</p>
        </div>
    )
}

export default FoodMenuItem;