import React from 'react'

function Navbar(){
    return(
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
    )
}

export default Navbar