import React,{Component} from "react";
import ButtonBigMoney from './ButtonBigMoney'

class BigMoney extends Component{

    state = {
        question:"",
        answer:[],
        correct:"",
        start:false
    }

    componentDidMount(){
        this.getQuestion();
    }

    startGame = ()=>{
        this.setState({
            start:true
        })
    }
    checkAnswer = (answer)=>{
       {answer===this.state.correct? console.log("true"):console.log("false")}
    }

    randomQuestion= ()=> {
        let min = 1
        let max = 5
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min)
    }

    getQuestion = () =>{
        
        let random = this.randomQuestion()

        fetch(`/api/question/${random}`, {
            method: 'GET'
        })
            .then(r => r.json())
            .then(data => {
                this.setState({
                    question: data.question,
                    correct: data.good_answer,
                    answer: data.answers

                })
                this.getAnswer()
            })
           
    }
    getAnswer = ()=>{
        let draft_answer = [];
        for(let i = 0; i<=this.state.answer.length -1 ; i++){

            fetch(`/api/answer/${this.state.answer[i]}`, {
                method: 'GET'
            })
                .then(r => r.json())
                .then(data => {
                    draft_answer.push(data.title)
                })
    }
    this.setState({
        answer: draft_answer
    })
    console.log(this.state.answer)
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
                    <ButtonBigMoney answer={()=>this.checkAnswer(this.state.answer[0])} text={this.state.answer[0]}/>
                    <ButtonBigMoney answer={()=>this.checkAnswer(this.state.answer[1])} text={this.state.answer[1]}/>
                    <ButtonBigMoney answer={()=>this.checkAnswer(this.state.answer[2])} text={this.state.answer[2]}/>
                    <ButtonBigMoney answer={()=>this.checkAnswer(this.state.answer[3])} text={this.state.answer[3]}/>
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