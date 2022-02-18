import "assets/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "constants/routes";
import SignInPage from "pages/SignInPage";
import HomePage from "pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.top()} element={<HomePage />} />
        <Route path={routes.signIn()} element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
