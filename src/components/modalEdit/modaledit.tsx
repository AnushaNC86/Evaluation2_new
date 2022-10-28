import { useState } from "react";
import "../modal/modal.css";

const ModalEdit = (props: any) => {
  const [value, setValue] = useState({
    url: "",
    siteName: "",
    folder: "",
    userName: "",
    sitePassword: "",
    notes: "",
  });
  const [edit, setEdit] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");
  const editData = JSON.parse(localStorage.getItem(currentUser) || "[]");

  const modalHandler = (event: any, i: number) => {
    event.preventDefault();
    const url = event.target.url.value;
    const siteName = event.target.siteName.value;
    const folder = event.target.folder.value;
    const userName = event.target.userName.value;
    const sitePassword = event.target.sitePassword.value;
    const notes = event.target.notes.value;

    const modalData = {
      url,
      siteName,
      folder,
      userName,
      sitePassword,
      notes,
    };
    editData[i] = modalData;
    localStorage.setItem(currentUser, JSON.stringify(editData));
    window.location.reload();
  };

  const editHandler = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <div className="modalItem">
        <div className="addSiteModal">Site Details</div>
        <div className="dashBoardForm">
          <form
            action=""
            className="modalForm"
            onSubmit={(e) => modalHandler(e, props.index)}
          >
            <div className="url">
              <div className="classLabel">URL</div>
              <input
                type="text"
                className="inputStyle"
                name="url"
                onChange={editHandler}
                value={edit ? value.url : editData[props.index].url}
              />
            </div>

            <div className="firstLine">
              <div className="siteName">
                <div className="classLabel">Site Name</div>
                <input
                  type="text"
                  className="inputStyle"
                  name="siteName"
                  onChange={editHandler}
                  value={edit ? value.siteName : editData[props.index].siteName}
                />
              </div>

              <div className="selectFolder">
                <div className="classLabel">select/Folder</div>
                <input
                  type="text"
                  className="inputStyle"
                  name="folder"
                  onChange={editHandler}
                  value={edit ? value.folder : editData[props.index].folder}
                />
              </div>
            </div>

            <div className="firstLine">
              <div className="userName">
                <div className="classLabel">user Name</div>
                <input
                  type="text"
                  className="inputStyle"
                  name="userName"
                  onChange={editHandler}
                  value={edit ? value.userName : editData[props.index].userName}
                />
              </div>

              <div className="sitePassword">
                <div className="classLabel">site password</div>
                <input
                  type="text"
                  className="inputStyle"
                  name="sitePassword"
                  onChange={editHandler}
                  value={
                    edit
                      ? value.sitePassword
                      : editData[props.index].sitePassword
                  }
                />
                <img
                  src={require("../../assets/icons/eye_on.png")}
                  alt="eye"
                  className="passwordEye"
                />
              </div>
            </div>

            <div className="textArea">
              <div className="classLabel">notes</div>
              <textarea
                className="inputStyle"
                name="notes"
                onChange={editHandler}
                value={edit ? value.notes : editData[props.index].notes}
              />
            </div>

            <div className="modalButton">
              {props.edit1 ? (
                <div>
                  {!edit ? (
                    <button type="button" onClick={() => setEdit(true)}>
                      click to Edit
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}
              {/* <button className="modalButtons button2 " type="reset">
                Reset
              </button>
              <button className="modalButtons button2" type="submit">
                Save
              </button> */}
              {edit ? (
                <input type="submit" value="save" className="btnSubmit" />
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
