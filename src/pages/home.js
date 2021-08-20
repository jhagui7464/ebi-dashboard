import "../styles/Home.css";
import Graphing from "../components/Graphing.js";
import Navbar from "../components/Navbar";
import RecentTransactions from "../components/RecentTransactions";

function home() {
  document.title = "Home";
  return (
    <body className="home">
      <Navbar title="Welcome" />
      <div className="openingComponent">
        <Graphing />
        <RecentTransactions />
      </div>
    </body>
  );
}

export default home;
