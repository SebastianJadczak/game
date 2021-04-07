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
            <div id="add_video"><i class="fas fa-film"></i><p>Video</p></div>
            <div id="add_photo"><i class="fas fa-camera"></i><p>Photo</p></div>
            <div id="emotions"><i class="far fa-grin-wink"></i><p>Nastrój</p></div>
        </div>
        </>
    )
}
export default AddNews