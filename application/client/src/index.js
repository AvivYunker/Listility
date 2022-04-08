import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css'
import './index.css'
import App from './App'
import { AppProvider } from './context/appContext'
import { store } from './app/store'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)