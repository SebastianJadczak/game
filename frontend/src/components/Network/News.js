import React from 'react'

const News = (props)=>{
    return(
        <div id="news">
            <span>{props.author}</span>
            <p>
                {props.text}
            </p>
        </div>
    )
}
export default News