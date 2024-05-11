import React from 'react';
import "./style.css";

const IpoDetails = ({stockData}) => {
  return (
    <div className="ipo_details">
    <h3>IPO Details</h3>
    <div className="details_ctn">
      <div className="detail_div">
        <span className="title">Issue size</span>
        <h5 className="detail_data">
          &#8377;{stockData?.issueSize.toLocaleString()}-
          {(stockData?.issueSize + 100).toLocaleString()} Cr.
        </h5>
      </div>
      <div className="detail_div">
        <span className="title">Price range</span>
        <h5 className="detail_data">&#8377;{stockData?.priceRange}</h5>
      </div>
      <div className="detail_div">
        <span className="title">Minimum amount</span>
        <h5 className="detail_data">
          &#8377;{stockData?.minInvestment.toLocaleString()}
        </h5>
      </div>
      <div className="detail_div">
        <span className="title">Lot size</span>
        <h5 className="detail_data">
          {stockData?.noOfShare} shares/lots
        </h5>
      </div>
      <div className="detail_div">
        <span className="title">Issue dates</span>
        <h5 className="detail_data">
          {stockData?.dates?.start?.substring(0, 6)} -{" "}
          {stockData?.dates?.end}
        </h5>
      </div>

     {stockData?.dates?.listing && <div className="detail_div">
        <span className="title">Listed on</span>
        <h5 className="detail_data">{stockData?.dates?.listing}</h5>
      </div>}

      {stockData?.listedPrice && <div className="detail_div">
        <span className="title">Listed price</span>
        <h5 className="detail_data">&#8377;{stockData?.listedPrice}</h5>
      </div>}

      <div className="detail_div">
        <span className="title">Listing gains</span>
        <h5 className="detail_data">
          &#8377;{stockData?.listingGain || 0} (
          <span
            className="list_gain"
            style={{ color: stockData?.percentage > 0 ? "green" : "red" }}
          >
            {(stockData?.percentage || 0).toFixed(1)}%
          </span>
          )
        </h5>
      </div>
    </div>
  </div>
  )
}

export default IpoDetails