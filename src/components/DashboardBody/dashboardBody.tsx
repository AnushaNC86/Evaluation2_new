import "./dashboardBody.css";
import { useState } from "react";

const DashBoardBody = () => {
  const [data, setData] = useState(false);

  return (
    <div className="homeBodyContiner">
      <div className="homebodyHead"></div>
      {!data ? (
        <div className="sitesMedia">
          <div className="socialMediaContainer">
            <div className="Sites">Sites</div>
            <div className="socialMediaHead">
              {" "}
              <div className="socialMedia">Social Media</div>
              <div className="dropdown">
                <img src={require("../../assets/icons/drop_down.png")} alt="" />
              </div>
              <div className="socialMediaCount">06</div>
            </div>
          </div>
          <div className="searchContainer">
            <div className="searchBar">
              <input
                type="text"
                className="search"
                name="search"
                placeholder="Search here"
              />
              <img
                src={require("../../assets/icons/search.png")}
                alt=""
                className="searchIcon"
              />
            </div>
            <div className="addModal">
              <img
                src={require("../../assets/icons/close_btn.png")}
                alt=""
                className="cross"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="addNewDataContainer">data</div>
      )}
    </div>
  );
};

export default DashBoardBody;
