import React from 'react'

export default (props) => {
    return (
        <div className="Html">
            <p>Html</p>
            <textarea onChange={(e) => {
                props.onChange("html",e.target.value)
            }}>
                
            </textarea>
        </div>
    )
}