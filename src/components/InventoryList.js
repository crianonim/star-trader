import React from 'react';
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
const styles = theme => ({
    root: { flexGrow: 1,marginTop:100 },
    flex: { flex: 1 },
    menuButton: { marginLeft: -12, marginRight: 10 },
    align:{display:'flex',alignItems:'center'},
    horMar:{marginLeft: 10,marginRight:10,display:'flex',alignItems:'center'},
    topMargin:{marginTop:80},
  });

  export default withStyles(styles)(({classes})=> {
      const {inventory,place,planets} =useSelector((state)=>state);
      const planet=planets.find(el=>el.name===place)
      return (
          <Table className={classes.topMargin}>
              <TableHead>
                  <TableRow>
                      <TableCell>Item</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Local Price</TableCell>
                     

                  </TableRow>
              </TableHead>
              <TableBody>
                  {inventory.map( ([itemName,amount],i)=>(
                      <TableRow key={itemName}>
                          <TableCell>{itemName}</TableCell>
                          <TableCell>{amount}</TableCell>
                          <TableCell>{trade.calculatePrice(planet,itemName)}</TableCell>

                      </TableRow>
                  ))}
              </TableBody>
          </Table>
      )
  });