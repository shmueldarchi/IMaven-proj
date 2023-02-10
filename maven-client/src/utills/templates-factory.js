import checkBoxText from '../assets/phone-template/CheckBox/Checkbox-Text.png';
import checkBox from '../assets/phone-template/CheckBox/Checkbox.png';
import imageCheckboxText from '../assets/phone-template/CheckBox/Image-Checkbox-Text.png';
import videoCheckboxText from '../assets/phone-template/CheckBox/Video-Checkbox-Text.png';
import videoCheckbox from '../assets/phone-template/CheckBox/Video-Checkbox.png';

import radioButton from '../assets/phone-template/RadioBtn/Radiobutton.png';
import videoRadiobutton from '../assets/phone-template/RadioBtn/Video-Radiobutton.png';
import videoRadiobuttonText from '../assets/phone-template/RadioBtn/Video-Radiobutton-Text.png';
import radioButtonText from '../assets/phone-template/RadioBtn/Radiobutton-Text.png';
import imageRadioButton from '../assets/phone-template/RadioBtn/Image-Radiobutton.png';

import slider from '../assets/phone-template/Slider/Slider.png';
import sliderText from '../assets/phone-template/Slider/Slider-Text.png';
import videoSlider from '../assets/phone-template/Slider/Video-Slider.png';
import imageSlider from '../assets/phone-template/Slider/Image-Slider.png';
import imageSliderText from '../assets/phone-template/Slider/Image-Slider-Text.png';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Box from '@mui/material/Box';

import SliderControl from '../components/controllers/slider'
import RadiobuttonControl from '../components/controllers/radiobutton';
import CheckboxControl from '../components/controllers/checkbox';
import TextControl from '../components/controllers/text';
import ImageControl from '../components/controllers/image';

export const checkBoxTemplates = [
    { kind: "Checkbox-Text", img: checkBoxText },
    { kind: "Checkbox", img: checkBox },
    { kind: "Image-Checkbox-Text", img: imageCheckboxText },
    { kind: "Video-Checkbox-Text", img: videoCheckboxText },
    { kind: "Video-Checkbox", img: videoCheckbox }
];

export const radioButtonTemplates = [
    { kind: "Radiobutton", img: radioButton },
    { kind: "Video-Radiobutton", img: videoRadiobutton },
    { kind: "Video-Radiobutton-Text", img: videoRadiobuttonText },
    { kind: "Radiobutton-Text", img: radioButtonText },
    { kind: "Radiobutton", img: imageRadioButton },
];

export const sliderTemplates = [
    { kind: "Slider", img: slider },
    { kind: "Slider-Text", img: sliderText },
    { kind: "Video-Slider", img: videoSlider },
    { kind: "Image-Slider", img: imageSlider },
    { kind: "Image-Slider-Text", img: imageSliderText }
];

export function generateTamplate(kind, callback) {
    switch (kind) {
        case "Slider":
            
            return sliderGenerate();
            break;
        case "Text":
            return textGenerate();
            break;
        case "Video":

            break;
        case "Image":
            return imageGenerate();
            break;
        case "Checkbox":
            return checkBoxGenerate();
            break;
        case "Radiobutton":
            return  radioButtonGenerate();
            break;
        default:
            break;
    }
}
function baseTamplate() {

}
export function checkBoxGenerate() {
    
    return (
        <div>
            <div contentEditable="true">Question</div>
            <FormGroup>
               <CheckboxControl/>
               <CheckboxControl/>
               <CheckboxControl/>
            </FormGroup>
        </div>
    );
}

function radioButtonGenerate() {
    return (
        <FormControl>
            <FormLabel contentEditable="true" id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                <RadiobuttonControl/>
                <RadiobuttonControl/>
                <RadiobuttonControl/>
            </RadioGroup>
        </FormControl>
    );
}

function sliderGenerate() {
    return (
        <Box>
            <SliderControl
                units = "CM"
            />
             <SliderControl
                 units = "CM"
            />
             <SliderControl
                units = "CM"
            />
        </Box>
    );
}

function videoGenerate() {

}
function textGenerate() {
return(
    <div>
        <TextControl/>
    </div>
)
}
function imageGenerate() {
return(
    <ImageControl/>
)
}
function buttonGenerate() {

}

