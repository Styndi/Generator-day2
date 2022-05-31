import React from "react";
import {Meme} from "../Meme/Meme";
import { Switch, Route } from 'react-router-dom';
import {MemeGenerated} from "../MemeGenerated/MemeGenerated";
/*import styles from './styles.module.css'*/


export const App = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Meme />
            </Route>
            <Route path="/generated">
                <MemeGenerated />
            </Route>
        </Switch>
    )
}

/*1. render all meme templates
* 2. create meme page, imputs and buttons
* 3. generate url to get meme
* 4. display meme from response*/