import React from "react";
import { Link } from "react-router-dom";
import "../MovieCard/MovieCard.css";
import Rate from "../Rate";
const MovieCard = ({ el: { title, description, posterUrl, rate } }) => {
  return (
    <div>
      <div id="movie-card-list">
        <div
          class="movie-card"
          style={{
            backgroundImage: `url(${posterUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100%",
          }}
        >
          <Link to={`/movie/${title}`} style={{ textDecoration: "none" }}>
            <div class="movie-card__overlay"></div>
            <div class="movie-card__share">
              <button class="movie-card__icon">
                <i class="material-icons">&#xe87d;</i>
              </button>
              <button class="movie-card__icon">
                <i class="material-icons">&#xe253;</i>
              </button>
              <button class="movie-card__icon">
                <i class="material-icons">&#xe80d;</i>
              </button>
            </div>
            <div class="movie-card__content">
              <div class="movie-card__header">
                <h1 class="movie-card__title">{title}</h1>
                <h4 class="movie-card__info">
                  (1988) Animation, Action, Drama
                </h4>
                <Rate rate={rate} />
              </div>
              <p class="movie-card__desc">{description}</p>
              <Link to={`/trailer/${title}`} style={{ textDecoration: "none" }}>
                <button class="bt bt-outline movie-card__button" type="button">
                  Watch Trailer
                </button>
              </Link>
            </div>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
