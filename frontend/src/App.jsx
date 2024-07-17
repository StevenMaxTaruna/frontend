import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Card from "./components/card";
import Trending from "./components/Trending";
import Superhero from "./components/superhero";
import Footer from "./components/footer";

        
function App() {
  return (
    <>

      <Navbar/>
    <div className="intro" id="top">
      <Intro/>
    </div>

     <div>
     <Trending/>
     <a href="#top" className="btn btn-warning p-2 tombol btn-lg">Go To Top </a>
     <Superhero/>
     </div>

     <div>
      <Footer/>
     </div>

      {/* <div className="row my-5 ">
        <div className="col-4"></div>
        <div className="col-4"><Intro/></div>
        <div className="col-4"></div>
      </div> */}

      {/* <div className="row " style={{ backgroundColor: '#00000025'}}>
        <div className="col-3"></div>
        <div className="col-8"><Card/></div>
        <div className="col-2"></div>
      </div>
      <div className="row "  style={{ backgroundColor: '#00000025'}}>
        <div className="col-3"></div>
        <div className="col-8"><Card/></div>
        <div className="col-2"></div>
      </div>

      <div className="row">
        <div><Footer/></div>
      </div> */}
    </>
  );
}

export default App;
