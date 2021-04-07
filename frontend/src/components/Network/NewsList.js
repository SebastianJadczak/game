import React, {Component} from "react"
import News from "./News.js"

class NewsList extends Component {

    state = {
        news:[]
    }
   
    componentDidMount() {

        fetch('/api/news', {
            method: 'GET'
        })
            .then(r => r.json())
            .then(data => {
                this.setState({
                    news: data
                })
            })
    }

    render() { 
        const {news} = this.state
        let newsList = news.map(item=>(
            <li key={item.id}><News text={item.text} author={item.author}/></li>
        ))

        return ( 
            <>
            <ul>
                {newsList}
            </ul>
            </>
         );
    }
}
 
export default NewsList;