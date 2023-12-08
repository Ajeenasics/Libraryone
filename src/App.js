import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLogin from "./Component/User/UserLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/userlogin" element={<UserLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
