
import React, { useState ,useEffect} from "react";
import {Tabs,Tab,AppBar} from '@material-ui/core';
import useLocalStorage from '../hooks/useLocalStorage'
import Editor from './Editor'
function App() {
  const [srcdoc,setsrcdoc]=React.useState('')
  const [html,sethtml]=useLocalStorage('html','')
  const [css,setcss]=useLocalStorage('css','')
  const [js,setjs]=useLocalStorage('js',' ')
  const [value,setValue]= React.useState(0)
  
  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setsrcdoc( `
      <html>
      <body> ${html} </body>
     <style> ${css} </style>
     <script> ${js}</script>
      </html>`)
    },250)
    return () =>clearTimeout(timeout)
  },[html,css,js])
  const changer = (event,value)=>{
setValue(value);
  }

  return (
    <>
   <div>
     <h1>Dyte Project</h1>
      </div>
      <div className="Top_pane">
        <Editor language="HTML" displayname="HTML" value={html} onChange={sethtml} />
        <Editor language="CSS" displayname="CSS" value={css} onChange={setcss} />
        <Editor language="JAVASCRIPT" displayname="JAVASCRIPT" value={js} onChange={setjs}/>
              </div>
              <div className="Bottom_pane">
        <iframe 
        srcDoc={srcdoc}
        width="100%"
        title="output"
        sandbox="allow-scripts"
        height="100%"
        frameBorder="0"

        />
        
      </div>

      </>
  );
}

export default App;
