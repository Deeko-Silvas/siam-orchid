import React from 'react';
import './menuDownload.css';

const MenuDownload = ({ menus }) => {
    const renderMenus = menus.map((menu, index )=> {
        return (
        <a href={`$documents/${menu.link}`} key={index}>{`Download our ${menu.title}`}</a>
        )
    })

    return (
        <div className="menu-download-container">
            {renderMenus}
        </div>
    )
}

export default MenuDownload;