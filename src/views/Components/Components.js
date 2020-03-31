import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

import "./Components.css";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";



// sections for this page
import { LeftLinks, RightLinks } from "components/Header/HeaderLinks.js";
import AspectCard  from "./aspect-card/aspect-card"
import DescriptionCard from './description-card/description-card'
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand=""
        rightLinks={<RightLinks />}
        leftLinks={<LeftLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Hi, I'm Alfredo Granja.</h1>
                <h3 className={classes.subtitle}>
                  Web developer. Creative, self-taught and passionate to learn
                  new things. Physics enthusiast and maker in my spare time.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer spacing={1} className="container">
          <GridItem>
            <h1 className="text-center">About</h1>
          </GridItem>

          <GridItem lg={3}>
            <AspectCard title="Titulo" description ="es una descripcion" iconName="alarm">

            </AspectCard>
          </GridItem>
          <GridItem lg={3}>
            <AspectCard title="Titulo" description ="es una descripcion" iconName="alarm">

            </AspectCard>
          </GridItem>
          <GridItem lg={3}>
            <AspectCard title="Titulo" description ="es una descripcion" iconName="alarm">

            </AspectCard>
          </GridItem>
          <GridItem lg={3}>
            <AspectCard title="Titulo" description ="es una descripcion" iconName="alarm">

            </AspectCard>
          </GridItem>

          
          <GridItem lg={6}>
            <DescriptionCard>
            </DescriptionCard>
          </GridItem>

          <GridItem lg={6}>
            <DescriptionCard>
            </DescriptionCard>
          </GridItem>
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
}
