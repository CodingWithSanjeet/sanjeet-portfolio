import { useEffect, useRef, useState } from "react";
import { FaBars, FaSoundcloud, FaTimes } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import mp3 from "../../assets/music/sound.mp3";
import { MenuBtn, SoundTrack } from "../../types/common";
import Menu from "../Menu/Menu";
import "./Layout.scss";

const Layout = () => {
    const [isMenuDisplay, setIsMenuDisplay] = useState<MenuBtn>("open");
    const [soundTrack, setSoundTrack] = useState<SoundTrack>("off");
    const [mobileClass, setMobileClass] = useState<string>("");
    const myAudio = useRef<HTMLAudioElement | null>(null);
    const soundTrackChangeHandler = (value: SoundTrack) => {
      setSoundTrack(value);
      if(myAudio.current){
        if (value === "on") myAudio.current.play();
        else myAudio.current.pause();
      }
    };
    useEffect(() => {
      document.body.classList.add("window-loaded");
    }, []);
    const changeMenuBtn = (btnType: MenuBtn) => {
      const buttonType = btnType === "open" ? "close" : "open";
      setIsMenuDisplay(buttonType);
      if (buttonType === "close") setMobileClass("mobileOpen");
      else setMobileClass("");
    };
    return (
      <div className={mobileClass}>
        {/* Beautiful Background Elements */}
        <div className="geometric-background"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        
        <div id="sound">
          <audio ref={myAudio} id="my-audio" loop>
            <source src={mp3} type="audio/mpeg" />
          </audio>
          <FaSoundcloud
            className={`sound-cloud sound-cloud-${soundTrack}`}
            size={32}
          />
          <span>Sound</span>
          <div className="on-off">
            {soundTrack === "on" && (
              <span
                id="on"
                className={`sound-cloud-${soundTrack}`}
                onClick={() => soundTrackChangeHandler("off")}
              >
                {soundTrack}
              </span>
            )}
  
            {soundTrack === "off" && (
              <span
                id="off"
                className={`sound-cloud-${soundTrack}`}
                onClick={() => soundTrackChangeHandler("on")}
              >
                {soundTrack}
              </span>
            )}
          </div>
        </div>
        <button 
          className={`mbtn`}
          onClick={() => changeMenuBtn(isMenuDisplay)}
          aria-label={isMenuDisplay === "open" ? "Open navigation menu" : "Close navigation menu"}
          aria-expanded={isMenuDisplay === "close"}
          aria-controls="main-navigation"
        >
          {isMenuDisplay === "open" && (
            <FaBars
              className="mbtn-op"
              size="30"
              aria-hidden="true"
            />
          )}
          {isMenuDisplay === "close" && (
            <FaTimes
              className="mbtn-cl"
              size="30"
              aria-hidden="true"
            />
          )}
        </button>
        <Menu onMenuItemCLick={changeMenuBtn} />
        <div className="page-outer">
          <span className="tags top-tags">
            &lt;html&gt;
            <br />
          </span>
          <div className="page-inner">
            <Outlet />
          </div>
          <span className="tags bottom-tags">
            <br />
            &lt;/html&gt;
          </span>
        </div>
      </div>
    );
  };

export default Layout