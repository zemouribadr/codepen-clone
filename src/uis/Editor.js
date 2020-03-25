import React, { useState } from 'react'
import './Editor.css'

const Editor = () => {
    const [focus, setFocus] = useState(false)
    const [content, setContent] = useState([""])
    const [line, setLine] = useState(0)

    const handleKeyPress = (e) => {
        switch (e.key) {
            case "Enter":
                content.push("")
                setLine(line + 1)
                break;

            default:
                let arr = [...content]
                arr[line] = arr[line].concat(e.key)
                setContent(arr)
                break;
        }

        e.stopPropagation()
        e.preventDefault()
    }
    return (
        <div className={`editor`}
            onMouseDown={() => setFocus(true)}
            tabIndex="0"
            onKeyPress={handleKeyPress}
        >
            <pre>
                {
                    content.map((l, index) =>
                        (<div key={`e-${index}`}>
                            {(l.split("").length == 0) ?
                                <br />
                                :
                                l.split("").map((char, i) =>
                                    (<span key={i}>{char}</span>)
                                )}
                        </div>)
                    )
                }
                {focus && <span className="cursor blink"></span>}
            </pre>
        </div>
    )
}


export default Editor