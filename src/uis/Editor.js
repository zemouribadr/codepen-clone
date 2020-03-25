import React, { useState } from 'react'


const Editor = () => {
    const [focus, setFocus] = useState(false)
    const [content, setContent] = useState("")

    const handleKeyPress = (e) => {
        setContent(content.concat(e.key))
    }
    return (
        <div className={`editor`}
            onMouseDown={() => setFocus(true)}
            tabIndex="0"
            onKeyPress={handleKeyPress}
        >
            {
                content.split("").map((char,i) =>
                    (<span key={i}>{char}</span>)
                )
            }
            {focus && <span className="cursor blink"></span>}
        </div>
    )
}


export default Editor