import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store'

import App from './modules/App/App'

import './shared/styles/variables.css'
import './shared/styles/reset.css'
import './shared/styles/common.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter >
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
