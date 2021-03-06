import React, { useState } from 'react'
import classNames from 'classnames';


const HoverLink = props => {
    const [bonusClass, setBonusClass] = useState(false);


    const myClasses = classNames({
        "Text-grow": bonusClass,
        "Text-shrink": !bonusClass
    })

    return (
        <a onMouseEnter={ () => setBonusClass(true) } onMouseLeave={ () => setBonusClass(false)  } className={ myClasses }  href={props.link}>{props.text}</a>
    )
}

export default HoverLink
