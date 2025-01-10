import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function Myapp(){
  return(
    <div>
      <App/>
      <h1>Joy Baba Loknath</h1>
    </div>
  )
}

const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google'
)

createRoot(document.getElementById('root')).
render(
<Myapp/>
);
