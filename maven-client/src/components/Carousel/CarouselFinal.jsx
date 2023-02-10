import * as React from "react";
import styled, { css } from "styled-components";
import {openpopup, tamplateKind} from '../../features/popup-tamplate';
import { useSelector, useDispatch } from 'react-redux';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CircleIcon from '@mui/icons-material/Circle';
import './carusel.css';
const SCarouselWrapper = styled.div`
  display: flex;
`;


const SCarouselSlide = styled.div`
  flex:  auto;
  opacity: ${props => (props.active ? 1 : 0.3)};
  transition: all 0.5s ease;
  background-color: white;
`;

const SCarouselSlides = styled.div`
  display: flex;
  transition: all 0.5s ease;
  background-color: white;
  height: 62vh;
width:88vw;

`;

const sArrow = styled.div`
  width: 5vw;
  height: 5vw;
  border: 2.5vw solid;
  border-color: black transparent transparent black;
  transform: rotate(-45deg);

`;
const Carousel = ({ children }) => {

  const dispatch = useDispatch();
    const popup = useSelector(((state) => state.popupTamplate.value));

    const slideClick =(index, kind) =>{
      setCurrentSlide(index);
      dispatch(openpopup({isOpen: true, tamplateKind: kind}));
    //  dispatch(tamplateKind({tamplateKind: kind}));
    }

  const [currentSlide, setCurrentSlide] = React.useState(1);

  const activeSlide = children?.map((slide, index) => (
      
    <SCarouselSlide key={index} active={currentSlide === index}  onClick={()=>{slideClick(index,slide.props.kind)}}>
      {slide}
    </SCarouselSlide>
  ));

  const activeBullet = children?.map((slide, index) => (
    <BottomNavigationAction onClick={()=>{setCurrentSlide(index)}} key={index} style={{display:"contents", width:'1vw', color:currentSlide === index? "#499EDC":"#B9B9B9"}} active={currentSlide === index} icon={<CircleIcon style={{width:'1vw'}}/>} />
  ));
  
  return (
    <div>
      <SCarouselWrapper>
        <SCarouselSlides currentSlide={currentSlide}>
          {activeSlide}
        </SCarouselSlides>
      </SCarouselWrapper>
      <BottomNavigation
      style={{    
        width: '88vw'}}
  showLabels
  onChange={(event) => {
  }}
>
  {activeBullet}
</BottomNavigation>
      <button className="arrow left"
        onClick={() => {
          setCurrentSlide((currentSlide - 1 + activeSlide?.length) % activeSlide.length);
        }}
      >
      </button>
      <button className="arrow right"
        onClick={() => {
          setCurrentSlide((currentSlide + 1) % activeSlide.length);
        }}
      >
      </button>
    </div>
  );
};

export default Carousel;