import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CurdContext from './componets/contexApi/Curdcontext/CurdContext.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CurdContext>
      <App />
    </CurdContext>
  </StrictMode>
);
