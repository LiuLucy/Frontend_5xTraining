import React from 'react';
import logo from './assets/img/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header px-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><img src={logo} /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          
        <ul class="navbar-nav">
          <li class="nav-item mx-2">
            <a class="nav-link d-flex justify-content-center" href="#"><i className="far fa-gem mr-2 d-flex align-items-center"></i>線上課程</a>
          </li>          
          <li class="nav-item mx-2">
            <a class="nav-link d-flex justify-content-center" href="#"><i className="far fa-compass fa-lg mr-2 d-flex align-items-center"></i>ASTRO Camp<span className="tag p-1 ml-2">報名優惠中</span></a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link d-flex justify-content-center" href="#">短期課程</a>
          </li> 
          <li class="nav-item mx-2">
            <a class="nav-link d-flex justify-content-center" href="#">專案開發</a>
          </li> 
          <li class="nav-item mx-2">
            <a class="nav-link d-flex justify-content-center" href="#">企業代訓</a>
          </li> 
          <li class="nav-item mx-2">
            <a class="nav-link d-flex justify-content-center" href="#">空間租借</a>
          </li> 
          <li class="nav-item mx-2">
            <a class="nav-link d-flex justify-content-center" href="#">最新消息</a>
          </li> 
        </ul>
        </div>
      </nav>
      </header>
      
    </div>
  );
}

export default App;
