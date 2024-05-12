import React from 'react';
import { FaFileDownload } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import "./style.css";

const IpoHeader = ({stockData,handleBack}) => {
  return (
    <div className="top_header">
          <div className="left_side">
            <IoChevronBack className="back_button" onClick={handleBack} />
            <div className="logo_name">
              <div className="company_logo">
                {stockData.companyName.substring(0, 3)}
              </div>
              <div>
                <h2>{stockData.companyName}</h2>
                <h6>{stockData.companyName} Private Limited</h6>
              </div>
            </div>
          </div>
          <div className="right_side">
            <FaFileDownload className="download"  style={{cursor:"pointer"}}/>
            <button className="apply_btn">Apply Now</button>
          </div>
        </div>
  )
}

export default IpoHeader