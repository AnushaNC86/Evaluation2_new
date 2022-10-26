import DashBoardBody from "../../components/DashboardBody/dashboardBody";
import SideBar from "../../components/sideBar/sideBar";
import TopBar from "../../components/topBar/topBar";
import "./dashboard.css";

const DashBoard = () => {
  return (
    <div className="dashboardContainer">
      <div className="dashboard">
        <div className="dashobardInside">
          <div className="sideBar">
            <SideBar />
          </div>
          <div className="topBar">
            <TopBar />
          </div>
          <div className="dashboardBody">
            <DashBoardBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
