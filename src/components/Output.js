import React from 'react'

 const Output = ({ content }) => {

    console.log("changed", content)
    let html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Render</title>
        <style>${content.css}</style>
    </head>
    <body>
        ${content.html}
        <script>${content.js}</script>
    </body>
    </html>
    `;
    return (
        <div className="Output">
            <iframe srcDoc={html} />
            {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
        </div>
    )
}

export default React.memo(Output);