import logo from './logo.svg';
import './App.css';
import Router from './components/Router/router';
import TopBar from './components/top-bar/top-bar';
import LeftMenu from './components/left-menu/left-menu';
import Profile from './components/Profile/Profile';
import Login from './components/Login/login';
import ChangeColor from './components/ChangeColor';
import PopUp from './components/pop-up/Pop-up';

function App() {

  return (
    <div className="App">
      <header>
        <TopBar style={{ position: "fixed" }}></TopBar>
      </header>
      {/* <Profile />
      <Login />

      <ChangeColor/> */}
      <Router>
      
      <div style={{ width: "100vw", height: "95vh", display: "flex" }}>
        <div style={{ height: "88vh" }}>  </div>
        <LeftMenu></LeftMenu>
        
      </div>
         </Router>

    </div>
  );
}

export default App;
