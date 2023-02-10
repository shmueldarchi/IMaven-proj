import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './pop-up.css'

import Button from '@mui/material/Button';
import { openpopup } from '../../features/popup-tamplate';
import { createQuery, addQueryToList } from '../../utills/popup-utills.ts';
import { updateQueries } from '../../features/queries';
import { useNavigate } from "react-router-dom";
import { viewNames } from '../../models/view-names.ts';

import { updateCurrentView } from '../../features/view';
import EditTamplate from '../controllers/edit-tamplate';


function CircleMenu() {
    const popup = useSelector(((state) => state.popupTamplate.value));

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const [name, setName] = useState("");

    const newQueryHandler = (name) => {

        dispatch(openpopup({ isOpen: false }));
    }



    return (popup.isOpen) ? (
        <div>
            <div className='close-btn-edit' onClick={() => { dispatch(openpopup({ isOpen: false })) }}>X</div>
            <div className='popup-background'>

            </div>
            <div className='popup-body-edit'>
                <EditTamplate>

                </EditTamplate>
                <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                    <Button className='save-btn-edit' variant="contained" size="medium" onClick={() => { newQueryHandler(name); }}>
                        Create More
                    </Button>
                    <Button className='finish-btn-edit' variant="contained" size="medium" onClick={() => { newQueryHandler(name); navigate("/Queries", { replace: true }); }}>
                        Finish
                    </Button>
                </div>
            </div>

        </div>

    ) : ""
}

export default CircleMenu;