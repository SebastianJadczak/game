import React from 'react'


const Answer = (props) => {


    return (
        <div id="answer">
            <button onClick={()=>props.chanckCorrect(props.answer)}>{props.answer}</button>
        </div>
    )
}

export default Answer;