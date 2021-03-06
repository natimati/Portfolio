import { useRef } from "react";
import AboutUs from "../../components/AboutUsSection";
import Header from "../../components/Header"
import ProjectTile from "../../components/ProjectTile";


function MainPage() {

    const projectTileSection = useRef(null) 

    return (
        <>
            <Header />
            <AboutUs projectTileSectionRef={projectTileSection} />
            <ProjectTile projectTileSectionRef={projectTileSection}/>
        </>
    )
};

export default MainPage;