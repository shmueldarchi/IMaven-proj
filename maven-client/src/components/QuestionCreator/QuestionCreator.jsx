import React, { useEffect, useState } from 'react'
import Carousel from '../Carousel/CarouselFinal';
import SlideOne from '../Carousel/CarouselSlide';
import {checkBoxTemplates, radioButtonTemplates, sliderTemplates} from '../../utills/templates-factory';
import {tamplateNames} from '../../models/view-names.ts';
import { useSelector, useDispatch } from 'react-redux';
import {openpopup, tamplateKind} from '../../features/popup-tamplate';


function QuestionCreator() {
  const [templates, setTemplates] = useState();
  const dispatch = useDispatch();
  const tamplates = useSelector (((state) => state.tamplates.value));

  useEffect(()=>{
    switch (tamplates.tamplateNmae) {
      case tamplateNames.CHECKBOX:
        setTemplates(checkBoxTemplates);
        break;
        case tamplateNames.RADIOBUTTON:
        setTemplates(radioButtonTemplates);
        break;
        case tamplateNames.SLIDER:
          setTemplates(sliderTemplates);
        break;
    
      default:
        break;
    }
    
  },[tamplates])

  function createEditPanel(kind){
dispatch(openpopup({}));
  }
  return (
    <div>
      <div>
      <Carousel>
      {templates?.map((template,index)=>
      <SlideOne kind={template.kind} img={template.img} key={index} onClick={()=>{createEditPanel(template.kind)}}/>
      )}
      </Carousel>
    </div>
    </div>
    
  )
}

export default QuestionCreator