import React,{Component} from "react";
import ButtonBigMoney from './ButtonBigMoney'
import Question from "./Question.js"
import Answer from "./Answer.js"

class BigMoney extends Component{

    state ={
        start:false,
        modal: false,
        questions:[] ,
        good_answers: [],
        answers:[],
        firstQuestion:"",
        firstAnswers:[],
        numberQuestion: 1,
        end_question: false,
        text_after_answer:""
    }

    getRandomInt() {
        let min = 1
        let max = 2
        min = Math.ceil(min);
        max = Math.floor(max);
        let random=[];
        for(let i = 0; i<10; i++){
           random.push(Math.floor(Math.random() * (max - min) + min))
        }
        return random;
      }
    startGame = ()=>{
        this.setState({
            start:true
        })
    }

    getQuestion = ()=>{
        let arrayQuestionNumber = this.getRandomInt()
        let questions = [];
        let good_answers = [];
        let answers = [];
        let answers_part = []; 

        for(let i = 1; i<=arrayQuestionNumber.length; i++){
            fetch(`/api/question/${arrayQuestionNumber[i-1]}`, {
                method: 'GET'
            })
                .then(r => r.json())
                .then(data => {
                    questions.push(data.question)
                    good_answers.push(data.good_answer)
                    answers_part.push(data.first_answer)
                    answers_part.push(data.second_answer)
                    answers_part.push(data.third_answer)
                    answers_part.push(data.fourth_answer)
                    answers.push([answers_part])
                    answers_part=[]
                })
        }
        this.setState({
            questions,
            good_answers,
            answers
        })
    }

    handleStart = ()=>{
        this.getQuestion()
        this.startGame()
 
        
    }
    firstQuestion = ()=>{
        for (const property in this.state.questions) {
            this.setState({
                modal:true,
                firstQuestion:this.state.questions[property]
            })
            break;
          }
        let array = [];
          for (const property in this.state.answers[0][0]) {
            array.push(`${this.state.answers[0][0][property]}`)
        }
        this.setState({
            firstAnswers: array
        })
    }
chanckCorrect = (answer)=>{
    if(answer===this.state.good_answers[0]){
        this.setState({
            modal:false,
            end_question:true,
            text_after_answer: "Poprawna odpowiedź.",
            numberQuestion:this.state.numberQuestion +1
        })
       
        console.log(this.state.numberQuestion)
    }
    else
    this.setState({
        modal:false,
        end_question:true,
        text_after_answer: "Błędna odpowiedź."
    })

}
close=()=>{
    this.setState({
        end_question:false
    })
}

    render(){
        const {start, firstAnswers,numberQuestion, firstQuestion } = this.state
        
            
   
        return(
            <div className="BigMoney">
            {start? 
            <div id="game-wrap">
                {this.state.modal?
                    <div id="modal_questionGame"><Question question={firstQuestion}/>
                    <div id="answers">
                        <Answer answer={firstAnswers[0]} chanckCorrect={()=>this.chanckCorrect(firstAnswers[0])}/>
                        <Answer answer={firstAnswers[1]} chanckCorrect={()=>this.chanckCorrect(firstAnswers[1])}/>
                        <Answer answer={firstAnswers[2]} chanckCorrect={()=>this.chanckCorrect(firstAnswers[2])}/>
                        <Answer answer={firstAnswers[3]} chanckCorrect={()=>this.chanckCorrect(firstAnswers[3])}/>
                    </div>
                </div>:<button id="number_question" onClick={this.firstQuestion}>Pytanie numer {numberQuestion}</button>}
            </div>
            :
            <ButtonBigMoney handleStart={()=>this.handleStart()}/>}
            {this.state.end_question?
            <div id="text_after_answer"> <>{this.state.text_after_answer} <button onClick={this.close}>Zamknij</button></></div>
            :null}
            </div>
        ) 
    }
}
export default BigMoney;