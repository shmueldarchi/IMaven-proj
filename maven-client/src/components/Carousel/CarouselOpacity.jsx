import * as React from "react";
import styled from "styled-components";

const SCarouselWrapper = styled.div`
  display: flex;
`;

const SCarouselSlide = styled.div`
  flex: 0 0 auto;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: all 0.5s ease;
  width: 100%;
`;

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const activeSlide = children?.map((slide, index) => (
    <SCarouselSlide active={currentSlide === index} key={index}>
      {slide}
    </SCarouselSlide>
  ));

  return (
    <div>
      <SCarouselWrapper>
        {activeSlide}
      </SCarouselWrapper>
    </div>
  );
};

export default Carousel;