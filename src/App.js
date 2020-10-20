import React from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
        <div class="container-fluid">

       
      <Navbar/>

  <div class="row">
    <div class="bloque1 border border-gray">
 
       <p class="text1"> Quand je découvre combien je suis facturé au client</p>
       <video autoplay="true" loop class ="video"  src="https://lesjoiesducode.fr/content/042/v8JLf19.webm" ></video>
          <div class="container-fluid">
            <div class="row">
                  <div class="col"><button type="button" class="btn btn-primary">Facebook</button></div>
                  <div class="col"><button type="button" class="btn btn-info">Twitter</button></div>
                  <div class="col"><button type="button" class="btn btn-secondary">E-mail</button></div>
                  <div class="col"></div>
            </div>
          </div>
    </div>
    <div class="bloque2">
      One of two columns
    </div>
  </div>
        </div>



    </div>
  );
}
export default App;
