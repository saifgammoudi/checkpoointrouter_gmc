import React from "react";
const Rate = ({ rate, setRatingSearch }) => {
  const stars = (rate) => {
    let startsTab = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        startsTab.push(
          <span
            style={{
              color: "#FFC83D",
              fontSize: "25px",
              marginLeft: "0",
              cursor: "pointer",
            }}
            onClick={() => setRatingSearch(i)}
          >
            ★
          </span>
        );
      } else {
        startsTab.push(
          <span
            style={{
              color: "#FFC83D",
              fontSize: "25px",
              marginLeft: "0",
              cursor: "pointer",
            }}
            onClick={() => setRatingSearch(i)}
          >
            ☆
          </span>
        );
      }
    }
    return startsTab;
  };
  return <div>{stars(rate)}</div>;
};
Rate.defaultProps = {
  setRatingSearch: () => {},
  rate: 1,
};
export default Rate;
