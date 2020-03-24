import React from 'react'

export const Output = ({content}) => {
    return (
        <div className="Output">
            <iframe srcDoc={content}/>
            {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
        </div>
    )
}

export default Output;