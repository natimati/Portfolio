import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
