import { useState } from "react";
import "./App.css";
import MovieList from "./component/MovieList/MovieList";

import AddMovieL from "./component/AddMovie/AddMovie";
import SearchMovie from "./component/SearchMovie/SearchMovie";
import { BrowserRouter, Route } from "react-router-dom";
import MovieDes from "./component/MovieDes/MovieDes";
import Trailer from "./component/trailer/Trailer";
function App() {
  const [movies, setMovies] = useState([
    {
      title: "The Revenant",
      description:
        "The Revenant ou Le Revenant au Québec est un film d'aventures américain réalisé, coécrit et coproduit par Alejandro González Iñárritu, sorti en 2015.",
      posterUrl:
        "https://i1.wp.com/diacritik.com/wp-content/uploads/2016/02/the-revenant-2015-poster1.jpg?ssl=1",
      rate: 2,
      id: 1,
      trailer: "https://www.youtube.com/embed/JLXH25QkOgM",
    },
    {
      title: "The Dead of Night",
      description:
        "Alone and isolated at the family ranch, Tommy and his sister June suddenly find themselves being terrorized and hunted by a pair of nomadic killers.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BOGJmMTlmMTktYjg0Yy00MWIyLWJkN2YtODRlMjI1YzNkNTcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
      rate: 4,
      id: 2,
      trailer: "https://www.youtube.com/embed/VQjj9Eh5_FE",
    },
    {
      title: "Inception",
      description:
        "Inception ou Origine au Canada, est un thriller de science-fiction américano-britannique écrit, réalisé et produit par Christopher Nolan, sorti en 2010.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      rate: 5,
      id: 3,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0 ",
    },
    {
      title: "Titanic",
      description:
        "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
      rate: 3,
      id: 4,
      trailer: " https://www.youtube.com/embed/3gK_2XdjOdY",
    },
    {
      title: "Zombieland: Double Tap",
      description:
        "Zombieland: Double Tap is a 2019 American post-apocalyptic zombie comedy film directed by Ruben Fleischer and written by Rhett Reese, Paul Wernick, and David Callaham.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/1/15/Zombieland_Double_Tap_teaser_poster.jpg",
      rate: 1,
      id: 5,
      trailer: "https://www.youtube.com/embed/8m9EVP8X7N8",
    },
  ]);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMovies([...movies, newMovie]);
  };

  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(1);
  return (
    <BrowserRouter>
      {" "}
      <div>
        <Route
          exact={true}
          path="/"
          render={() => (
            <>
              <SearchMovie
                nameSearch={nameSearch}
                setNameSearch={setNameSearch}
                ratingSearch={ratingSearch}
                setRatingSearch={setRatingSearch}
              />
              <MovieList
                movies={movies}
                nameSearch={nameSearch}
                ratingSearch={ratingSearch}
              />
              <AddMovieL addNewMovie={addNewMovie} />
            </>
          )}
        />
      </div>
      <Route
        path="/movie/:Tiltle"
        render={(props) => <MovieDes {...props} movies={movies} />}
      />
      <Route
        path="/trailer/:Tiltle"
        render={(props) => <Trailer {...props} movies={movies} />}
      />
    </BrowserRouter>
  );
}

export default App;
