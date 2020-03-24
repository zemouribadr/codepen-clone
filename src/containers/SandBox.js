import React from 'react'
import './SandBox.css'
import Output from '../components/Output'
import Html from '../components/Html'
import Js from '../components/Js'
import Css from '../components/Css'
class SandBox extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            html : "",
            js : "",
            css : ""
        }
    }
    
     handleCodeChange = (type,value) => {
     
        this.setState({[type]:value})
     
    }
    renderOutput = () => {
        let skeleton = ``;
    }
    render() {
        
        
        
        
        return (

            <div className="SandBox">

                <div className="grid f">
                    <button onClick={this.renderOutput}>  render </button>
                    <Html onChange={this.handleCodeChange}/>
                    <Css onChange={this.handleCodeChange}/>
                    <Js onChange={this.handleCodeChange}/>
                </div>
                
                <div className="grid">
                    <Output content ={'<h1><button onClick="alert(\'test\')">test<button/> hello world</h1>'}>


                    </Output>
                </div>
            </div>
        )
    }
}

export default SandBox