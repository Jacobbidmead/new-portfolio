import Room from "./components/spline";
import "./App.css";

function App() {
  return (
    <>
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
        <Room />

        <div>
          {" "}
          <img src="" alt="" />
        </div>
      </div>
      <div className="">
        <p className="word">WELCOME TO MY HOME</p>
      </div>
    </>
  );
}

export default App;
