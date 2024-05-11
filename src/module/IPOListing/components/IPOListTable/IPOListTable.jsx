import React from "react";
import { IPO_LIST } from "../../../../utils/data";
import './style.css';

const IPOListTable = ({ handleRowClick }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Upcoming IPO List </h2>
      <table className="ipo_listing_table">
        <tr>
          <th style={{ width: "30%" }}>Company / Issue date</th>
          <th style={{ textAlign: "center" }}>Issue size</th>
          <th style={{ textAlign: "center" }}>Price range</th>
          <th style={{ textAlign: "center" }}>Min invest/qty</th>
        </tr>
        <tbody>
          {IPO_LIST?.map((ele) => (
            <tr
              key={ele.id}
              className="stock_row"
              onClick={() => handleRowClick(ele)}
            >
              <td className="company_date_logo">
                <div className="company_logo">
                  {ele?.companyName?.substring(0, 3)}
                </div>
                <div className="company_date">
                  <h3 className="company_name">{ele?.companyName}</h3>
                  <span className="issue_date">
                    {ele?.date || "To be announced"}
                  </span>
                </div>
              </td>
              <td className="issue_size">&#8377; {ele?.issueSize} Crores</td>
              <td className="issue_size">&#8377; {ele?.priceRange}</td>
              <td className="size_lots_ctn">
                <span className="min_inv">
                  &#8377; {ele?.minInvestment.toLocaleString()}
                </span>
                <span className="issue_date">
                  {ele?.noOfShare} Shares/{ele?.noOfLots} Lots
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPOListTable;
