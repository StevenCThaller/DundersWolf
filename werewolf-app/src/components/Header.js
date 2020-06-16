import React from 'react'

const Header = props => {
    return (
        <header className="mHeader">
            <h1 className="slide-right">{props.headerText}</h1>
        </header>
    )
}

export default Header
