import React,{ useEffect } from 'react';
import logo from './assets/img/logo.png';
import pressImg from './assets/img/press-img.png';
import cakeresume from './assets/img/cakeresume.png';
import './style/Style.css';
import Home from './pages/Home/Home.js';
function App() {

  return (
    <div className="App">
      <header className="App-header px-3  bg-light">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="https://5xruby.tw/"><img src={logo} alt="圖片" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          
        <ul className="navbar-nav">
          <li className="nav-item mx-2">
            <a className="nav-link d-flex justify-content-center" href="https://5xruby.tw/"><i className="far fa-gem mr-2 d-flex align-items-center"></i>線上課程</a>
          </li>          
          <li className="nav-item mx-2">
            <a className="nav-link d-flex justify-content-center" href="https://5xruby.tw/"><i className="far fa-compass fa-lg mr-2 d-flex align-items-center"></i>ASTRO Camp<span className="tag p-1 ml-2">報名優惠中</span></a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link d-flex justify-content-center" href="https://5xruby.tw/">短期課程</a>
          </li> 
          <li className="nav-item mx-2">
            <a className="nav-link d-flex justify-content-center" href="https://5xruby.tw/">專案開發</a>
          </li> 
          <li className="nav-item mx-2">
            <a className="nav-link d-flex justify-content-center" href="https://5xruby.tw/">企業代訓</a>
          </li> 
          <li className="nav-item mx-2">
            <a className="nav-link d-flex justify-content-center" href="https://5xruby.tw/">空間租借</a>
          </li> 
          <li className="nav-item mx-2">
            <a className="nav-link d-flex justify-content-center" href="https://5xruby.tw/">最新消息</a>
          </li> 
        </ul>
        </div>
      </nav>
      </header>
      
      <div className="content">
        <Home />
      </div>

      <footer className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <a className="press-img" href="https://5xruby.tw/">
                <img width="100%" className="mb-3" src={pressImg} alt="圖片"/>
              </a>
              <a className="press-img" href="https://5xruby.tw/">
                <img className="mr-2" src={cakeresume} width="70%" alt="圖片" />
                <span className="text-dark">找工作</span>
              </a>
            </div>
            <div className="col-12 col-md-9">
              <div className="row">
                <div className="col-12 mt-1 mt-md-0">
                  <div className="footer-nav">
                    <h5><a href="https://5xruby.tw/" className="text-dark">關於五倍紅寶石</a></h5>
                    <h5><a href="https://5xruby.tw/" className="text-dark">媒體報導</a></h5>
                    <h5><a href="https://5xruby.tw/" className="text-dark">團隊成員</a></h5>
                    <h5><a href="https://5xruby.tw/" className="text-dark">聯絡詢價</a></h5>
                    <h5><a href="https://5xruby.tw/" className="text-dark">常見問題</a></h5>
                    <h5><a href="https://5xruby.tw/" className="text-dark">工作機會</a></h5>
                    <h5><a href="https://5xruby.tw/" className="text-dark">開源專案</a></h5>
                    <h5><a href="https://5xruby.tw/" className="text-dark">隱私條款</a></h5>
                    <h5><a href="https://5xruby.tw/" className="text-dark">服務條款</a></h5>
                  </div>
                </div>
                <div className="col-12 mt-4">
                    <div className="row">
                      <div className="col-12 col-md-4 col-xl-3">
                        <strong className="phone-number">02-2331-5247</strong><br />
                        <small>Mon - Fri / 09:30 - 22:00</small><br />
                        <a href="https://5xruby.tw/" className="text-dark"><i className="mr-3 ml-2 mt-3 media-icon fab fa-facebook-f"></i></a>
                        <a href="https://5xruby.tw/" className="text-dark"><i className="mx-2 mt-3 media-icon fab fa-twitter"></i></a>
                        <a href="https://5xruby.tw/" className="text-dark"><i className="mx-2 mt-3 media-icon fab fa-github"></i></a>
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