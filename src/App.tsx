import { Route, Routes } from "react-router-dom";
import useWindowWidth from "./hooks/useWidowWidth";
import ContactPage from "./pages/ContactPage";
import MainPage from "./pages/MainPage";
import MobilePortfolioProjectPage from "./pages/MobileProjectDetailsPage";
import { mobileWidth } from "./styles";

function App() {
  const width = useWindowWidth();
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="contact" element={<ContactPage />} />
      {width <= mobileWidth &&
        (<Route path="portfolio-project" element={<MobilePortfolioProjectPage />} />)}
    </Routes>
  );
}

export default App;
