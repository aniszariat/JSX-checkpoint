import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import react from "react";
import myImg from "./scrimg.png";
import myVideo from "./my video.mp4";

function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>

        <br />

        <img src={myImg} alt="image in src" />

        <br />

        <img src="/publicimg.png" alt="image in public" />
      </div>
      <video width="320" height="240" controls>
        <source src={myVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
