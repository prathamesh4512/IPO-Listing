import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import "./style.css";
import {LABELS} from "../../../../utils/data"

const IPOTimeLine = ({ timeLine }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let temp = 0;
    for (let key in timeLine) {
      if (new Date(timeLine[key]).getTime() < new Date().getTime()) {
        temp++;
      } else {
        break;
      }
    }
    setProgress(temp);
  }, [JSON.stringify(timeLine)]);

  const progressWidth = () => {
    return ((progress - 1) / 5) * 100;
  };

  return (
    <div className="ipo_timeline">
      <h3>IPO timeline</h3>
      <div className="progress_bar">
        <div className="horizontal_line before_bar"></div>
        <div className="horizontal_line">
          <div
            className="horizontal_line_green"
            style={{ width: `calc(${progressWidth()}%)` }}
          ></div>
        </div>

        {Object.keys(timeLine)?.map((ele, idx) => (
          <div key={idx} className="progress_ctn">
            <div
              className={`progress_icon ${progress > idx ? "done" : "pending"}`}
            >
              {progress > idx ? (
                <AiOutlineCheck style={{ color: "white" }} />
              ) : null}
            </div>
            <h5 className="label">{LABELS[idx]}</h5>
            <p className="event_date">{timeLine[ele]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IPOTimeLine;
