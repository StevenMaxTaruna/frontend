import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Superhero() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/tv/popular', {
            params: {
                api_key: '257443ce2715a86e96cc262188606431'
            }
        }).then((response) => {
            console.log(response);
            setMovies(response.data.results);
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []); // Empty dependency array to run effect only once

    return (
        <div className='container-fluid superhero' id='superhero'>
            <div className="container p-4 text-light">
                <h3 className='text-warning text-center'>SUPERHERO</h3>
                <div className="row">
                    {movies.map((result, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-3" key={index}>
                            <div className="card">
                                <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} className="card-img-top" alt="Superhero Poster" />
                                <div className="card-body">
                                    {/* Using proper Bootstrap modal attributes */}
                                    <a href="#" className="nav-link"
                                        data-bs-toggle="modal"
                                        data-bs-target={`#modal-${index}`}
                                    >
                                        <h5 type="button" className="card-title text-center">
                                            {result.name}
                                        </h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal section */}
            {movies.map((result, index) => (
                <div key={index} className="modal fade" id={`modal-${index}`} tabIndex="-1" aria-labelledby={`modalLabel-${index}`} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={`modalLabel-${index}`}>{result.name}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <img src={`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`} className="img-fluid" alt="Superhero Poster" />
                                <hr />
                                <h3>{result.name}</h3>
                                <p>{result.overview}</p>
                                {/* Add more details or content here if needed */}
                            </div>
                            <div className="modal-footer">
                               <div className="row">
                                <div className="col-12 text-center">Release Date: <b className="bg-primary">{result.first_air_date}</b></div>
                                <div className="col-12 text-center"></div>
                                <div className="col-12 text-center"></div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Superhero;
