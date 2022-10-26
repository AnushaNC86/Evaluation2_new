import "./dashboardBody.css";
import { useState } from "react";

const DashBoardBody = () => {
  const [data, setData] = useState(false);
  const [modal, setModal] = useState(false);

  const siteData = [
    {
      siteName: "Facebook",
      url: "www.facebook.com",
      sector: "Social Media",
      userName: "John",
      sitePassword: "abcd123",
      notes: "",
      icon: require("../../assets/icons/Facebook.png"),
    },
    {
      siteName: "YouTube",
      url: "www.youtube.com",
      sector: "Social Media",
      userName: "John",
      sitePassword: "abcd123",
      notes: "",
      icon: require("../../assets/icons/YouTube.png"),
    },

    {
      siteName: "Pinterest",
      url: "www.Pinterest.com",
      sector: "Social Media",
      userName: "john",
      sitePassword: "abcd111",
      notes: "",
      icon: require("../../assets/icons/Pinterest.png"),
    },
    {
      siteName: "Pinterestgff",
      url: "www.Pintergfgest.com",
      sector: "Social Media",
      userName: "john",
      sitePassword: "abcd111",
      notes: "",
      icon: require("../../assets/icons/Pinterest.png"),
    },
    {
      siteName: "Pinterestgcfvff",
      url: "www.Pintergfgestfg.com",
      sector: "Social Media",
      userName: "john",
      sitePassword: "abcd111",
      notes: "",
      icon: require("../../assets/icons/Pinterest.png"),
    },
  ];

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
      {data ? (
        <div className="addNewDataContainer">
          <div className="addSite">
            <div className="addNew">
              Please Click on the “+” symbol <br />
              to add sites
            </div>
          </div>
        </div>
      ) : (
        <div className="addSiteContainer">
          <div className="socialMediaHead">
            {" "}
            <div className="socialMedia">Social Media</div>
            <div className="dropdown">
              <img src={require("../../assets/icons/drop_down.png")} alt="" />
            </div>
            <div className="socialMediaCount">{siteData.length}</div>
          </div>
          <div className="sitesContainer">
            {siteData.map((ele: any) => {
              return (
                <div key={ele.siteName} className="sitesContents">
                  <div className="cardHead">
                    <div className="cardLogo">
                      {ele.icon === "" ? (
                        <img
                          src={require("../../assets/icons/pass_logo.png")}
                          height="50px"
                          style={{
                            backgroundPosition: "cover",
                            borderRadius: "50%",
                          }}
                        />
                      ) : (
                        <img src={ele.icon} alt="" />
                      )}
                    </div>

                    <div>
                      <div className="copyTitle"> {ele.siteName}</div>
                      <div className="cardCopy">
                        <img
                          src={require("../../assets/icons/copy.png")}
                          alt="copy"
                        />
                        <div className="copyPass">Copy Password</div>
                      </div>
                    </div>
                  </div>
                  <div className="siteLink">{ele.url}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {modal && (
        <>
          <div className="modal">
            <div className="modalCover"></div>
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
              <div className="modalBody">
                <form className="modalForm">
                  <div className="inputField">
                    <div className="url">URL</div>
                    <input type="text" name="url" className="modalInput1" />
                  </div>
                  <div className="inputFiledItemss">
                    <div className="textField">
                      <div>Site Name</div>
                      <input
                        type="text"
                        name="siteName"
                        className="modalInput"
                      />
                    </div>
                    <div className="textField">
                      <div>Sector/Folder</div>
                      <input type="text" name="sector" className="modalInput" />
                    </div>
                  </div>
                  <div className="inputFiledItemss">
                    <div className="textField">
                      <div>Site Name</div>
                      <input
                        type="text"
                        name="siteName"
                        className="modalInput"
                      />
                    </div>
                    <div className="textField">
                      <div>Sector/Folder</div>
                      <input type="text" name="sector" className="modalInput" />
                    </div>
                  </div>
                  <div className="textField inputField">
                    <div>Notes</div>
                    <textarea className="modalInputNotes" name="notes" />
                  </div>
                  <div></div>
                  <div className="modalButtons">
                    <button className="resetBtn">Reset</button>
                    <button className="saveBtn" type="submit">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashBoardBody;
