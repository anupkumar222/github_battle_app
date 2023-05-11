import React from "react";
import { Switch, Route } from "react-router-dom";
import Popular from "./Popular"
import UserBattle from "./userBattle";

export default function Main () {
    return(
        <Switch>
        <Route path="/" exact>
               <Popular />
        </Route>
        <Route path="/battle" exact>
            <UserBattle />
        </Route>
    </Switch>
    )

}