import React from 'react';
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import MenuIcon from '@material-ui/icons/Menu';
import PublicIcon from '@material-ui/icons/Public'
import TimelapseIcon from '@material-ui/icons/Timelapse';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';

import {useSelector} from 'react-redux';
const styles = theme => ({
    root: { flexGrow: 1,marginTop:100 },
    flex: { flex: 1 },
    menuButton: { marginLeft: -12, marginRight: 10 },
    align:{display:'flex',alignItems:'center',justifyContent:'center'},
    horMar:{marginLeft: 10,marginRight:10,display:'flex',alignItems:'center'},
  });

  export default withStyles(styles)(({classes,toggleTheme,handleDrawerOpen})=> {
    const {money,place,turn}=useSelector((state)=>state)
    
    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton color="inherit" className={classes.menuButton} onClick={handleDrawerOpen}>
                <MenuIcon />
                </IconButton>
                <div className={classes.flex+" "+classes.align}>
                    <span className={classes.horMar}><TimelapseIcon/> {turn}</span> 
                    <span className={classes.horMar}><LocalAtmIcon/> {money} </span> 
                    <span className={classes.horMar}><PublicIcon/> {place}</span>
                </div>
                    <IconButton onClick={toggleTheme} className="themeButton">
                        <BrightnessMediumIcon/>
                    </IconButton>
               </Toolbar>
        </AppBar>
    )
  })