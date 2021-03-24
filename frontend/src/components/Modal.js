import React from 'react'

const Modal = (props) => {
    return (
        <div className="modal" style={{display:`${props.modal}`,position:"absolute",top:"0px", left:"0px", width:"100vw", height:"200vh",backgroundColor: "rgba(255,255,255, 0.7"}}>
            <div id="modal">
            <span id="x" onClick={props.closeModal}>X</span>
            <h3>Szukaj</h3>
            <form>
              <div id="search_input"><input id="value" type="text" placeholder="Czego szukasz?"></input></div>
              <div id="checkboxs">
                <div className="actual"><label>Aktualności</label><input type="checkbox" name='actual'></input></div>
                <div className="games"><label>Gry</label><input type="checkbox" name="games"></input></div>
                <div className="community"><label>Społeczność</label><input type="checkbox" name="community"></input></div>
                </div>
              <div id="search"><input type="submit" value="Szukaj"></input></div>
            </form>
          </div>
        </div>
    )
}
export default Modal;