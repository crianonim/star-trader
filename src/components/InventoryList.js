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
    selectedRow:{backgroundColor:'#5e6ec9',color:'white'},
  });

  export default withStyles(styles)(({classes})=> {
      const [selectedRow,setSelectedRow]=useState(null);
      const {inventory,place,planets} =useSelector((state)=>state);
      const planet=planets.find(el=>el.name===place)
      return (
        <div  className={classes.root}>
            <Typography align="center" variant="h6">Cargo</Typography>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>Item</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Local Price</TableCell>
                     

                  </TableRow>
              </TableHead>
              <TableBody>
                  {inventory.map( ([itemName,amount],i)=>(
                      <TableRow  className={selectedRow===itemName?classes.selectedRow:""} onClick={()=>setSelectedRow(itemName)} key={itemName}>
                      {/* <TableRow color="primary" className={selectedRow===i?classes.selectedRow:""} onClick={()=>setSelectedRow(i)} key={itemName}> */}

                          <TableCell color="inherit">{itemName}</TableCell>
                          <TableCell>{amount}</TableCell>
                          <TableCell>{trade.calculatePrice(planet,itemName)}</TableCell>
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
          {(selectedRow!=null)&&(<div className={classes.align}>
              <ActionButton action="TRADE" payload={{item:selectedRow,amount:1}}>Buy</ActionButton>
              <div className={classes.flex+" "+classes.textAlignCenter}>1</div>
              <ActionButton action="TRADE" payload={{item:selectedRow,amount:-1}}>Sell</ActionButton>

          </div>)}
        </div>
      )
  });