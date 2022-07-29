
import React, { useContext } from 'react';
import { Description, EachSlide, ProjectContainer, SlideContainer, Subtitle, Text, Title } from "./style";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { ModalContext } from '../../context/ModalContextProvider';
import FirstProjectModalContent from './FirstProjectModalContent';
import { SmallButton } from '../../styles';

interface SlideShowProps {
images: string[],
}

const Slideshow = (props: SlideShowProps) => {

  return (
      <SlideContainer>
        <Slide>
         {props.images.map((slideImage, index)=> (
            <EachSlide key={index} style={{'backgroundImage': `url(${slideImage})`}} />
          ))} 
      </Slide>
      </SlideContainer>
    )
  }
const DescriptionContainer = (data: any) => {
  const modalContextValue = useContext(ModalContext);
  const handleReadMoreClick = (content: React.ReactChild) => {
    modalContextValue.setDisplayedComponent(content)
  };
  const handleSeeCaseStudyClick = (link: string) => {
      window.open(link, '_blank')
  };
  
     return (
      <Description>
        <Title>{data.title}</Title>
        <Subtitle>{data.category}</Subtitle>
        <Text>{data.text}</Text>
        <SmallButton onClick={() => {}}>see repo</SmallButton>
         <SmallButton onClick={() => { handleReadMoreClick(<FirstProjectModalContent />) }}>read more</SmallButton>
         <SmallButton onClick={() => {handleSeeCaseStudyClick('https://www.figma.com/file/Zzj9Cmao5lVfDsrJsqsMEk/portfolio?node-id=157%3A5')}}>see case study</SmallButton>
      </Description>
    )
}

interface ProjectTileProps {
  projectTileSectionRef: React.RefObject<HTMLDivElement>
}

const ProjectTile = (props: ProjectTileProps) => {
 
  const firstProjectImages =
    ['slide_1_1.jpg', 'slide_1_2.jpg', 'slide_1_3.jpg']
      .map(image => process.env.PUBLIC_URL + '/assets/images/' + image);
  
  const secondProjectImages =  ['slide_2_1.jpg', 'slide_2_2.jpg', 'slide_2_3.jpg']
    .map(image => process.env.PUBLIC_URL + '/assets/images/' + image);
  
  const thirdProjectImages = ['slide_3_1.jpg', 'slide_3_2.jpg', 'slide_3_3.jpg']
    .map(image => process.env.PUBLIC_URL + '/assets/images/' + image);
  
  
    return (
        <>
            <ProjectContainer isSlideFirst={true} ref={props.projectTileSectionRef}> 
            <Slideshow images={firstProjectImages} />
              <DescriptionContainer
                title={'TITLE'}
                category={'category'}
                text={'Praesent efficitur quis odio quis fermentum. Quisque non augue venenatis, luctus neque feugiat, efficitur justo. Donec mattis arcu at ante volutpat consequat. Aliquam erat volutpat. Curabitur interdum aliquet tortor, id fermentum felis lacinia ac. Sed aliquam, arcu vitae tincidunt posuere, est nunc eleifend.'}
              />
            </ProjectContainer>
            <ProjectContainer isSlideFirst={false}> 
              <Slideshow images={secondProjectImages} />
              <DescriptionContainer
                title={'TITLE'}
                category={'category'}
                text={'Praesent efficitur quis odio quis fermentum. Quisque non augue venenatis, luctus neque feugiat, efficitur justo. Donec mattis arcu at ante volutpat consequat. Aliquam erat volutpat. Curabitur interdum aliquet tortor, id fermentum felis lacinia ac. Sed aliquam, arcu vitae tincidunt posuere, est nunc eleifend.'}
              />
          </ProjectContainer>
          <ProjectContainer isSlideFirst={true}> 
              <Slideshow images={thirdProjectImages} />
              <DescriptionContainer
                title={'TITLE'}
                category={'category'}
                text={'Praesent efficitur quis odio quis fermentum. Quisque non augue venenatis, luctus neque feugiat, efficitur justo. Donec mattis arcu at ante volutpat consequat. Aliquam erat volutpat. Curabitur interdum aliquet tortor, id fermentum felis lacinia ac. Sed aliquam, arcu vitae tincidunt posuere, est nunc eleifend.'}
              />
          </ProjectContainer>
        </>
    )
}

export default ProjectTile;