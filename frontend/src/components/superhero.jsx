import React from 'react'
import antman from '../assets/images/superhero/antman.jpg';
import avenger from '../assets/images/superhero/avenger.jpg';
import batman from '../assets/images/superhero/batman.jpg';
import robinhood from '../assets/images/superhero/robinhood.jpg';
import spiderman from '../assets/images/superhero/spiderman-cover.jpg';
import superman from '../assets/images/superhero/superman.jpg';


function Superhero() {
  return (
    <div className='container-fluid superhero' id='superhero'>
    <div className="container p-4 text-light ">
      <h3 className=' text-warning text-center'>SUPERHERO

      </h3>
      <div className="row">
          <div className=" col-lg-4 col-md-6 col-sm-12 mt-3">

              <div class="card" style={{width: '22rem'}}>
                  <img src={antman} class="card-img-top" alt="..." style={{height:'400px'}}/>
                  <div class="card-body">
                      <h5 class="card-title">antman</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">view</a>
                  </div>
              </div>

          </div>
          <div className=" col-lg-4 col-md-6 col-sm-12 mt-3">
              <div class="card" style={{width: '22rem'}}>
                  <img src={avenger} class="card-img-top" alt="..." style={{height:'400px'}}/>
                  <div class="card-body">
                      <h5 class="card-title">avenger</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">view</a>
                  </div>
              </div>
          </div>

          <div className=" col-lg-4 col-md-6 col-sm-12 mt-3">
              <div class="card" style={{width: '22rem'}}>
                  <img src={batman} class="card-img-top" alt="..." style={{height:'400px'}}/>
                  <div class="card-body">
                      <h5 class="card-title">batman</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">view</a>
                  </div>
              </div>
          </div>

          <div className=" col-lg-4 col-md-6 col-sm-12 mt-3">
              <div class="card" style={{width: '22rem'}}>
                  <img src={robinhood} class="card-img-top" alt="..." style={{height:'400px'}}/>
                  <div class="card-body">
                      <h5 class="card-title">robinhood</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">view</a>
                  </div>
              </div>
          </div>

          <div className=" col-lg-4 col-md-6 col-sm-12 mt-3">
              <div class="card" style={{width: '22rem'}}>
                  <img src={spiderman} class="card-img-top" alt="..." style={{height:'400px'}}/>
                  <div class="card-body">
                      <h5 class="card-title">spiderman</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">view</a>
                  </div>
              </div>
          </div>

          <div className=" col-lg-4 col-md-6 col-sm-12 mt-3">
              <div class="card" style={{width: '22rem'}}>
                  <img src={superman} class="card-img-top" alt="..." style={{height:'400px'}}/>
                  <div class="card-body">
                      <h5 class="card-title">superman</h5>
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

export default Superhero;
