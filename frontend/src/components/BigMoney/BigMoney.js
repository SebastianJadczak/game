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
        firstAnswers:[],
        numberQuestion: 1,
        end_question: false,
        text_after_answer:""
    }

    getRandomInt() {
        let min = 1
        let max = 10
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
        let arrayQuestion = [];
        let arrayAnswer = []
        let array = [];
        for (const property in this.state.questions) {
            arrayQuestion.push(`${this.state.questions[property]}`)
        }
        for (const property2 in this.state.answers) {
          for (const property1 in this.state.answers[property2]) {
            for (const property in this.state.answers[property2][property1]){
                array.push(`${this.state.answers[property2][property1][property]}`)
                //console.log(this.state.answers[property2][property1][property])
        }
        arrayAnswer.push(array)
        array = []
        }
        
    }
    console.log(arrayAnswer)
        this.setState({
            modal:true,
            questions:arrayQuestion,
            firstAnswers: arrayAnswer
        })
        
    }   
chanckCorrect = (answer)=>{
    if(answer===this.state.good_answers[0]){
        this.state.good_answers.shift()
        console.log(  this.state.answers[0])
        
        this.setState({
            modal:false,
            end_question:true,
            text_after_answer: "Poprawna odpowiedź.",
            numberQuestion:this.state.numberQuestion +1
        })
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
        const {start, firstAnswers,numberQuestion, questions } = this.state
   
        return(
            <div className="BigMoney">
            {start? 
            <div id="game-wrap">
                {this.state.modal?
                    <div id="modal_questionGame"><Question question={questions[numberQuestion-1]}/>
                    <div id="answers">
                        <Answer answer={firstAnswers[numberQuestion-1][0]} chanckCorrect={()=>this.chanckCorrect(firstAnswers[numberQuestion-1][0])}/>
                        <Answer answer={firstAnswers[numberQuestion-1][1]} chanckCorrect={()=>this.chanckCorrect(firstAnswers[numberQuestion-1][1])}/>
                        <Answer answer={firstAnswers[numberQuestion-1][2]} chanckCorrect={()=>this.chanckCorrect(firstAnswers[numberQuestion-1][2])}/>
                        <Answer answer={firstAnswers[numberQuestion-1][3]} chanckCorrect={()=>this.chanckCorrect(firstAnswers[numberQuestion-1][3])}/>
                    </div>
                </div>:<button id="number_question" onClick={this.firstQuestion}>Pytanie numer {numberQuestion}</button>}
            </div>
            :
            <ButtonBigMoney handleStart={()=>this.handleStart()}/>}
            {this.state.end_question?
            <div id="text_after_answer"><h3>{this.state.text_after_answer}</h3> <button onClick={this.close}>Zamknij</button></div>
            :null}
            </div>
        ) 
    }
}
export default BigMoney;