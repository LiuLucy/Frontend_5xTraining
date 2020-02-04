import React from 'react';
import logo from './assets/img/logo.png';
import pressImg from './assets/img/press-img.png';
import cakeresume from './assets/img/cakeresume.png';

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
      
      <div className="content"></div>

      <footer className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <a className="press-img ">
                <img className="mb-3" src={pressImg}/>
              </a>
              <a className="press-img">
                <img className="mr-2" src={cakeresume} width="70%"/>
                <span >找工作</span>
              </a>
            </div>
            <div className="col-12 col-md-9">
              <div className="row">
                <div className="col-12 mt-1 mt-md-0">
                  <div className="footer-nav">
                    <h5><a>關於五倍紅寶石</a></h5>
                    <h5><a>媒體報導</a></h5>
                    <h5><a>團隊成員</a></h5>
                    <h5><a>聯絡詢價</a></h5>
                    <h5><a>常見問題</a></h5>
                    <h5><a>工作機會</a></h5>
                    <h5><a>開源專案</a></h5>
                    <h5><a>隱私條款</a></h5>
                    <h5><a>服務條款</a></h5>
                  </div>
                </div>
                <div className="col-12 mt-4">
                    <div className="row">
                      <div className="col-12 col-md-4 col-xl-3">
                        <strong className="phone-number">02-2331-5247</strong><br />
                        <small>Mon - Fri / 09:30 - 22:00</small><br />
                        <a><i className="mr-3 ml-2 mt-3 media-icon fab fa-facebook-f"></i></a>
                        <a><i className="mx-3 mt-3 media-icon fab fa-twitter"></i></a>
                        <a><i className="mx-3 mt-3 media-icon fab fa-github"></i></a>
                      </div>
                      <div className="col-12 col-md-8 col-xl-9 mt-3 mt-md-0">
                        <p>有任何問題？</p>
                        <a href="mailto:hi@5xruby.tw" className="text-dark">hi@5xruby.tw</a><br />
                        <p>地址：<a target="_blank" href="https://goo.gl/lz5v93" className="text-dark">10046 台北市中正區衡陽路 7 號 5 樓</a></p>                        
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
              <div className="text-center copyright-text">
                <p className="mb-0">© 2014 - 2020 五倍紅寶石股份有限公司 (5XRUBY CO., LTD)</p>
                <p className="mb-0">台北市短期補習班立案 第 7594 號</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
