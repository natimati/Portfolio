import { EachSlide, SlideContainer } from "./style";
import { Slide } from "react-slideshow-image";

interface SlideShowProps {
  images: string[];
}

function Slideshow(props: SlideShowProps) {
  return (
    <SlideContainer>
      <Slide>
        {props.images.map((slideImage, index) => (
          <EachSlide
            key={index}
            style={{ backgroundImage: `url(${slideImage})` }}
          />
        ))}
      </Slide>
    </SlideContainer>
  );
};


export default Slideshow;