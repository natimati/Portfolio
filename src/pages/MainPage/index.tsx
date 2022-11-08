import AboutUs from "../../components/AboutUsSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header"
import ProjectTile from "../../components/ProjectTile";


function MainPage() {
    return (
      <>
        <Header onMainPage />
        <AboutUs />
        <ProjectTile />
        <Footer />
      </>
    );
};

export default MainPage;