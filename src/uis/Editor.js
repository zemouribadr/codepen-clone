import React, { useState } from 'react'
import './Editor.css'

const Editor = () => {
    const [focus, setFocus] = useState(false)
    const [content, setContent] = useState(["¨"])
    const [line, setLine] = useState(0)

    const handleKeyDown = (e) => {
        switch (e.key) {
            case "ArrowLeft":

                
                let arr = [...content]
                const index = arr[line].indexOf("¨")

                let a = arr[line].split("")
                let x = a[index-1]
                a[index-1] = a[index]  
                a[index] = x
                arr[line] = a.join("")
                
                setContent(arr)

                

                break;

            case "ArrowRight":

                break;
            default:
                break;
        }

        
    }
    const handleKeyPress = (e) => {
        switch (e.key) {
            case "Enter":
                content.push("")
                setLine(line + 1)
                break;

            default:
                let arr = [...content]
                arr[line] = arr[line].concat(e.key).replace("¨", "").concat("¨")

                setContent(arr)
                break;
        }
        e.preventDefault()


    }

    return (

        <div className={`editor`}
            onMouseDown={() => setFocus(true)}
            tabIndex="0"
            onKeyPress={handleKeyPress}
            onKeyDown={handleKeyDown}
        >
            <pre>
                {

                    content.map((l, index) =>
                        (<div key={`e-${index}`}>
                            {
                                (l.split("").length === 0) ?
                                    <br />
                                    :
                                    l.split("").map((char, i) =>
                                        (char === "¨") ?
                                            focus && <span key={i} className="cursor blink"></span>
                                            :
                                            (<span key={i}>{char}</span>)
                                    )}
                        </div>)
                    )
                }

            </pre>
        </div>
    )
}


export default Editor