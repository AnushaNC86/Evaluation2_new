import "./topBar.css";
const TopBar = () => {
  return (
    <div className="topBarContainer">
      <div className="topbarContents">
        <div className="topBarLogo">
          <img
            src={require("../../assets/icons/pass_logo.png")}
            alt="topbarLogo"
          />
        </div>
        <div className="topBarChoices">
          <div className="sync">
            <img src={require("../../assets/icons/sync.png")} alt="" />
          </div>
          <div className="profilePhoto">
            <img src={require("../../assets/icons/profile.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
