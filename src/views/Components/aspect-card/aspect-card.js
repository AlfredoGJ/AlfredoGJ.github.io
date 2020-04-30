import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import outstyles from "assets/jss/material-kit-react/views/components.js";
const styles = {
    textCenter: {
        textAlign: "center"
    },
    title:{
      fontWeight:'500',
      fontSize: '1.4rem'
    },
    ...outstyles
  };
const useStyles = makeStyles(styles);

export default function MyCard(props) {
  const {title, description,iconName} = props;  
  const classes = useStyles();
  return (
    <div className = {classes.textCenter}>

      <i className="material-icons" style={{fontSize:"80px", color:"darkturquoise"}} >{iconName}</i>
        <h4 className={classes.title}>{title}</h4>
        <p className = {classes.myp}>
            {description}
        </p>
    </div>
    )
}
