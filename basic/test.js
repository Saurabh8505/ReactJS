import React from "react";
import ReactDOM from "react-dom/client";
function Hello(prop){
    return <h1>Hello World</h1>
}

const container=document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello/>);