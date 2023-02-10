import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './pop-up.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { openpopup } from '../../features/popup-connector';
import { createQuery, addQueryToList } from '../../utills/popup-utills.ts';
import { updateQueries } from '../../features/queries';
import { useNavigate } from "react-router-dom";
import { viewNames } from '../../models/view-names.ts';
import { updateCurrentView } from '../../features/view';
import { FormGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import DropDown from '../controllers/dropDown';
import HalfCircleMenu from '../half-circle-menu/half-circle-menu';

function Connector() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const popup = useSelector(((state) => state.popupConnector.value));

    const handleChange = (event) => {
      };
    const queriesList = useSelector(((state) => state.queries.value));
    const viewName = useSelector(((state) => state.view.value));
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
   let arrOptions =  queriesList.queries.map((query)=>{
        return query.title;
    })
    debugger;
    console.log(arrOptions)
    setOptions(arrOptions);
    },queriesList)

    const categoryList = [
        "Laptop",
        "Car",
        "Sport",
        "Medicine",
        "Renovation"
    ]
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [options, setOptions] = useState("");

    const newQueryHandler = (name, category) => {
     
    }

    return (popup.isOpen) ? (

        <div>
            <div className='close-btn' onClick={() => { dispatch(openpopup({ isOpen: false })) }}>X</div>
            <div className='popup-background'>

            </div>
<div className='popup-body-connector'>
    <div style={{fontSize: '22px', marginBottom:'4vh', marginTop:'1vh'}}>
        Page One Navigation (Single Choice)
    </div>
<div style={{marginRight: '2vw'}}>
    <div contentEditable style={{width:'14vw',marginBottom:'1vh', fontWeight:'bold'}}>
     Name
    </div>
    <div style={{position:"relative"}}>
    <FormGroup aria-label="position" column>

    <DropDown options={options} index="1"/>
    <DropDown options={options} index="2"/>
    <DropDown options={options} index="3"/>
    <DropDown options={options} index="4"/>

    </FormGroup>
    <Button style={{backgroundColor:"#499EDC",marginTop:'4vh' ,width:'8.466vw', height:'4.473vh'}} onClick={(e)=>{}} variant="contained">Done</Button>
    <HalfCircleMenu/>

    </div>


    </div>
</div>


        </div>

    ) : ""
}

export default Connector