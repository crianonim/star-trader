import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Drawer, List, ListItem, ListItemText, ListItemIcon, ListSubheader, Tabs, Tab, Table, TableHead, TableCell, TableBody, TableRow } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import MenuIcon from '@material-ui/icons/Menu';
import HelpIcon  from '@material-ui/icons/Help';
import AddAPhoto from '@material-ui/icons/AddAPhoto'
import PublicIcon from '@material-ui/icons/Public'
import TimelapseIcon from '@material-ui/icons/Timelapse';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import * as trade from '../game-logic/trade';
import {useSelector} from 'react-redux';
import ActionButton from './ActionButton';
const styles = theme => ({
    root: { flexGrow: 1,marginTop:100 },
    flex: { flex: 1 },
    menuButton: { marginLeft: -12, marginRight: 10 },
    align:{display:'flex',alignItems:'center'},
    horMar:{marginLeft: 10,marginRight:10,display:'flex',alignItems:'center'},
    topMargin:{marginTop:80},
    textAlignCenter:{textAlign:'center'},
    vertMargin:{marginTop:20,marginBottom:10}

  });

  export default withStyles(styles)(({classes})=> {
      const state=useSelector((state)=>state);
      const {planets,place}=state;
      const planet=planets.find(el=>el.name===place);
      return (
      <div className={classes.vertMargin}>
          <ActionButton action="SAVE">Save</ActionButton>
          <ActionButton action="LOAD">Load</ActionButton>

          <Typography align="center" variant="h6">Travel</Typography>
            <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>Destination</TableCell>
                      <TableCell align="center">Distance</TableCell>
                      <TableCell align="right">Action</TableCell>
                     

                  </TableRow>
              </TableHead>
              <TableBody>
              {planet.routes.map( ([name,distance])=>(
                  <TableRow key={name}>
                      <TableCell>{name}</TableCell>
                      <TableCell align="center">{distance}</TableCell>
                      <TableCell align="right"> <ActionButton variant="contained" action="TRAVEL" payload={{state,destination:name}} >Travel</ActionButton></TableCell>
                      </TableRow>
              ))}
              </TableBody>
            </Table>
       
      </div>
              )
  })