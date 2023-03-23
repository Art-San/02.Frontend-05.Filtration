import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import App2 from './transportation/App2'
// import CountersList from './0 counter/CountersList'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
        <App2 />
        {/* <CountersList /> */}
    </React.StrictMode>
)
