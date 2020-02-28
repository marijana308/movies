import React, { Component } from "react";

/***** MovieDetails Component *****/
export class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: []
    };
  }

  /***** Make Request to API and Receive Data *****/
  async componentDidMount() {
    try {
      // Send Request to API
      const data = await fetch(
        `https://www.omdbapi.com/?i=${this.props.id}&apikey=6916a545`
      );

      // Convert Response into json
      const jsonData = await data.json();

      // Populate State With Data
      this.setState({ movie: jsonData });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    // Destructuring
    const { handleIndex } = this.props;
    const {
      Title,
      Poster,
      Actors,
      Awards,
      Country,
      Director,
      Genre,
      Language,
      Plot,
      Rated,
      Released,
      Runtime,
      Writer,
      imdbRating,
      imdbID
    } = this.state.movie;

    return (
      <div className="pageContainer">
        <div className="detailsContainer">
          <div className="posterContainer">
            <img src={Poster} alt="Movie Poster" className="detailsPoster" />
          </div>
          <div className="listContainer">
            <ul className="detailsList">
              <li>GENRE: {Genre}</li>
              <li>RELEASED: {Released}</li>
              <li>RATED: {Rated}</li>
              <li>RUNTIME: {Runtime}</li>
              <li>DIRECTOR: {Director}</li>
              <li>WRITER: {Writer}</li>
              <li>ACTORS: {Actors}</li>
              <li>LANGUAGE: {Language}</li>
              <li>COUNTRY: {Country}</li>
              <li>IMDb RATING: {imdbRating}</li>
              <li>AWARDS: {Awards}</li>
              <li>PLOT: {Plot}</li>
            </ul>
          </div>
        </div>
        <div className="buttonsContainer">
          <button
            type="button"
            onClick={() => handleIndex(0)}
            className="button backBtn"
          >
            BACK TO SEARCH
          </button>
          <button type="button" className="button imdbBtn">
            <a
              href={`http://imdb.com/title/${imdbID}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW ON IMDB
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
