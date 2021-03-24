import React from 'react'

const Modal = (props) => {
    return (
        <div className="modal" style={{display:`${props.modal}`,position:"absolute",top:"0px", left:"0px", width:"100vw", height:"100vh",backgroundColor: "rgba(255,255,255, 0.2"}}>
            <div id="modal">
            <span id="x" onClick={props.closeModal}>X</span>
            <h3>Szukaj</h3>
            <form>
              <input id="value" type="text"></input>
              <input type="checkbox"></input>
              <input type="submit" value="Szukaj"></input>
            </form>
          </div>
        </div>
    )
}
export default Modal;