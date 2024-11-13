import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CompletedForm from "../pages/CompletedForm";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<CompletedForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
