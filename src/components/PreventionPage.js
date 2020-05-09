import React from "react";
import {Grid,Card,Typography, CardContent, CardMedia} from "@material-ui/core";
import cs from "classnames";
// import styles from "../styles/components/_cards_prevention.css"

const PreventionPage = () => (
    <div className = {cs("container_card","container")} >
        <Grid container spacing = {4} justify="center">
            <Grid item xs = {12} md = {3} component={Card} className = {"card_custom"}>
            <CardMedia
                component="img"
                alt="Washing Hands"
                height="200"
                width="50"
                image="/images/washing_hands.gif"
                title="Wash Your Hands"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" >Washing Hands</Typography>
                <Typography variant="body2" color="textSecondary" component="p">Clean your hands often. Use soap and water, or an alcohol-based hand rub.</Typography>
            </CardContent>
            </Grid>

            <Grid item xs = {12} md = {3} component={Card} className = {"card_custom"}>
            <CardMedia
                component="img"
                alt="Washing Hands"
                height="200"
                width="50"
                image="/images/social_distance.gif"
                title="Social Distance"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">Social Distancing</Typography>
                <Typography variant="body2" color="textSecondary">Maintain a safe distance from anyone who is coughing or sneezing.</Typography>
            </CardContent>
            </Grid>

            <Grid item xs = {12} md = {3} component={Card} className = {"card_custom"}>
            <CardMedia
                component="img"
                alt="Washing Hands"
                height="200"
                width="50"
                image="/images/war_mask.gif"
                title="Wear Mask"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">Wear A Mask</Typography>
                <Typography variant="body2" color="textSecondary" component="p">Don’t touch your eyes, nose or mouth.
Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</Typography>
            </CardContent>
            </Grid>
        </Grid>
    </div>
);

export default PreventionPage;