import React from "react";
import {Grid,Card,Typography, CardContent} from "@material-ui/core";
import CountUp from "react-countup";
import cs from "classnames";
import LoadingPage from "./LoadingPage";

export default ({data : {confirmed,recovered,deaths,lastUpdate}}) => {
  if(!confirmed)
    return <LoadingPage/>;
    
    return(
        <div className={cs("container_card","container")}>
            <Grid container spacing = {2} justify="center">
                <Grid item xs = {12} md = {3} component = {Card} className={cs("card_custom", "infected")}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {confirmed.value} duration = {2} />
                        </Typography>
                        <Typography color="textSecondary">Last Update: {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body1">Number of active cases of Covid 19</Typography>
                    </CardContent>
                </Grid>

                <Grid item xs = {12} md = {3} component = {Card} className={cs("card_custom", "recovered")}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {recovered.value} duration = {2} />
                        </Typography>
                        <Typography color="textSecondary">
                            Last Update: {new Date(lastUpdate).toDateString()}    
                        </Typography>
                        <Typography variant="body1">Number of recoveries from Covid 19</Typography>
                    </CardContent>
                </Grid>

                <Grid item xs = {12} md = {3} component = {Card} className={cs("card_custom", "deaths")}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {deaths.value} duration = {2} />
                        </Typography>
                        <Typography color="textSecondary"> Last Update: {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body1">Number of deaths of Covid 19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
    
};