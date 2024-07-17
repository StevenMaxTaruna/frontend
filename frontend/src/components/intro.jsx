import React from 'react'
import Perusahaan from '../perusahaan';


function Intro() {
  return (
    <div className='container-fluid text-light text-center d-flex justify-content-center align-items-center vh-100 '>
      <div className="container">
      <h1 className='display-2'>Cinema Kita</h1>
      <h3 className='display-4'>Nonton Film Gratis</h3>
      <a className='mt-5 btn btn-warning btn-lg' href='{Perusahaan}'>Informasi TEntang Kami</a>
      </div>
    </div>
  )
}

export default Intro
