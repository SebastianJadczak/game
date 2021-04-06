import React, {Component} from 'react'
import AddNews from './AddNews.js'

class Network extends Component {
    render() { 
        return ( 
            <div className="network">
                <div className="left"></div>
                <div className="center">
                    <div id="addNews"><AddNews/></div>
                    <div id="news"></div>
                </div>
                <div className="right"></div>
            </div>
         );
    }
}
 
export default Network;