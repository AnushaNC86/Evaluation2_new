import "./dashboardBody.css";
import { useState } from "react";
import Modal from "../modal/modal";
import SitesCard from "../sitesCard/sitesCard";

const DashBoardBody = () => {
  const [data, setData] = useState(false);
  const [modal, setModal] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");
  console.log("currentUser", currentUser);

  const siteData = JSON.parse(localStorage.getItem(currentUser) || "[]");
  console.log("siteData", siteData);

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <div className="homeBodyContiner">
      <div className="homebodyHead">
        <div className="sitesMedia">
          <div className="socialMediaContainer">
            <div className="Sites">Sites</div>
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
                onClick={openModal}
              />
            </div>
          </div>
        </div>
      </div>
      {JSON.stringify(siteData) === "[]" ? (
        <div className="addNewDataContainer">
          <div className="addSite">
            <div className="addNew">
              Please Click on the “+” symbol <br />
              to add sites
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="socialMediaHead">
            <div className="socialMedia">Social Media</div>
            <div className="dropdown">
              <img src={require("../../assets/icons/drop_down.png")} alt="" />
            </div>
            <div className="socialMediaCount">
              {siteData.length < 10 ? `0${siteData.length}` : siteData.length}
            </div>
          </div>
          <div className="sitesMobile">
            <div className="Sites">Sites</div>
            <div className="socialMediaHead1">
              <div className="socialMedia">Social Media</div>
              <div className="dropdown">
                <img src={require("../../assets/icons/drop_down.png")} alt="" />
              </div>
              <div className="socialMediaCount">
                {siteData.length < 10 ? `0${siteData.length}` : siteData.length}
              </div>
            </div>
          </div>
          <div className="addSiteContainer">
            <SitesCard siteData={siteData} />
            <div className="addModalMobile">
              <img
                src={require("../../assets/icons/close_btn.png")}
                alt=""
                className="cross"
                onClick={openModal}
              />
            </div>
          </div>
        </div>
      )}
      {modal && (
        <>
          <div className="modal">
            <div className="modalCover">
              <div className="modalContent">
                <div className="modalClose"></div>
                <div className="modalCloseBtn" onClick={openModal}>
                  <img
                    src={require("../../assets/icons/close_btn.png")}
                    alt=""
                    className="modalBtnClose"
                  />
                </div>
                <div className="modalHead">
                  <div className="modalHeading">Add Site</div>
                </div>
                <Modal />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashBoardBody;
