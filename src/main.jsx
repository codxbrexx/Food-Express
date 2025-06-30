import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Usercontext from './context/Usercontext.jsx'
import { Provider } from 'react-redux'
import store from './Redux/Store.js'
import { ThemeProvider } from './context/ThemeContext.jsx' // Import ThemeProvider
import { ToastContainer } from 'react-toastify'; // Import ToastContainer

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <Provider store={store} >
      <ThemeProvider> {/* Wrap with ThemeProvider */}
        <Usercontext>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Usercontext>
      </ThemeProvider>
    </Provider>
   </StrictMode>
);
