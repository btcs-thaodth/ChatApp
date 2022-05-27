import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import HomePage from "./page/home";
import 'antd/dist/antd.min.css'
import Login from "./page/login";
import { useRecoilState } from "recoil";
import { currentUserStore } from "./store/CurrentUser";

function App() {
  const [currentUser] = useRecoilState(currentUserStore)
  return (
    <BrowserRouter>
      <Routes>
        {currentUser && (
          <Route path='/chatroom' element={<HomePage />} />
        )}
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
