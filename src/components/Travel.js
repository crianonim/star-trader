import React from 'react';

import Typography from "@material-ui/core/Typography";
import {  Table, TableHead, TableCell, TableBody, TableRow, Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

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
       
          <Typography align="center" variant="h6">Travel</Typography>
            <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>Destination</TableCell>
                      <TableCell align="center">Distance</TableCell>
                      <TableCell align="right"><Tooltip title="What can you do"><span>Action</span></Tooltip></TableCell>
                     

                  </TableRow>
              </TableHead>
              <TableBody>
              {planet.routes.map( ([name,distance])=>(
                  <TableRow key={name}>
                      <TableCell>{name}</TableCell>
                      <TableCell align="center">{distance}</TableCell>
                      <TableCell align="right">
                          <ActionButton disabledLabel="Not enough fuel" variant="contained" action="TRAVEL" payload={{state,destination:name}} >Travel</ActionButton>
                      </TableCell>
                      </TableRow>
              ))}
              </TableBody>
            </Table>
       
      </div>
              )
  })