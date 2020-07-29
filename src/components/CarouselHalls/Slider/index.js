import { SlickSlider } from 'react-slick';
import styler from 'styled-components'

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

const Slider = ({ children }) => (

    <Container>

        <SlickSlider {...{
            dots: false,
            infinite: false,
            speed: 300,
            centerMode: false,
            variableWidth: true,
            adaptiveHeight: true,
        }}
        >
            {children}
        </SlickSlider>
    </Container>
)


export default Slider;