import React,{Component} from "react";

class BigMoney extends Component{

    state = {
        question:"Jak Hitler miał na imię",
        answer:["Adolf","Adam","Krzysiek", "Łukasz"],
        correct:"Adolf",
        start:false
    }
c
    startGame = ()=>{
        this.setState({
            start:true
        })
    }
    checkAnswer = (answer)=>{
       {answer===this.state.correct? console.log("true"):console.log("false")}
    }

    render(){
     
        return(
            <>
            {this.state.start?<div className="BigMoney">
            <div className="wrap">
                <div id="question">
                    {this.state.question}
                </div>
                <div id="answer">
                    <button onClick={()=>this.checkAnswer(this.state.answer[0])}>{this.state.answer[0]}</button>
                    <button onClick={()=>this.checkAnswer(this.state.answer[1])}>{this.state.answer[1]}</button>
                    <button onClick={()=>this.checkAnswer(this.state.answer[2])}>{this.state.answer[2]}</button>
                    <button onClick={()=>this.checkAnswer(this.state.answer[3])}>{this.state.answer[3]}</button>
                </div>
            </div>
            </div> :<div className="BigMoney">
                <button onClick={this.startGame}> Start Game</button>
            </div>}
            
            </>
        ) 
    }
}
export default BigMoney;