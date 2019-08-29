import React from 'react';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Drawer, List, ListItem, ListItemText, ListItemIcon, ListSubheader, Tabs, Tab } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import MenuIcon from '@material-ui/icons/Menu';
import HelpIcon  from '@material-ui/icons/Help';
import AddAPhoto from '@material-ui/icons/AddAPhoto'
import PublicIcon from '@material-ui/icons/Public'
import TimelapseIcon from '@material-ui/icons/Timelapse';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

import {useSelector} from 'react-redux';
const styles = theme => ({
    root: { flexGrow: 1,marginTop:100 },
    flex: { flex: 1 },
    menuButton: { marginLeft: -12, marginRight: 10 },
    align:{display:'flex',alignItems:'center'},
    horMar:{marginLeft: 10,marginRight:10,display:'flex',alignItems:'center'},
  });

  export default withStyles(styles)(({classes,title})=> {
    const {money,place,turn}=useSelector((state)=>state)
    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton color="inherit" className={classes.menuButton} onClick={()=>{}}>
                <MenuIcon />
                </IconButton>
                <div className={classes.flex+" "+classes.align}>
                    <span className={classes.horMar}><TimelapseIcon/> {turn}</span> 
                    <span className={classes.horMar}><LocalAtmIcon/> {money} </span> 
                    <span className={classes.horMar}><PublicIcon/> {place}</span>
                </div>
               </Toolbar>
        </AppBar>
    )
  })