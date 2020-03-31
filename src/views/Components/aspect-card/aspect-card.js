import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";


// icons
import Schedule from "@material-ui/icons/Schedule";
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
  const {title, description,iconName} = props;  
  const classes = useStyles();
  return (
    <Card className ={classes.textCenter}>
      <CardBody>
      {/* <img
        style={{height: "180px", width: "100%", display: "block"}}
        className={classes.imgCardTop}
        src="..."
        alt="Card-img-cap"
      /> */}
      <i className="material-icons" style={{fontSize:"80px", color:"aquamarine"}} >{iconName}</i>
        <h4 className={classes.cardTitle}>{title}</h4>
        <p>
            {description}
        </p>
      </CardBody>
    </Card>
  );
}
