import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header"
import ProjekctDescription from "../../components/ProjectDescription";
import {
  header,
  part_1,
  part_2,
  part_3,
  photo_url_1,
  photo_url_2,
  redirect_to
} from "../../components/ProjectDescription/portfolioDescription";

function MobilePortfolioProjectPage() {
  useEffect(() => {
    window.scrollTo({ top: 500 })
  }, [])

  return (
    <>
      <Header onMainPage />
      <ProjekctDescription
        header={header}
        photo_url_1={photo_url_1}
        photo_url_2={photo_url_2}
        part_1={part_1}
        part_2={part_2}
        part_3={part_3}
        redirect_to={redirect_to}
      />
      <Footer />
    </>
  );
};

export default MobilePortfolioProjectPage;