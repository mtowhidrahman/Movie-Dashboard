import React from "react";

const MovieCard = ({
  movie: { title, original_language, vote_average, poster_path, release_date },
}) => {
  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : `/no.movies.png`
        }
        alt={title}
      />

      <div className="mt-4">
        <h3>{title}</h3>

        <div className="content">
          <div className="rating">
            <img src="rating.svg" alt="rating" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>
          <span>•</span>
          <div className="lang"> {original_language}</div>
          <span>•</span>
          <div className="year">
            <p>{release_date ? new Date(release_date).getFullYear() : "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
