import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "../components/Header";
import TrackerPage from "../components/Tracker";
import PreventionPage from "../components/PreventionPage";
import NotFoundPage from "../components/NotFoundPage";
import Footer from "../components/Footer";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path = "/" exact component = {TrackerPage}/>
                <Route path = "/prevention" component = {PreventionPage}/>
                <Route component = {NotFoundPage}/>
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
);

export default AppRouter;