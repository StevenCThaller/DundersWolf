import React, {useEffect} from 'react'
import classNames from 'classnames';

const Loading = props => {
    useEffect(()=>{
        console.log(props);
    })

    const spinClass = classNames({
        'spinning-logo': true,
        'fadeaway': props.fade == true
    })
    return (
        <div className={spinClass}>
        <img src={props.logo} className="App-logo" alt="logo" />
      </div>
    )
}

export default Loading
