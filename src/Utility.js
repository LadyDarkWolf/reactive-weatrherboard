import React from "react";

export default function Utility(props) {
  return (
    <div className="row justify-content-between">
      <div className="col-2">
        <a href="/" className="fav" id="fav-1">
          New York
        </a>
      </div>
      <div className="col-2">
        <a href="/" className="fav" id="fav-2">
          {" "}
          Sydney
        </a>
      </div>
      <div className="col-2">
        <a href="/" className="fav" id="fav-3">
          Tokyo
        </a>
      </div>
      <div className="col-2">
        <a href="/" className="fav" id="fav-4">
          Christchurch
        </a>
      </div>
      <div className="col-4 text-center">
        <button className="btn btn-info" id="unit-change-F">
          °F
        </button>
        <button className="btn btn-info" id="unit-change-C">
          °C
        </button>
        <button className="btn btn-info" id="unit-change-K">
          K
        </button>
      </div>
    </div>
  );
}
