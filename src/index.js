import "./index.css";
import reactDom from "react-dom";
import React from "react";
import Calculator from "./main/Calculator";
import App from './App'

reactDom.render(
    <div>
        <h1>Calculadora</h1>
        <Calculator />
    </div>,
    document.getElementById("root")
);
