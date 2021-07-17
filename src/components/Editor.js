import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as Cedit} from 'react-codemirror2'
export default function Editor(props) {
    const {displayname,language,value,onChange}=props
    function handlechange(editor,data,value){
        onChange(value)
    }
    return (
        <div className="editor-container">
            <div className="editor-title">
{displayname}
            </div>
            <Cedit
            onBeforeChange={handlechange}
            value={value}
            className="code-mirror-wrapper"
            options={{
                lineWrapping:true,
                lint: true,
                mode:language,
                lineNumbers: true,
                theme:'material',

                
            }}
            />
        </div>
    )
}

 
