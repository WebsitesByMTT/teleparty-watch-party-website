import React from "react";
import styles from "../styles/howtouse.module.scss";
import Accordian from "./Accordian";

const questions = [
  {
    id: 1,
    ques: "Install the Teleparty Extension",
    ans: " To begin with, make sure you acquire the most thrilling stream fest plugin from a secure browser, such as Microsoft Edge and Google Chrome. Additionally, make sure that during the download process, your browser is free of cookies and cache. Moreover, you may download and set up the Teleparty Extension by clicking this link. Watch latest movies and series with chrome teleparty extension with your friends and family from the comfort of your home",
  },
  {
    id: 2,
    ques: "Pin the Extension ",
    ans: "Next, after the download and installation are finished, pin it to the toolbar of your web browser. Right-click the TP symbol, then press the pin icon to pin the TP button to the toolbar. You can locate the extension by touching the puzzle icon if you are unable to locate it. In order to properly use the chrome teleparty extension in the future, it is also imperative that you pin it on the toolbar",
  },
  {
    id: 3,
    ques: "Open Your Streaming Account and Log In",
    ans: "Open your preferred streaming services, including Netflix, HBO Max, Disney Plus Hotstar, Amazon Prime Video, Hulu, Paramount Plus, And Peacock TV. Afterward, sign into your account. Furthermore, every attendee at the viewing party needs to have a subscription to the same streaming service. In order to participate and conduct their virtual watch party, each member must also have their own subscription. You can easily download the teleparty extension from chrome web store",
  },
  {
    id: 4,
    ques: "Search and watch ",
    ans: "Next, find the film or series you want everybody to watch and begin streaming it. After a little period of streaming, pause the video if you wish to host a watch party",
  },
  {
    id: 5,
    ques: "Organize a Watch Party",
    ans: "To open a watch party window on your browser, click the TP symbol from the toolbar. This will cause a popup window labeled Create A Watch Party to appear. In addition, there's a Start A Party button beneath it. To create your Teleparty invitation link, hit it. To invite your friends and family to the watch party, send them the invitation's URL. On google chrome teleparty you can easily watch and enjoy your movie or series with your friends and family ",
  },
  {
    id: 6,
    ques: "Become a Teleparty Member",
    ans: "Finally, tap the Teleparty invitation after logging into your streaming account. Please make sure you have the relevant extension configured before joining the watch party. Clicking the watch party link will take you to the watch party if the extension is already installed. ",
  },
];
const HowToUse = ({ data }) => {
  return (
    <div className={styles.HowToUse} id="HowToUse">
      <div className={styles.headings}>
        <h2>{data.title}</h2>
        {data.desc.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.videoContainer}>
            <video
              src="/how-to-install.mp4"
              className={styles.video}
              autoPlay
              muted
              controls
              id="how-to-install"
            >
              <source type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className={styles.right}>
          <Accordian questions={data?.questions} />
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
