import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";

import "./style.css";
import IPOTimeLine from "../IPOTimeLine/IPOTimeLine";
import IpoDetails from "../IPODetails";
import AboutCompany from "../AboutCompany";

const StockPage = ({ stockData, handleBack }) => {
  return (
    <div className="page_wrapper">
      <nav className="navigation_bar">
        <span onClick={handleBack}>Home</span>
        <SlArrowRight className="arrow" />
        <span>Market Watch</span>
      </nav>
      <div className="details_page">
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
            <FaFileDownload className="download" />
            <button className="apply_btn">Apply Now</button>
          </div>
        </div>
        <IpoDetails stockData={stockData} />
        <IPOTimeLine timeLine={stockData?.dates} />
        <AboutCompany/>
      </div>
    </div>
  );
};

export default StockPage;
