import React from "react";
import "./UpdatePopup.css";

function Popup(props) {
  return props.trigger ? (
    <div className="update-popup">
      <div className="update-popup-inner">
        <button
          className="update-close-btn"
          onClick1={() => props.setTrigger(false)}
        >
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;