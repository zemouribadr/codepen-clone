import React, { useState } from 'react'
import './SandBox.css'
import Output from '../components/Output'
import Html from '../components/Html'
import Js from '../components/Js'
import Css from '../components/Css'

const SandBox = () => {
    
    const [html, setHtml] = useState("")
    const [js, setJs] = useState("")
    const [css, setCss] = useState("")
    const [isResizing,setIsResizing] = useState(false) 
    const [width, setWidth] = useState("411")
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
    const handleResize = (e) => {
        if(!isResizing) return
        setWidth(e.clientX)
    }


    return (

        <div className="SandBox" onMouseMove = {handleResize} onMouseUp={(e) => {setIsResizing(false)}}>
            

            <div className="grid f" style={{flex:  `${width}px 0 0` }}>
                <button onClick={renderOutput}>  render </button>
                <Html onChange={handleCodeChange} />
                <Css onChange={handleCodeChange} />
                <Js onChange={handleCodeChange} />
                <div 
                onMouseDown={(e) => {setIsResizing(true)}}
                
                
                className="slider"></div>
            </div>

            <div className="grid">
                <Output content={content}>
                </Output>
            </div>
        </div>
    )

}


export default SandBox