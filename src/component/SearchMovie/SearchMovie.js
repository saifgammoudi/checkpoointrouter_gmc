import React from "react";
import Rate from "../Rate";
import "./SearchMovie.css";
const SearchMovie = ({
  nameSearch,
  setNameSearch,
  ratingSearch,
  setRatingSearch,
}) => {
  return (
    <div>
      <form
        action="#"
        autocomplete="off"
        className="frm"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {/* --------------------------- search by name ------------------------- */}
        <fieldset
          class="url"
          style={{ marginRight: "150px", paddingTop: "50px" }}
        >
          <input
            id="url"
            type="text"
            name="url"
            required
            className="inpt"
            onChange={(e) => setNameSearch(e.target.value)}
            value={nameSearch}
          />
          <label
            for="url"
            className="lab"
            style={{ marginRight: "150px", paddingTop: "50px" }}
          >
            <i class="fa fa-search" aria-hidden="true"></i> Search
          </label>
          <div class="after"></div>
        </fieldset>
        {/* --------------------------- search by rate ------------------------- */}

        <div style={{ marginTop: "10px", paddingTop: "50px" }}>
          <Rate rate={ratingSearch} setRatingSearch={setRatingSearch} />
        </div>
      </form>
    </div>
  );
};
export default SearchMovie;
