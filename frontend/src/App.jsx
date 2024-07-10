// import React from 'react';


// const Kotak1 = () => {
  //   return (
    //     <>
    //       <h1>kotak1</h1>
    //     </>
    //   );
    // };
    
    // const Kotak2 = () => {
      //  return(
        //   <>
        //   <h1>kotak2</h1>
        //   </>
        //  );
        // };

import Kotak1 from "./components/kotak1";
import Kotak2 from "./components/kotak2";
        
function App() {
  return (
    <>
      <h1 className="warna">hello</h1>
      <Kotak1 />
      <Kotak2/>
    </>
  );
}

export default App;
