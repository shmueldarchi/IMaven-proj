import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './pop-up.css'

import { openpopup } from '../../features/popup-tamplate';

import EditTamplate from '../controllers/edit-tamplate';

function EditPopUp() {
    const popup = useSelector(((state) => state.popupTamplate.value));
    const queries = useSelector(((state) => state.queries.value));

   
    const dispatch = useDispatch()





    

    return (popup.isOpen) ? (
        <div>
            <div className='close-btn-edit' onClick={() => { dispatch(openpopup({ isOpen: false })) }}>X</div>
            <div className='popup-background'>

            </div>
            <div className='popup-body-edit'>
                <EditTamplate>

                </EditTamplate>

            </div>
  
        </div>

    ) : ""
}

export default EditPopUp