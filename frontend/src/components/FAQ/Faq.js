import React, {Component} from 'react'
import FaqQuestion from './FaqQuestion.js'

class Faq extends Component{
    state={
        dataFAQ: [],
    }

    componentWillMount() {

        fetch('/api/faq', {
            method: 'GET'
        })
            .then(r => r.json())
            .then(data => {
                this.setState({
                    dataFAQ: data
                })
            })
    }


    render(){
        const faq = this.state.dataFAQ.map(item => (
            <li key={item.id}> 
              <FaqQuestion question={item.question} answer={item.answer}/>
            </li>
        ))
    return(
        <div className="faq">
            <div id="wrap">
                <div className="title">
                    <i class="fas fa-star"></i>
                    <h3 id="title">Najczęściej zadawane pytania</h3>
                    <i class="fas fa-star"></i>
                </div>
            
                <ul>
                    {faq}
                </ul>
                </div>
        </div>
    )
}}
export default Faq;