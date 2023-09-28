import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Store from './store/Store.tsx'
import { Provider } from 'react-redux'
// import Router from './router/Router'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App/>
    </Provider>
  </React.StrictMode>,
)
