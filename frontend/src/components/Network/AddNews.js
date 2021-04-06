import React from 'react'
import photo from "../../../static/images/seba.jpg"

const AddNews = ()=>{
    return(
        <>
        <div className="top">
            <div id="photo"><img src={photo}/></div>
            <div id="form">
                <input placeholder="O czym myślisz?"></input>
            </div>
        </div>
        <div className="bottom">

        </div>
        </>
    )
}
export default AddNews