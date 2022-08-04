import { useRef } from "react";
import AboutUs from "../../components/AboutUsSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header"
import ProjectTile from "../../components/ProjectTile";


function MainPage() {

    const projectTileSection = useRef(null);
    const heatherSection = useRef(null);

    return (
        <>
            <Header headerSectionRef={heatherSection} onMainPage/>
            <AboutUs projectTileSectionRef={projectTileSection}  />
            <ProjectTile projectTileSectionRef={projectTileSection} />
            <Footer heatherSectionRef={heatherSection} />
        </>
    )
};

export default MainPage;