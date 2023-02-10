import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './pop-up.css'
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import { openpopup } from '../../features/popup';
import { createQuery, addQueryToList } from '../../utills/popup-utills.ts';
import { updateQueries } from '../../features/queries';
import { useNavigate } from "react-router-dom";
import { viewNames } from '../../models/view-names.ts';
import { Categories } from '../../models/categories.ts';
import { updateCurrentView } from '../../features/view';
import MenuItem from "@mui/material/MenuItem";
import ModeIcon from '@mui/icons-material/Mode';

function PopUp() {
    const popup = useSelector(((state) => state.popup.value));
    const queriesList = useSelector(((state) => state.queries.value));
    const viewName = useSelector(((state) => state.view.value));
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

    const newQueryHandler = (name, category) => {
        const newQuery = createQuery(name, category);
        const newQueryList = addQueryToList(newQuery, queriesList.queries);
        dispatch(updateQueries({ queries: newQueryList }));
        dispatch(openpopup({ isOpen: false }));
        console.log('---------------',newQueryList);
        if (viewName.viewName != viewNames.QUERIES) {
            dispatch(updateCurrentView({ viewName: viewNames.QUERIES }));
            navigate("/Queries", { replace: true });

        }
    }

    return (popup.isOpen) ? (
        <div>
            <div className='close-btn' onClick={() => { dispatch(openpopup({ isOpen: false })) }}>X</div>
            <div className='popup-background'>

            </div>
            <div className='popup-body'>

                <div style={{ height: "10vh" }}></div>
                <div style={{ height: "5vh" }}>Questionnarie</div>
                <div style={{ height: "8vh"  }}>
                <FormControl sx={{ m: 1, width: "20vw" }}>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Name"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <ModeIcon style={{color:"#499EDC"}} />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                        onChange={(event) => { setName(event.target.value) }}
                    />
                    </FormControl>
                </div>
                <div style={{ height: "8vh" }}>
                    <FormControl sx={{ m: 1, width: "20vw" }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Category
                        </InputLabel>
                        <NativeSelect
                            defaultValue={""}
                            inputProps={{
                                name: 'Category',
                                id: 'uncontrolled-native',
                            }}
                            onChange={(event) => { setCategory(event.target.value) }}
                        >
                            {

                                categoryList.map((category, index) => 

                                    <option key={index} value={category}>{category}</option>
                                )
                            }
                            {/* <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option> */}
                        </NativeSelect>
                    </FormControl>
                </div>
                <div>
                    <Button className='button-create' variant="contained" size="medium" onClick={() => { newQueryHandler(name, category); }}>
                        Create
                    </Button>
                </div>
            </div>
        </div>

    ) : ""
}

export default PopUp