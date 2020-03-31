import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";


import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
    ...imagesStyles,
    cardTitle,
    textCenter: {
        textAlign: "center"
      },
  };
const useStyles = makeStyles(styles);

export default function MyCard(props) { 
  const classes = useStyles();
  return (
    <Card className ={classes.textCenter}>
      <CardBody>
      <img
        style={{height: "180px", width: "100%", display: "block"}}
        className={classes.imgCardTop}
        src={require("assets/img/bg3.jpg")}
        alt="Card-img-cap"
      />
        <h4 className={classes.cardTitle}>"Who I Am"</h4>
        <p>
           "I Am a potato with a lot of girls"
        </p>
      </CardBody>
    </Card>
  );
}
