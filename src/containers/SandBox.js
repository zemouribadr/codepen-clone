import React from 'react'
import './SandBox.css'
import Output from '../components/Output'
import Html from '../components/Html';

class SandBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            choice: "html"
        }
    }

    render() {

        //Refractor
        let choice = (<Html></Html>)
        if (this.state.choice === "css") {

        } else if (this.state.choice === "js") {

        }

        return (
            <div className="SandBox">
                <div className="grid f">
                    <ul>
                        <li>Html</li>
                        <li>Css</li>
                        <li>Js</li>
                    </ul>
                </div>
                <div className="grid">
                    {choice}
                </div>
                <div className="grid">
                    <Output></Output>
                </div>
            </div>
        )
    }
}

export default SandBox;