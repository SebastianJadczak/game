import React from 'react'

const News = (props)=>{
    return(
        <div id="news">
            <p>
                {props.text}
            </p>
            <span>{props.author}</span>
        </div>
    )
}
export default News