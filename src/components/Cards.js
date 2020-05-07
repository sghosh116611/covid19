import React from "react";
import {Grid,Card,Typography, CardContent} from "@material-ui/core";
import CountUp from "react-countup";
import accounting from "accounting-js";

export default ({data : {confirmed,recovered,deaths,lastUpdate}}) => {
  if(!confirmed)
    return "Loading";
    
    return(
        <div>
            <Grid container spacing = {4} justify="center">
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {confirmed.value} duration = {2} />
                        </Typography>
                        <Typography color="textSecondary">Last Update: {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body1">Number of active cases of Covid 19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component = {Card}>
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

                <Grid item component = {Card}>
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