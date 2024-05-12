import React from "react";
import { SlArrowRight } from "react-icons/sl";
import "./style.css";
import IPOTimeLine from "../IPOTimeLine/IPOTimeLine";
import IpoDetails from "../IPODetails";
import AboutCompany from "../AboutCompany";
import IpoHeader from "../IPOHeader";

const StockPage = ({ stockData, handleBack }) => {
  return (
    <div className="page_wrapper">
      <nav className="navigation_bar">
        <span onClick={handleBack}>Home</span>
        <SlArrowRight className="arrow" />
        <span style={{cursor:"default"}} >Market Watch</span>
      </nav>
      <h4 className="stock_page_heading">IPO details</h4>
      <div className="details_page">
        <IpoHeader stockData={stockData} handleBack={handleBack}/>
        <IpoDetails stockData={stockData} />
        <IPOTimeLine timeLine={stockData?.dates} />
        <AboutCompany companyName={stockData?.companyName}/>
      </div>
    </div>
  );
};

export default StockPage;
