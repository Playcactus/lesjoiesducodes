import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div class="container-fluid">

        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <a class="navbar-brand text-light" href="#">les_joies_du_code</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#"> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">random</a>
      </li>
      
      <li class="nav-item">
       <img src="/public/img/valise.png" alt="logo-menu" class="logo" />
      <button type="button-2" class="btn btn-info button-2">Jobs</button>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2 recherche" type="search" placeholder="Rechercher" aria-label="Search"/> 
      <button class="btn  my-2 my-sm-0 btn-primary poste" type="">Propose un poste </button>
    </form>
  </div>
</nav>
  <div class="row">
    <div class="col-6 bloque1">
 
       <p class="title"> Quand je découvre combien je suis facturé au client</p>
       
    </div>
    <div class="col-3 bloque1">
      One of two columns
    </div>
  </div>
        </div>



    </div>
  );
}
export default App;
