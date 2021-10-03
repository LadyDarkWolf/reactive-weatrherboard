import React from "react";

export default function Search(props) {
  return (
    <div className="row justify-content-center">
      <form id="city-search">
        <div className="col-12">
          <input
            type="text"
            id="city-field"
            className="location-search"
            placeholder="Search for your location"
          />
          <input
            type="submit"
            className="btn btn-success"
            id="search-request"
            name="search"
            value="Search"
          />
          <input
            type="submit"
            id="local-request"
            className="btn btn-primary"
            name="search"
            value="Current Location"
          />
        </div>
      </form>
    </div>
  );
}
