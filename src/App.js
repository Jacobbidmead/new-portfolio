// import Room from "./components/spline";
import Nav from "./components/Nav.js";
import "./App.css";

const App = () => {
  return (
    <>
      <Nav />
      <div className="main-page-container">
        <div className="name-container">
          <div id="home-text">
            <div className="line line1">
              <div className="word">HI, </div>
              <p className="word">IM JACOB.</p>
            </div>

            <div className="line line2">
              <p className="word">I</p>
              <p className="word">MAKE THINGS</p>
            </div>

            <div className="line line3">
              <p className="word">FOR </p>
              <p className="word">THE WEB.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="welcome">
        <p className="word">WELCOME TO MY HOME</p>
      </div>
    </>
  );
};

export default App;
