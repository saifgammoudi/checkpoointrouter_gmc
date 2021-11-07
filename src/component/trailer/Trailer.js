import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const Trailer = (props) => {
  const movieFound = props.movies.find(
    (movie) => movie.title == props.match.params.Tiltle
  );
  return (
    <div>
      {" "}
      <iframe
        width="100%"
        height="600px"
        src={movieFound.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div
        class="avatars"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Link
          to={`/movie/${movieFound.title}`}
          style={{ textDecoration: "none" }}
        >
          {" "}
          <Button
            style={{
              width: "200px",
              height: "50px",
              fontWeight: "bold",
            }}
            variant="warning"
          >
            {"<"}
            {"<"} Go Back
          </Button>{" "}
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <Button
            style={{
              width: "200px",
              height: "50px",
              fontWeight: "bold",
            }}
            variant="warning"
          >
            Go Home {">"}
            {">"}
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Trailer;
