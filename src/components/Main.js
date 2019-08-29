import React from 'react'
import {useSelector} from 'react-redux';
import InventoryList from './InventoryList';
import Travel from './Travel';
import { Container, Paper } from '@material-ui/core';
const Main = (props)=>{
    return (
        <div>
         <Container maxWidth="sm">
             <Paper>
        <InventoryList/>

             </Paper>
         </Container>
         <Container maxWidth="sm">
             <Paper>
        <Travel/>

             </Paper>
        </Container>
        </div>
    )
}

export default Main