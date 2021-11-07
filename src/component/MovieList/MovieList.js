import React from "react";
import MovieCard from "../MovieCard/MovieCard";
const MovieList = (props) => {
  return (
    <div>
      {" "}
      {props.movies
        .filter(
          (el) =>
            el.title
              .toLowerCase()
              .includes(props.nameSearch.toLowerCase().trim()) &&
            el.rate >= props.ratingSearch
        )
        .map((el, i) => (
          <MovieCard key={i} el={el} />
        ))}
    </div>
  );
};

export default MovieList;
