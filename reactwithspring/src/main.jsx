import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GetEx2 from './component/GetEx2.jsx'
import PostEx from './component/PostEx.jsx'
import PutEx from './component/PutEx.jsx'
import DeleteEx from './component/DeleteEx.jsx'
import Master from './component/Master.jsx'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Master />
    </BrowserRouter>
    
  </React.StrictMode>,
)
