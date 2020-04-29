import { makeStyles } from "@material-ui/core/styles";
import React from 'react'

function SkillLevel(props)
{
    const {skill, level, color} = props
    const styles = {
        wrapper:{
            backgroundColor: '#e1e1e1',
            position: 'relative',
            height: '1.8rem',
            marginTop:'.5rem',
            marginBottom:'.5rem',
        },
        fill:{
            width: level + '%',
            height: '100%',
            backgroundColor:color,
            position:'relative',
            zIndex:'0',
            color:color
        },
        textOverlay:{
            backgroundColor:'transparent',
            width:'100%',
            height:'100%',
            position:'absolute',
            display:'flex',
            zIndex:'100',
            justifyContent:'space-between',
            paddingLeft:'1rem',
            paddingRight:'1rem',
            top:'0',
            left:'0',
            fontWeight:'500',
            
            alignItems:'center'
        },
        skill:{
            color:'white',
        },
        level:{
            color:'gray',
        }
        


    }
    
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    return (
        <div className = {classes.wrapper}>
           
            <div className= {classes.fill}>
                .
            </div>
            <div className ={classes.textOverlay}>
                <div className= {classes.skill}>
                    {skill}
                </div>
                
               <div className = {classes.level}>
                    {level + '%'} 
               </div>
            </div>
        </div>
    )
}

export default SkillLevel