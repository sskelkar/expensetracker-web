import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from "../containers/Dashboard";
import {Header} from "../components/Header";
import {NotFound} from "./NotFound";
import {Report} from "../components/Report";
import {Grid} from "react-bootstrap";

export const Main = () => <main>
    <Header/>
    <Grid>
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/report" component={Report}/>
            <Route component={NotFound}/>
        </Switch>
    </Grid>
</main>