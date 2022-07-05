import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './component/App'
// import './index.css'
import { dataValue } from './config/showData'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  // <React>
    <App value={dataValue} />
  // </React>
)
