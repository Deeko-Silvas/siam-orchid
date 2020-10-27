import React from 'react';
import './navigation.css';

const Navigation = ({ pages, burgerOpen }) => {
    const renderedLinks = pages.map( page => {
        return (
            <React.Fragment key={page}>
                <li>
                    {page === "home" ? <a href="/">{page}</a> : <a href={`${page}`}>{page}</a>}
                </li>
            </React.Fragment>
        )
    })

    return (
        <nav className={`${burgerOpen ? "open" : null}`}>
            <ul>
                {renderedLinks}
            </ul>
        </nav>
    )
}

export default Navigation;