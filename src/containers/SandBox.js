import React, { useState } from 'react'
import './SandBox.css'
import Output from '../components/Output'
import Html from '../components/Html'
import Js from '../components/Js'
import Css from '../components/Css'

const SandBox = () => {
    console.log("sandbox")
    const [html, setHtml] = useState("")
    const [js, setJs] = useState("")
    const [css, setCss] = useState("")
    const [content, setContent] = useState({
        html : ""  
    })

    const handleCodeChange = (type, value) => {
        switch (type) {
            case "html":
                setHtml(value)
                break;
            case "js":
                setJs(value)
                break;
            case "css":
                setCss(value)
                break;
            default:
                break;
        }

    }

    const renderOutput = () => {
        setContent({ html, js, css })
    }



    return (

        <div className="SandBox">

            <div className="grid f">
                <button onClick={renderOutput}>  render </button>
                <Html onChange={handleCodeChange} />
                <Css onChange={handleCodeChange} />
                <Js onChange={handleCodeChange} />
                <div onMouseMove={(e) => {e.persist();console.log(e, e.clientX , e.screenX)}} className="slider"></div>
            </div>

            <div className="grid">
                <Output content={content}>
                </Output>
            </div>
        </div>
    )

}


export default SandBox