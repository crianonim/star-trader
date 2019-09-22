import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import Typography from "@material-ui/core/Typography";
import { Drawer, List, ListItem, ListItemText, ListItemIcon,  Divider, Snackbar } from "@material-ui/core";
import {  makeStyles } from "@material-ui/styles";
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
    const [snackbarOpen,setSnackbarOpen]=useState(false);
    const [snackbarMessage,setSnackbarMessage]=useState('');

    const showMessage=(msg)=>{
        setSnackbarMessage(msg);setSnackbarOpen(true)
    }
    return (
        <div>

        <Drawer  open={props.open} onClose={props.handleDrawerClose}>
            <div className={classes.padded}>
            <Typography  variant="h6">StarTrader</Typography>
            <Typography  variant="caption">v0.1.0</Typography>

            <Divider/>
            <List>
                <ListItem button onClick={()=>{dispatch({type:"SAVE"});showMessage("Game saved successfully!")}}>
                    <ListItemIcon><SaveIcon/></ListItemIcon>
                    <ListItemText>Save Game</ListItemText>
                </ListItem>
                <ListItem disabled={!isSaved()} button onClick={()=>{props.handleDrawerClose();dispatch({type:"LOAD"});showMessage("Save game loaded.")}}>
                    <ListItemIcon><SaveOutlinedIcon/></ListItemIcon>
                    <ListItemText>Load Game</ListItemText>
                </ListItem>
                <ListItem  button onClick={()=>{dispatch({type:"RESET"});showMessage("Restarted.")}}>
                    <ListItemIcon><RefreshIcon/></ListItemIcon>
                    <ListItemText>Restart</ListItemText>
                </ListItem>
            </List>
            </div>
        </Drawer>
            <Snackbar open={snackbarOpen} message={snackbarMessage}  autoHideDuration={2000} onClose={()=>setSnackbarOpen(false)} />
        </div>
    )
}