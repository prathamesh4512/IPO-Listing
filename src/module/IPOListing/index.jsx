import React, { useState } from "react";
import "./style.css";
import IPOListTable from "./components/IPOListTable/IPOListTable";
import StockPage from "./components/StockPage";

const IpoListing = () => {
  const [screen, setScreen] = useState("table"); //stockPage
  const [stockData, setStockData] = useState({});

  const handleRowClick = (data) => {
    setScreen("stockPage");
    setStockData(data);
  };

  return (
    <div className="ipo_dashboard_wrapper">
      {(function () {
        switch (screen) {
          case "table":
            return <IPOListTable handleRowClick={handleRowClick} />;
          case "stockPage":
            return (
              <StockPage
                stockData={stockData}
                handleBack={() => setScreen("table")}
              />
            );
        }
      })()}
    </div>
  );
};

export default IpoListing;
