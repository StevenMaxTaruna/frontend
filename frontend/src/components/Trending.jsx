import React from 'react';
import Joker from '../assets/images/trending/joker.jpg';
import dune from '../assets/images/trending/dune.jpg';
import everything from '../assets/images/trending/everything.jpg';
import infinite from '../assets/images/trending/infinite.jpg';
import lightyear from '../assets/images/trending/lightyear.jpg';
import morbius from '../assets/images/trending/morbius.jpg';

function Trending() {
  return (
    <div className='container-fluid trending' id='trending'>
      <div className="container p-4 text-light">
        <h3 className=' text-warning text-center'>TRENDING

        </h3>
        <div className="row">
            <div className=" col-lg-4 col-md-6 col-sm-12 mt-3">

                <div class="card" style={{width: '22rem'}}>
                    <img src={Joker} class="card-img-top" alt="..." style={{height:'400px'}}/>
                    <div class="card-body">
                        <h5 class="card-title">JOKER</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">view</a>
                    </div>
                </div>

            </div>
            <div className=" col-lg-4 col-md-6 col-sm-12 mt-3">
                <div class="card" style={{width: '22rem'}}>
                    <img src={dune} class="card-img-top" alt="..." style={{height:'400px'}}/>
                    <div class="card-body">
                        <h5 class="card-title">dune</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch demo modal
                        </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <img src={dune} class="card-img-top" alt="..." style={{height:'400px'}}/>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className=" col-lg-4 col-md-6 col-sm-12 mt-3">
                <div class="card" style={{width: '22rem'}}>
                    <img src={everything} class="card-img-top" alt="..." style={{height:'400px'}}/>
                    <div class="card-body">
                        <h5 class="card-title">everything</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">view</a>
                    </div>
                </div>
            </div>

            <div className=" col-lg-4 col-md-6 col-sm-12 mt-3">
                <div class="card" style={{width: '22rem'}}>
                    <img src={infinite} class="card-img-top" alt="..." style={{height:'400px'}}/>
                    <div class="card-body">
                        <h5 class="card-title">infinite</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">view</a>
                    </div>
                </div>
            </div>

            <div className=" col-lg-4 col-md-6 col-sm-12 mt-3">
                <div class="card" style={{width: '22rem'}}>
                    <img src={lightyear} class="card-img-top" alt="..." style={{height:'400px'}}/>
                    <div class="card-body">
                        <h5 class="card-title">lightyear</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">view</a>
                    </div>
                </div>
            </div>

            <div className=" col-lg-4 col-md-6 col-sm-12 mt-3">
                <div class="card" style={{width: '22rem'}}>
                    <img src={morbius} class="card-img-top" alt="..." style={{height:'400px'}}/>
                    <div class="card-body">
                        <h5 class="card-title">morbius</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">view</a>
                    </div>
                </div>
            </div>


        
        </div>
      </div>
    </div>
    
  )
}

export default Trending;
