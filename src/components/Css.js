import React from 'react'

export const Css = (props) => {
    return (
        <div className="Css">
            <p>Css</p>
            <textarea onChange={(e) => {
                props.onChange("css", e.target.value)
            }}>

            </textarea>
        </div>
    )
}

export default Css;