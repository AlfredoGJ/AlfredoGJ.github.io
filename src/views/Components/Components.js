import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";
import Grid from '@material-ui/core/Grid'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
// sections for this page
import { LeftLinks, RightLinks } from "components/Header/HeaderLinks.js";
import AspectCard  from "./aspect-card/aspect-card"
import DescriptionCard from './description-card/description-card'
import SkillLevel from './skill-level/skill-level'
import styles from "assets/jss/material-kit-react/views/components.js";
const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div id = "Home">
      <Header
        brand=""
        leftLinks={<LeftLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax  image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <Grid container>
            <Grid>
              <div className={classes.brand}>
                <h1 className={classes.title}>Hi, I'm Alfredo Granja.</h1>
                <h3 className={classes.subtitle}>
                  Web developer. Creative, self-taught and passionate to learn
                  new things. Physics enthusiast and maker in my spare time.
                </h3>
              </div>
            </Grid>
          </Grid>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <Grid container spacing ={10} className = {classNames(classes.container, classes.gridContainerMaster)}  justify= 'cspaced-between' direction = 'column' alignItems = 'center' >
           
           {/* About Section  */}
          <Grid container item spacing={8}  xs={12} id='About'>
            <Grid item xs ={12}>
              <h1  className={classes.textCenter}>About</h1>
            </Grid>

            <Grid item lg={3}>
              <AspectCard title="Titulo" description ="es una descripcion" iconName="alarm">

              </AspectCard>
            </Grid>
            <Grid item lg={3}>
              <AspectCard title="Titulo" description ="es una descripcion" iconName="alarm">

              </AspectCard>
            </Grid>
            <Grid item lg={3}>
              <AspectCard title="Titulo" description ="es una descripcion" iconName="alarm">

              </AspectCard>
            </Grid>
            <Grid item lg={3}>
              <AspectCard title="Titulo" description ="es una descripcion" iconName="alarm">

              </AspectCard>
            </Grid>

            
            <Grid item lg={6}>
              <DescriptionCard>
              </DescriptionCard>
            </Grid>

            <Grid item lg={6}>
                <SkillLevel  skill= {'Kill people'} level ={25} color ={'turquoise'}/>
                <SkillLevel  skill= {'Kill people'} level ={40} color ={'turquoise'}/>
                <SkillLevel  skill= {'Kill people'} level ={79} color ={'turquoise'}/>
            </Grid>
          </Grid>

          {/* Contact Section */}
          <Grid container item spacing ={8} xs={12} id= 'Contact'>
            <Grid item xs = {12}>
              <h1  className={classes.textCenter}>Contact</h1>
            </Grid>

            <Grid container item xs= {12}  justify= "center">
            <Grid item xs = {2} className ={classes.gridIconContainer}>
                <MailIcon className = {classNames(classes.contactIcons, classes.githubIcon)}/>
              </Grid>
            </Grid>
            <Grid container item spacing ={4} xs ={12}  justify= "center" direction = 'row' >
              <Grid item xs = {2} className ={classes.gridIconContainer}>
                <GitHubIcon className = {classNames(classes.contactIcons, classes.githubIcon)}/>
              </Grid>
              
              <Grid item xs = {2} className ={classes.gridIconContainer}>
                <LinkedInIcon className = {classNames(classes.contactIcons, classes.linkedinIcon)}/>
              </Grid>
              
              <Grid item xs = {2} className ={classes.gridIconContainer}>
              <TwitterIcon className = {classNames(classes.contactIcons, classes.tweeterIcon)}/>
              </Grid>

              <Grid item xs = {2} className ={classes.gridIconContainer}>
              <FacebookIcon className = {classNames(classes.contactIcons, classes.facebookIcon)}/>
              </Grid>
            
            </Grid>

          </Grid>
        </Grid>
        
      </div>
      <Footer />
    </div>
  );
}
