import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const styles = {
    textCenter: {
        textAlign: "center"
    },
    title:{
      fontWeight:'500',
      fontSize: '1.4rem'
    }
  };
const useStyles = makeStyles(styles);

export default function MyCard(props) {
  const {title, description,iconName} = props;  
  const classes = useStyles();
  return (
    <div className = {classes.textCenter}>

      <i className="material-icons" style={{fontSize:"80px", color:"aquamarine"}} >{iconName}</i>
        <h4 className={classes.title}>{title}</h4>
        <p>
            {description}
        </p>
    </div>
    )
}
