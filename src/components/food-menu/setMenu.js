import React, {useState} from 'react';
import './foodCategory.css';
import './setMenu.css';

const SetMenu = ({ setMenu }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    
    const renderSetMenu = setMenu.map((item, index) => {
        return (
            <div key={index} className="set-menu-container">
                <h5>{`SET MENU ${item.menu}`}</h5>  
                <p className="small-text">{`Minimum of ${item.minPeople} people`}</p> 
                <p className="price">{`£${item.pricePerPerson} per person`}</p>
                <h6>Starter</h6>
                    {item.starter.map((starter, starterIndex) => {
                        return (
                            <div key={starterIndex}>
                                <p ><strong>{starter.item}</strong>{starter.description.length > 0 ? ` - ${starter.description}` : null }</p>
                                {starterIndex !== (item.starter.length - 1) ? <p className="small-text"><b>or</b></p> : null}
                            </div>
                        )      
                    })}
                <h6>Main Course</h6>
                    {item.mainCourse.map((main, mainIndex) => {
                        return (
                            <p key={mainIndex}><strong>{main.item}</strong>{main.description.length > 0 ? ` - ${main.description}` : null }</p>
                        )      
                    })}
                <h6>Rice</h6>
                    <p><strong>{item.rice.item}</strong>{item.rice.description.length > 0 ? ` - ${item.rice.description}` : null }</p>
                <h6>Dessert</h6>
                    {item.dessert.map((dessert, dessertIndex) => {
                        return (
                            <div key={dessertIndex}>
                                <p key={dessertIndex}><strong>{dessert.item}</strong>{dessert.description.length > 0 ? ` - ${dessert.description}` : null }</p>
                                {dessertIndex !== (item.dessert.length - 1) ? <p className="small-text"><b>or</b></p> : null}
                            </div>
                        )      
                    })}
            </div>
        )
    })


    const openMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className={`menu-food-category-container ${menuOpen ? "menu-open" : null}`}>
            <div className="menu-food-category-inner-container">
                <div className="menu-food-items-header">
                    <h4>Set Menus</h4>
                </div>
                <div className="menu-food-items-container">
                    {renderSetMenu}
                </div>
                <div className="menu-open-button">
                    <i className="far fa-times-circle" onClick={openMenu}></i>
                </div>
            </div>
        </div>
    )
}

export default SetMenu;