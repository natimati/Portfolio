import { Route, Routes } from "react-router-dom";
import Contact from "./components/ContactForm";
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route index element={(
        <MainPage />
      )}
      />
      <Route path="contact" element={(
        <Contact />
      )}
      />
    </Routes>
  );
}

export default App;
