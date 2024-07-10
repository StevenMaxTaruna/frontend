import Navbar from "./components/navbar";
import Content from "./components/content";
import Card from "./components/card";

        
function App() {
  return (
    <>
      <div className="row">
        <div className="container">
          <Navbar/>
        </div>
      </div>

      <div className="row my-5 ">
        <div className="col-4"></div>
        <div className="col-4"><Content/></div>
        <div className="col-4"></div>
      </div>

      <div className="row " style={{ backgroundColor: '#00000025'}}>
        <div className="col-3"></div>
        <div className="col-8"><Card/></div>
        <div className="col-2"></div>
      </div>
      <div className="row "  style={{ backgroundColor: '#00000025'}}>
        <div className="col-3"></div>
        <div className="col-8"><Card/></div>
        <div className="col-2"></div>
      </div>
    </>
  );
}

export default App;
