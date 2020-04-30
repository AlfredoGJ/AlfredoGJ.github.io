import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import outstyles from "assets/jss/material-kit-react/views/components.js";

const styles = {
    textCenter: {
        textAlign: "center"
    },
    title:{
      fontWeight:'500',
      fontSize: '2rem',
      textAlign:'center'

    },
    ...outstyles

  };
const useStyles = makeStyles(styles);

export default function MyCard(props) { 
  const classes = useStyles();
  return (
    <Grid container className ={classes.textCenter} justify='center'>
      <Grid item xs ={5}>
      <img
        style={{ width:'100%', borderRadius:'50%'}}
        className={classes.imgCardTop}
        src={require("assets/img/yomero7.jpg")}
        alt="Card-img-cap"
      />
      </Grid>
      
      <Grid item xs={12}>
        <h4 className={classes.title}>"Who I Am"</h4>
      </Grid>
       
      <Grid item xs ={12}>
      <p className ={classes.myp}>
           Computer Science Engineer. Creative, self-taught and passionate to learn
                  new things. Physics enthusiast and maker in my spare time. I have a lot of fun programming web applications and video games
        </p>
      </Grid>
        
    </Grid>
  );
}
