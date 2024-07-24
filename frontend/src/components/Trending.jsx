
// import React from 'react';
// import Joker from '../assets/images/trending/joker.jpg';
// import dune from '../assets/images/trending/dune.jpg';
// import everything from '../assets/images/trending/everything.jpg';
// import infinite from '../assets/images/trending/infinite.jpg';
// import lightyear from '../assets/images/trending/lightyear.jpg';
// import morbius from '../assets/images/trending/morbius.jpg'; 


import{useEffect,useState} from "react";
import axios from "axios";

function Trending() {
    // const[trending,setTrending]=useState();
    const[movies,setMovies] = useState([]);


useEffect(() => {
    axios.get('https://api.themoviedb.org/3/discover/movie',
        {
            params: {
                api_key: '257443ce2715a86e96cc262188606431'
            } 
        }
    ).then((response)=>{
        // console.log(response)
        setMovies(response.data.results)
    })
}, []);





  return (
    <div className='container-fluid trending' id='trending'>
      <div className="container p-4 text-light">
        <h3 className=' text-warning text-center'>TRENDING </h3>
        <div className="row">
            {movies.map((result,index) => {
                return(
                    <div className=" col-lg-4 col-md-6 col-sm-12 mt-3" key={index}>
                        <div className="card" >
                            <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <a href="#" class=" nav-link"
                                    data-bs-toggle="modal"
                                    data-bs-target={`#${index}`}
                                >
                                    <h5 className="card-title text-center" >{result.title}</h5>       
                                </a>
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            </div>
                        </div>
                    </div>
              )
            })}
        </div>
      </div>
    </div>
  );
}
export default Trending;
