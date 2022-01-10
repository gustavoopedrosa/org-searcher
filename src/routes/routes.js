import React from "react"
import { Route, BrowserRouter, Routes as Switch } from "react-router-dom"

import Home from "../pages/Home/home.js"
import Repos from "../pages/Repos/repos.js"

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route element = { <Home/> } path="/" exact/>
                <Route element = { <Repos/> } path=":repos"/>
            </Switch>
        </div>
    )
}

export default Routes