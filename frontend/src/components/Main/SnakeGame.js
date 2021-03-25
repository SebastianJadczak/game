import React, {Component} from 'react';
import Snake from './Snake/Snake.js';
import Food from './Snake/Food.js'

const getRandomCoordinates = () =>{
    let min = 1;
    let max = 99;
    let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2
    let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2
    return [x,y]
}

const initialState ={
        start:false,
        food:getRandomCoordinates(),
        speed:170,
        direction: 'RIGHT',
        snakeDots: [
            [0,0],
            [2,0],
        ]
    
}
var interval;
class Platform extends Component {
    state = initialState;


    component(){
      interval= setInterval( this.moveSnake ,this.state.speed, document.onkeydown = this.onKeyDown)
        
    }
    componentDidUpdate(){
        this.checkIfOutOfBorders();
        this.chckIfCollapsed();
        this.checkIfEat();
    }
    onKeyDown = (e) =>{
        e = e || window.event;
        switch (e.keyCode){
            case 38:
                this.setState({direction:'UP'})
                break;
            case 40:
                this.setState({direction:'DOWN'})
                break;
            case 37:
                this.setState({direction:'LEFT'})
                break;
            case 39:
                this.setState({direction:'RIGHT'})
                break;
        }
    }

    moveSnake = () => {
        let dots = [...this.state.snakeDots];
        let head = dots[dots.length - 1];

        switch (this.state.direction){
            case 'RIGHT':
                head = [head[0]+2, head[1]]
                break;
            case 'LEFT':
                head = [head[0]-2, head[1]]
                break;
            case 'DOWN':
                head = [head[0], head[1]+2]
                break;
            case 'UP':
                head = [head[0], head[1]-2]
                break;
        }
        dots.push(head);
        dots.shift();
        this.setState({
            snakeDots:dots,
        })
    }
    checkIfOutOfBorders(){
        let head = this.state.snakeDots[this.state.snakeDots.length - 1];
        if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1]< 0){
            this.gameOver();
        }
    }

    chckIfCollapsed(){
        let snake = [...this.state.snakeDots];
        let head = snake[snake.length - 1];
        snake.pop();
        snake.forEach(dot =>{
            if(head[0]==dot[0] && head[1] == dot[1]){
                this.gameOver();
            }
        })
    }
    checkIfEat(){
        let head = this.state.snakeDots[this.state.snakeDots.length - 1];
        let food = this.state.food;
        if (head[0] == food[0] && head[1] == food [1]){
            this.setState({
                food: getRandomCoordinates(),
            })
            this.enlargeSnake();
            this.increaseSpeed();
        }
    }

    enlargeSnake(){
        let newSnake = [...this.state.snakeDots];
        newSnake.unshift([])
        this.setState({
            snakeDots: newSnake
        })
    }
    increaseSpeed(){
        if (this.state.speed >10){
            this.setState({
                speed: this.state.speed - 10
            })
        }
    }

    gameOver(){
        alert(`Koniec, Twój wąż ma długość ${this.state.snakeDots.length - 1}`)
        this.setState(initialState);
        clearInterval(interval);
    }
    startGame(){
        this.setState({
            start:true
        })
    }

    render(){
    return (
       <>
        {this.state.start?  <div id="snake">
        <div className="game-area">
        <Snake snakeDots={this.state.snakeDots}/>
        <Food dot={this.state.food}/>
        </div>
        </div>
        :
        <div id="snake">
        <button onClick={()=>{this.setState({
            start:true
        });
        this.component()}}>Start Game</button>
        </div>
        }
        
      </>
    )
}}
export default Platform;