import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ScrollToTop } from './components/index.jsx';
import { BrowserRouter as Router  } from 'react-router-dom';
import { FilterProvider,CartProvider } from './Context';
import App from './App.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Router>
        <CartProvider>
            <FilterProvider>
                  <ScrollToTop/>
                  <App />
            </FilterProvider>
        </CartProvider>
     </Router>
  </StrictMode>,
)
