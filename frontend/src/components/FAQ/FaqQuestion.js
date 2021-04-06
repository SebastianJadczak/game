import React, {Component} from 'react'



class FaqQuestion extends Component {
    constructor(props) {
        super(props);
      }
    state={
          answer_display:"none"
        }

    handleAnswer = ()=>{
        if(this.state.answer_display ==="none"){
            this.setState({
                answer_display:"block"
            })
        }else{
            this.setState({
                answer_display:"none"
            })
        }
    }
    
    render(){

        const {answer_display} = this.state

        return (
        <div id="faq_part">
            <div id="question" onClick={this.handleAnswer}>
                <h3>{this.props.question}</h3>
            </div>
            <div id="answer" style={{display:answer_display}}>
                <p>{this.props.answer}</p>
            </div>
            </div>
        )
}
}
export default FaqQuestion;