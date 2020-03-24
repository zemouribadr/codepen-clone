import React from 'react'

export const Js = (props) => {
    return (
        <div className="Js">
            <p>Javascript</p>
            <textarea onChange={(e) => {
                props.onChange("js",e.target.value)
            }}>
                
            </textarea>
        </div>
    )
}

export default Js;