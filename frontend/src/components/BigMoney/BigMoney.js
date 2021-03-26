import React,{Component} from "react";
import ButtonBigMoney from './ButtonBigMoney'

class BigMoney extends Component{

    getQuestion = ()=>{
      
        for(let i = 0; i<3; i++){
            fetch(`/api/question/1`, {
                method: 'GET'
            })
                .then(r => r.json())
                .then(data => {
                    console.log(data.answers[0])
                })
        }
    }

    render(){
     
        return(
            <>
       
            </>
        ) 
    }
}
export default BigMoney;