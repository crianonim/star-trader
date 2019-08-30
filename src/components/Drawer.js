import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import Typography from "@material-ui/core/Typography";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Drawer, List, ListItem, ListItemText, ListItemIcon, ListSubheader, Tabs, Tab, Table, TableHead, TableCell, TableBody, TableRow, Divider } from "@material-ui/core";
import { withStyles, useTheme, makeStyles } from "@material-ui/styles";
import * as trade from '../game-logic/trade';
import {useSelector} from 'react-redux';
import ActionButton from './ActionButton';
import {isSaved} from '../game-logic/index'
import SaveIcon from '@material-ui/icons/Save';
import RefreshIcon from '@material-ui/icons/Refresh';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
const useStyles = makeStyles(theme =>  ({
    root: { flexGrow: 1,marginTop:100 },
    flex: { flex: 1 },
    padded:{padding:"1rem"},
}))

export default (props)=>{
    const classes=useStyles(props);
    const dispatch=useDispatch();
    console.log("saved",isSaved())
    return (
        <Drawer  open={props.open} onClose={props.handleDrawerClose}>
            <div className={classes.padded}>
            <Typography  variant="h6">StarTrader</Typography>
            <Typography  variant="caption">v0.1.0</Typography>

            <Divider/>
            <List>
                <ListItem button onClick={()=>dispatch({type:"SAVE"})}>
                    <ListItemIcon><SaveIcon/></ListItemIcon>
                    <ListItemText>Save Game</ListItemText>
                </ListItem>
                <ListItem disabled={!isSaved()} button onClick={()=>{props.handleDrawerClose();dispatch({type:"LOAD"})}}>
                    <ListItemIcon><SaveOutlinedIcon/></ListItemIcon>
                    <ListItemText>Load Game</ListItemText>
                </ListItem>
                <ListItem  button onClick={()=>dispatch({type:"RESET"})}>
                    <ListItemIcon><RefreshIcon/></ListItemIcon>
                    <ListItemText>Restart</ListItemText>
                </ListItem>
            </List>
            </div>
        </Drawer>
    )
}