import { useState } from "react";
import "./modal.css";

const Modal = () => {
  const existedSites = localStorage.getItem("currentUser") || "[]";
  console.log("existedSites", existedSites);

  if (existedSites === "[]") {
    localStorage.setItem("currentUser", JSON.stringify([]));
  }
  const siteSubmitHandler = (e: any) => {
    e.preventDefault();

    const url = e.target.url.value;
    const siteName = e.target.siteName.value;
    const sector = e.target.sector.value;
    const userName = e.target.userName.value;
    const sitePass = e.target.sitePass.value;
    const notes = e.target.notes.value;

    const siteValues = { url, siteName, sector, userName, sitePass, notes };
    console.log("siteValues", siteValues);
    const currentUserNum = JSON.parse(
      localStorage.getItem("currentUser") || "[]"
    );
    console.log("currentUserNum", currentUserNum);
    if (
      url != "" &&
      siteName !== "" &&
      sector !== "" &&
      userName !== "" &&
      sitePass !== "" &&
      notes !== ""
    ) {
      const oldData = JSON.parse(localStorage.getItem(currentUserNum) || "[]");
      console.log("oldData", oldData);
      oldData.push(siteValues);
      console.log("oldData2", oldData);
      localStorage.setItem(currentUserNum, JSON.stringify(oldData));
    } else {
      alert("Enter all fields");
    }
  };

  return (
    <div>
      <div className="modalItem">
        <div className="dashBoardForm">
          <form className="modalForm" onSubmit={siteSubmitHandler}>
            <div className="url">
              <div className="classLabel">URL</div>
              <input type="text" className="inputStyle" name="url" />
            </div>

            <div className="firstLine">
              <div className="siteName">
                <div className="classLabel">Site Name</div>
                <input type="text" className="inputStyle" name="siteName" />
              </div>

              <div className="selectFolder">
                <div className="classLabel">select/Folder</div>
                <input type="text" className="inputStyle" name="folder" />
              </div>
            </div>

            <div className="firstLine">
              <div className="userName">
                <div className="classLabel">user Name</div>
                <input type="text" className="inputStyle" name="userName" />
              </div>

              <div className="sitePassword">
                <div className="classLabel">site password</div>
                <input type="text" className="inputStyle" name="sitePassword" />
                <img
                  src={require("../../assets/icons/eye_on.png")}
                  alt="eye"
                  className="passwordEye"
                />
              </div>
            </div>

            <div className="textArea">
              <div className="classLabel">notes</div>
              <textarea className="inputStyle" name="notes" />
            </div>

            <div className="modalButton">
              <button className="modalButtons button2 " type="reset">
                Reset
              </button>
              <button className="modalButtons button2" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="modalBody">
        <form className="modalForm" onSubmit={siteSubmitHandler}>
          <div className="inputField">
            <div className="url">URL</div>
            <input type="text" name="url" className="modalInput1" />
          </div>
          <div className="inputFiledItemss">
            <div className="textField">
              <div>Site Name</div>
              <input type="text" name="siteName" className="modalInput" />
            </div>
            <div className="textField">
              <div>Sector/Folder</div>
              <input type="text" name="sector" className="modalInput" />
            </div>
          </div>
          <div className="inputFiledItemss">
            <div className="textField">
              <div>User Name</div>
              <input type="text" name="userName" className="modalInput" />
            </div>
            <div className="textField">
              <div>Site Password</div>
              <input type="text" name="sitePass" className="modalInput" />
            </div>
          </div>
          <div className="textField inputField">
            <div>Notes</div>
            <textarea className="modalInputNotes" name="notes" />
          </div>
          <div></div>
          <div className="modalButtons">
            <button className="resetBtn" type="reset">
              Reset
            </button>
            <button className="saveBtn" type="submit">
              Save
            </button>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default Modal;
