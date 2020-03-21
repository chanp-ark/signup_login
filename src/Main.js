import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "./client/HomePage/home";
import SignUp from "./client/SignUp/sign_up.component";
import LogIn from "./client/LogIn/log_in.component"

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/signup' component={SignUp} />
                <Route path='/login' component={LogIn} />
            </Switch>
        </main>
    )
}


export default Main