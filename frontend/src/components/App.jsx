import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Preferences from './Preferences';

function App() {
    return (
        <React.Fragment>
            <Login></Login>
        </React.Fragment>
    );
}

export default App;

/*
return (

    <></>

  );

}

export default App;

*/