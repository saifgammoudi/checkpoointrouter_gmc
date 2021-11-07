import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rate from "../Rate";
import "./MovieDes.css";

const MovieDes = (props) => {
  const movieFound = props.movies.find(
    (movie) => movie.title == props.match.params.Tiltle
  );
  return (
    <div>
      <div class="movie-card">
        <div class="container">
          <div>
            <a href="#">
              <img
                src={movieFound && movieFound.posterUrl}
                alt="cover"
                class="cover"
              />
            </a>
          </div>
          <div
            class="hero"
            style={{
              backgroundImage: `url(${movieFound.posterUrl})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div class="details">
              <div class="title1">
                {movieFound && movieFound.title}
                <span>PG-13</span>
              </div>

              <div class="title2">The Battle of the Five Armies</div>

              <div style={{ marginTop: "10px" }}>
                <Rate rate={movieFound && movieFound.rate} />
              </div>

              <span class="likes">109 likes</span>
            </div>
          </div>

          <div class="description">
            <div class="column1">
              <span class="tag">action</span>
              <span class="tag">fantasy</span>
              <span class="tag">adventure</span>
            </div>

            <div class="column2">
              <p>{movieFound && movieFound.description}</p>

              <div
                class="avatars"
                style={{
                  marginTop: "70px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Link
                  to={`/trailer/${movieFound.title}`}
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
                    {"<"} Watch Trailer
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDes;
