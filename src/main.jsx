
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { Theme } from "@radix-ui/themes";
import { StrictMode } from 'react';
import "@radix-ui/themes/styles.css";

createRoot(document.getElementById('root')).render(

<StrictMode>
    <Theme appearance='dark'>
    <App />
    </Theme>

</StrictMode>


 

   

   
   
  
)
