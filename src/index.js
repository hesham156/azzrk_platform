import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './asset/css/normalize.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './asset/css/public.css'
import 'aos/dist/aos.css'
import Aos from 'aos';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import store from './redux/store';
Aos.init()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
      <ToastContainer/>
        <App />
    </Router>
  </React.StrictMode>
  </Provider>   
);

