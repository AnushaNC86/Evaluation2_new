import React from "react";
import "./sitesCard.css";

type siteProps = {
  siteData: {
    url: string;
    siteName: string;
    sector: string;
    userName: any;
    sitePass: any;
    notes: string;
  }[];
};
const SitesCard = (props: siteProps) => {
  return (
    <div>
      <div className="sitesContainer">
        {props.siteData.map((ele: any, i: number) => {
          return (
            <div key={i} className="sitesContents">
              <div className="cardHead">
                <div className="cardLogo">
                  {ele.icon !== "" ? (
                    <img
                      src={require("../../assets/icons/Facebook.png")}
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
  );
};

export default SitesCard;
