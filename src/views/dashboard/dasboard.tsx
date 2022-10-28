import DashBoardBody from "../../components/DashboardBody/dashboardBody";
import SideBar from "../../components/sideBar/sideBar";
import Toast from "../../components/toast/toast";
import TopBar from "../../components/topBar/topBar";
import { useState } from "react";
import "./dashboard.css";

const DashBoard = () => {
  const [toast, setToast] = useState(false);

  return (
    <div className="dashboardContainer">
      {toast ? <Toast message="Succesfully signed into your account!!!" /> : ""}
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
