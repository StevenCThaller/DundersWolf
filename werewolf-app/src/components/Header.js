import React from 'react'
import { Link } from '@reach/router'

const Header = props => {
    return (
        <header className="mHeader">
            <section>
                <h1 className="header-left">{props.headerText}</h1>
            </section>
            <section className="mHead-right">
                <Link to="/register">
                    <button className="header-right">Register</button>
                </Link>
                <Link to='/login'>
                    <button className="header-right">Log In</button>
                </Link>
            </section>
        </header>
    )
}

export default Header
 