import { container } from "assets/jss/material-kit-react.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "30px 30px 50px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  gridContainerMaster:{
    padding:'2rem 0rem'
  },
  gridIconContainer:{
    textAlign:'center'
  },
  contactIcons:{
    fontSize:'3rem',
    cursor:'pointer'
  },
  githubIcon:{
    '&:hover':{
      color: 'black',
      
    }
  },
    linkedinIcon:{
      '&:hover':{
        color: '#2867B2',
        
    }
  },
    facebookIcon:{
      '&:hover':{
        color: '#4267B2',
        
    }
  },
    tweeterIcon:{
      '&:hover':{
        color: '#1DA1F2',
        
    }
  },
    mailIcon:{
      fontSize:'4rem',
      '&:hover':{
        color: '#1DA1F2',
        
    }
  }


};

export default componentsStyle;
