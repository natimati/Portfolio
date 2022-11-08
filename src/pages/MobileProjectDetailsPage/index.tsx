import { useEffect, useRef, useState } from "react";
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
  const ref = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (!hasScrolled && ref.current) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
      setHasScrolled(true)
    }
  }, [hasScrolled])

  return (
    <>
      <Header onMainPage />
      <div ref={ref}>
        <ProjekctDescription
          header={header}
          photo_url_1={photo_url_1}
          photo_url_2={photo_url_2}
          part_1={part_1}
          part_2={part_2}
          part_3={part_3}
          redirect_to={redirect_to}
        />
      </div>
      <Footer />
    </>
  );
};

export default MobilePortfolioProjectPage;