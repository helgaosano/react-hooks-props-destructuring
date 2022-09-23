import React from "react";

/**
 *With destructuring.
 *Destructuring of props object in the parameter in the function MovieCard in order to have title,
 *posterSrc and genres as keys.
*/
function MovieCard({
  title,
  posterSrc = "https://m.media-amazon.com/images/M/MV5BOTJjNzczMTUtNzc5MC00ODk0LWEwYjgtNzdiOTEyZmQxNzhmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR1,0,182,268_AL_.jpg",
  genres,
}) {
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}
  /**
   * without destructuring.
   * Involves determining what props are used in the component MovieCard and finding where props
   * is referenced in the component.
   
   function MovieCard(props) {
    return (
    <div className="movie-card">
      <img src={props.posterSrc} alt={props.title} />
      <h2>{props.title}</h2>
      <small>{props.genres.join(", ")}</small>
    </div>
  );
}
   */
  
export default MovieCard;
