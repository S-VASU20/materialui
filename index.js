import React from "react";
import  ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';


const AppLayout=()=>{
    return(
        <BrowserRouter>
        <App/>
        </BrowserRouter>
       
        
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);