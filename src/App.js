// import HomePage from './components/HomePage.jsx';
// import Login from  './components/Login.jsx';

// import LoginPage from "./components/LoginPage";
// import Footer from "./components/Footer";
// import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Router1 from "./router/Router1";
// import About from "./components/About";
// import Register from "./components/Register";
// import SignUp from './components/SignUp.jsx';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Router1 />
      </BrowserRouter>
    </div>
  );
}

export default App;
