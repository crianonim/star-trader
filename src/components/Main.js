import React from 'react'
import {useSelector} from 'react-redux';
import InventoryList from './InventoryList';
import Travel from './Travel';
import { Container, Paper, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Main = (props)=>{
    return (
        <div>
        <Container maxWidth="sm">
         <ExpansionPanel defaultExpanded >
             <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                     <Typography variant="h6">Trade</Typography>
             </ExpansionPanelSummary>
             <ExpansionPanelDetails>
               <InventoryList/>
             </ExpansionPanelDetails>
         </ExpansionPanel>
         <ExpansionPanel defaultExpanded  >
             <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                     <Typography variant="h6">Travel</Typography>
             </ExpansionPanelSummary>
             <ExpansionPanelDetails>
              
             <Travel />
             </ExpansionPanelDetails>
         </ExpansionPanel>
        
        </Container>
        </div>
    )
}

export default Main