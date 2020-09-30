import React from 'react'
import loading from './loading.gif'

const Loading = () => {
    return (
        <React.Fragment>
            <img src={`/${loading}`}  alt="Loading..." style={{width: '200px', display: 'block', margin: 'auto'}}/>
        </React.Fragment>
    )
}
export  default Loading;