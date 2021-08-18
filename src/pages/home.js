import "../styles/Home.css";
import Graphing from "../components/Graphing.js";

import Navbar from "../components/Navbar";
function home() {
  document.title = "Home";
  return (
    <div className="home">
      <Navbar title = 'Welcome'/>
      <Graphing />
    </div>
  );
}

export default home;
