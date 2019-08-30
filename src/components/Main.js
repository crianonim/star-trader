import React from 'react'
import {useSelector} from 'react-redux';
import InventoryList from './InventoryList';
import Travel from './Travel';
import { Container } from '@material-ui/core';
const Main = ()=>{
    return (
        <div>
         <Container maxWidth="sm">
        <InventoryList/>
         </Container>
         <Container maxWidth="sm">
        <Travel/>
        </Container>
        </div>
    )
}

export default Main