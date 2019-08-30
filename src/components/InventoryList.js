import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Drawer, List, ListItem, ListItemText, ListItemIcon, ListSubheader, Tabs, Tab, Table, TableHead, TableCell, TableBody, TableRow } from "@material-ui/core";
import { withStyles, useTheme } from "@material-ui/styles";
import * as trade from '../game-logic/trade';
import {useSelector} from 'react-redux';
import ActionButton from './ActionButton';

const styles = theme => {console.log({theme},theme.palette.primary); return ({
    root: { flexGrow: 1,marginTop:100 },
    flex: { flex: 1 },
    menuButton: { marginLeft: -12, marginRight: 10 },
    align:{display:'flex',alignItems:'center'},
    horMar:{marginLeft: 10,marginRight:10,display:'flex',alignItems:'center'},
    topMargin:{marginTop:80},
    textAlignCenter:{textAlign:'center'},
    verSpace:{marginTop:'1rem'},
    selectedRow:{backgroundColor:theme.palette.primary.light,color:'white'},
  });
}
  export default withStyles(styles)(({classes})=> {
      const [selectedRow,setSelectedRow]=useState(null);
      const {inventory,place,planets} =useSelector((state)=>state);
      const planet=planets.find(el=>el.name===place)
      const tt=useTheme()
      
      console.log({tt})
      return (
        <div  className={classes.root}>
            <Typography align="center" variant="h6">Cargo</Typography>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>Item</TableCell>
                      <TableCell align="right" >Amount</TableCell>
                      <TableCell align="right" >Local Price</TableCell>
                     

                  </TableRow>
              </TableHead>
              <TableBody>
                  {inventory.map( ([itemName,amount],i)=>(
                      <TableRow  className={selectedRow===itemName?classes.selectedRow:""}
                       onClick={()=>setSelectedRow(itemName)} key={itemName}>
                          <TableCell className={selectedRow===itemName?classes.selectedRow:""} color="inherit">{itemName}</TableCell>
                          <TableCell align="right" className={selectedRow===itemName?classes.selectedRow:""} >{amount}</TableCell>
                          <TableCell align="right" className={selectedRow===itemName?classes.selectedRow:""} >{trade.calculatePrice(planet,itemName)}</TableCell>
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
          <div className={classes.verSpace}>
          {(selectedRow!=null)&&(<div className={classes.align}>
              <ActionButton color="primary"variant="contained" action="TRADE" payload={{item:selectedRow,amount:1}}>Buy</ActionButton>
              <div className={classes.flex+" "+classes.textAlignCenter}>Amount: 1</div>
              <ActionButton color="secondary"variant="contained" action="TRADE" payload={{item:selectedRow,amount:-1}}>Sell</ActionButton>

          </div>)}
    </div>          
        </div>
      )
  });