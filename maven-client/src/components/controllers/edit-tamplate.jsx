import React, { useEffect, useState, useRef } from 'react'
import './controller.css';
import Button from '@mui/material/Button';
import { generateTamplate } from '../../utills/templates-factory';
import { useSelector, useDispatch } from 'react-redux';
import { questionFactory } from '../../utills/flow-utils.ts';
import { addQuestion, updateQueries } from '../../features/queries';
import { createQuery, addQueryToList } from '../../utills/popup-utills.ts';
import { useNavigate } from "react-router-dom";
import { openpopup } from '../../features/popup-tamplate';

function EditTamplate() {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const popup = useSelector(((state) => state.popupTamplate.value));
    const queries = useSelector(((state) => state.queries.value));
    const section = useRef(null);
    const [sectionOne, setSectionOne] = useState("");
    const [sectionTwo, setSectionTwo] = useState("");
    const [sectionThree, setSectionThree] = useState("");

    const [sections, setSection] = useState({ name, });

    const [name, setName] = useState("");

    const newQueryHandler = (name) => {
        let a = section;
        dispatch(openpopup({ isOpen: false }));
        let newId = queries.queries.length + 1;
        const question = questionFactory(newId.toString(), "test", { kind: "Text" }, 100, 250, [{ next: "" }], newId.toString());
        const newQueryList = addQueryToList(question, queries.queries);

        dispatch(addQuestion({ id: newId, question: question }));
    }

    useEffect(() => { tamplateGenerator() }, [])
    const tamplateGenerator = () => {
        const tamplateNames = popup.tamplateKind.split('-');
        tamplateNames.map((template, index) => {
            let temp;
            if (index === 0) {
                 temp = generateTamplate(template, setSectionOne);
            }
            if (index === 1){
                 temp = generateTamplate(template, setSectionTwo);
            }
            if (index === 2)
            temp = generateTamplate(template, setSectionThree);
        })

    }

    const createTamplate = (template) => {
        switch (template) {
            case "Slider":

                break;
            case "Text":

                break;
            case "Video":

                break;
            case "Image":

                break;
            case "Checkbox":

                break;
            case "Radiobutton":

                break;
            default:
                break;
        }
    }

    return (
        <div className='base-tamplate'>
            <div id='header-editable' contentEditable={true}>Header</div>
            <div className='sction-one' ref={section} >
                {sectionOne}
            </div>
            <div className='sction-two'>
                {sectionTwo}
            </div>
            <div className='sction-three'>
                {sectionThree}
            </div>
            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                <Button className='save-btn-edit' variant="contained" size="medium" onClick={() => { newQueryHandler(name); }}>
                    Create More
                </Button>
                <Button className='finish-btn-edit' variant="contained" size="medium" onClick={() => { newQueryHandler(name); navigate("/Queries", { replace: true }); }}>
                    Finish
                </Button>
            </div>
        </div>
    )
}

export default EditTamplate