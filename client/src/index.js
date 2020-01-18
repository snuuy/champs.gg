import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import "./index.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/popper.js/dist/popper.min.js';

ReactDOM.render(
    <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <script src="https://kit.fontawesome.com/c77a6649eb.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" integrity="sha384-REHJTs1r2ErKBuJB0fCK99gCYsVjwxHrSU0N7I1zl9vZbggVJXRMsv/sLlOAGb4M" crossorigin="anonymous"></link>
        <App />
    </>,
    document.getElementById("root")
);