import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const styles = {
    textCenter: {
        textAlign: "center"
    },
    title:{
      fontWeight:'500',
      fontSize: '2rem'

    }

  };
const useStyles = makeStyles(styles);

export default function MyCard(props) { 
  const classes = useStyles();
  return (
    <div className ={classes.textCenter}>
      <img
        style={{height: "180px", width: "100%", display: "block"}}
        className={classes.imgCardTop}
        src={require("assets/img/bg3.jpg")}
        alt="Card-img-cap"
      />
        <h4 className={classes.title}>"Who I Am"</h4>
        <p>
           "I Am a potato with a lot of girls"
        </p>
    </div>
  );
}
