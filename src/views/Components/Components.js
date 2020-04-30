import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
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
import { LeftLinks } from "components/Header/HeaderLinks.js";
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
        leftLinks={<LeftLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax  image={require("assets/img/laptop0.jpg")}>
        <div className={classes.container}>
          <Grid container className ={classes.textCenter}>
            <Grid>
              <div className={classes.brand}>
                <h1 className={classes.titlebig}>Hi, I'm Alfredo Granja.</h1>
                <h3 className={classes.subtitle}>
                 Software Developer
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
              <AspectCard title="Creative" description ="I like to find new ways of thinking, creating and combining that lead to fresh new things." iconName="color_lens">

              </AspectCard>
            </Grid>
            <Grid item lg={3}>
              <AspectCard title="Analytic" description ="I like to know things deeply. Analyze how things, and particularly software and software frameworks work." iconName="youtube_searched_for">

              </AspectCard>
            </Grid>
            <Grid item lg={3}>
              <AspectCard title="Fast Learner" description ="I like to be learning constantly, and i do it fast. I can switch to a new framework or technology very quick." iconName="flash_on">

              </AspectCard>
            </Grid>
            <Grid item lg={3}>
              <AspectCard title="Problem Solver" description ="I enjoy applying my skills to solve problems, finding efficient and creative solutions." iconName="check_circle">

              </AspectCard>
            </Grid>

            
            <Grid item lg={6}>
              <DescriptionCard>
              </DescriptionCard>
            </Grid>

            <Grid item lg={6}>
                <SkillLevel  skill= {'CSS'} level ={75} color ={'darkturquoise'}/>
                <SkillLevel  skill= {'HTML'} level ={75} color ={'darkturquoise'}/>
                <SkillLevel  skill= {'javascript'} level ={85} color ={'darkturquoise'}/>
                <SkillLevel  skill= {'React.js'} level ={80} color ={'darkturquoise'}/>
                <SkillLevel  skill= {'node'} level ={70} color ={'darkturquoise'}/>
                <SkillLevel  skill= {'Python'} level ={70} color ={'darkturquoise'}/>
                <SkillLevel  skill= {'C#'} level ={85} color ={'darkturquoise'}/>

            </Grid>
          </Grid>

          {/* Contact Section */}
          <Grid container item spacing ={8} xs={12} id= 'Contact'>
            <Grid item xs = {12}>
              <h1  className={classes.textCenter}>Contact</h1>
            </Grid>

            <Grid container item xs= {12}  justify= "center">
            <Grid item xs = {3} className ={classes.gridIconContainer}>

              <a href ='mailto:alfredo_granja@outlook.com' className ={classes.link}>
              <MailIcon className = {classNames(classes.contactIcons, classes.mailIcon)}/>
                alfredo_granja@outlook.com
              </a>
               
              </Grid>
            </Grid>
            <Grid container item spacing ={4} xs ={12}  justify= "center" direction = 'row' >
              <Grid item xs = {2} className ={classes.gridIconContainer}>
                <a className = {classNames(classes.githubIcon, classes.iconLink)} href = 'https://github.com/AlfredoGJ' target='_blank'>
                <GitHubIcon className = {classes.contactIcons}/>
                </a>
               
              </Grid>
              
              <Grid item xs = {2} className ={classes.gridIconContainer}>
              <a className = {classNames(classes.linkedinIcon,classes.iconLink)} href = 'https://www.linkedin.com/in/alfredo-granja/' target='_blank'>
                <LinkedInIcon className = {classes.contactIcons}/>
                </a>
              </Grid>
              
              <Grid item xs = {2} className ={classes.gridIconContainer}>
              <a className = {classNames(classes.tweeterIcon, classes.iconLink)} href = 'https://twitter.com/_Fre2_' target='_blank'>
                <TwitterIcon className = {classes.contactIcons}/>
              </a>
              </Grid>

              <Grid item xs = {2} className ={classes.gridIconContainer}>
              <a className = {classNames(classes.facebookIcon, classes.iconLink)} href = 'https://www.facebook.com/profile.php?id=100012815117000' target='_blank'>
              <FacebookIcon className = {classes.contactIcons}/>
              </a>
              </Grid>
            
            </Grid>

          </Grid>
        </Grid>
        
      </div>
      <Footer />
    </div>
  );
}
