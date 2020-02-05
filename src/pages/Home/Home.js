import React,{ useEffect,useState } from 'react';
import $ from 'jquery';
import './home.css';
import { image_link_sm , image_link_md , image_link_lg } from './../../enums.js';
function Home() {
  const [imageLink, setImageLink] = useState(image_link_lg)
  useEffect(() => {
    console.log("我是寬度",$(window).width())
    if($(window).width() <= 375){
      setImageLink(image_link_sm)
    } else if($(window).width() <= 376 && $(window).width() >= 768){
      setImageLink(image_link_md)
    } else {
      setImageLink(image_link_lg)
    }
    
  });
  useEffect(() => {
    var fp = {},
    fpCarousel = $('#fp-carousel'),
    fpItem = fpCarousel.find('.item'),
    fpIndicator = fpCarousel.find('.carousel-indicators li'),
    fpItem_index = 0,
    isNext = true;
    fp.playTimer = null;
    function isActive(classname) {
      var index = classname.indexOf('active');
      if (index == -1) {
        return false;
      } else {
        return true;
      }
    }
    function updateIndicator() {
      for(var j = 0, m = fpIndicator.length; j < m; j++){
        $(fpIndicator[j]).attr('class', '');
        $(fpIndicator[fpItem_index]).attr('class', 'active');
      }
    }
    function carousel_init() {
      for (var i = 0, l = fpItem.length; i < l; i++) {
        var self = $(fpItem[i]);
        if (!isActive(self.attr('class'))) {
          isNext ? self.css({'left': self.width()}) : self.css({'left': -self.width()});
        }
      }
      updateIndicator();
    }
    function carousel_play(dir) {
      if (!arguments.length) {
        carousel_init();
        //给下一个item配置active
        for (var i = 0, l = fpItem.length; i < l; i++) {
            var self = $(fpItem[i]);

            if (isActive(self.attr('class'))) {
              isNext ? self.animate({'left': -$(window).width()},'fast').attr({'class': 'item width100 w-height'}).hide() :
                self.animate({'left': $(window).width()},'fast').attr({'class': 'item width100 w-height'}).hide();
                if(isNext){
                  if (fpItem_index >= l - 1) {
                    fpItem_index = 0;
                  } else {
                    fpItem_index = i + 1;
                  }
                } else {
                  if (fpItem_index <= 0) {
                    fpItem_index = l-1;
                  } else {
                    fpItem_index = i - 1;
                  }
                }
            }
        }
        $(fpItem[fpItem_index]).show().animate({'left': 0},'fast').attr({'class': 'item active width100 w-height'});
        carousel_init();
      } else {
        switch(arguments[0]){
          case 'next':
            isNext = true;
            carousel_play();
            break;
          case 'prev':
            isNext = false;
            carousel_play();
            break;
          }
        }
      }
      fp.playTimer = setInterval(function () {
        carousel_play();
      }, 5000);
      fpCarousel.on('mouseenter', function () {
        clearInterval(fp.playTimer);
      }).on('mouseleave', function () {
        fp.playTimer = setInterval(function () {
          carousel_play();
        }, 3000);
      });

      fpCarousel.find('.left').bind('click', function () {
        carousel_play('prev');
      });
      fpCarousel.find('.right').bind('click', function () {
        carousel_play('next');
      });
      fpIndicator.click(function () {
        var slideData = $(this).attr('data-slide-to');

      fpCarousel.find('.item.active').animate({'left': -fpItem.width()},'fast').attr({'class': 'item width100 w-height'});
      $(fpItem[slideData]).show().animate({'left': 0},'fast').attr({'class': 'item active width100 w-height'});

      fpItem_index = slideData;
      updateIndicator();
    })
  },[]);
  return (
    <div className="home-page h-100">
      {/* fp-carousel */}
      <div id="fp-carousel" class="width100 w-height">
          <ol class="carousel-indicators">
              <li data-target="#app-carousel" data-slide-to="0" class="active"></li>
              <li data-target="#app-carousel" data-slide-to="1"></li>
              <li data-target="#app-carousel" data-slide-to="2"></li>
              <li data-target="#app-carousel" data-slide-to="3"></li>
          </ol>
          <div class="width100 w-height carousel-content">
              <div class="item active width100 w-height">
                  <div class="col-md-12 appWrap px-0">
                      <section class="introItem1 container-fluid px-0">
                        <img width="100%" src={imageLink.banner_astro}></img>
                      </section>
                  </div>
              </div>
              <div class="item width100 w-height">
                <div class="col-md-12 appWrap px-0">
                      <section class="introItem1 container-fluid px-0">
                        <img width="100%" src={imageLink.banner_5xruby}></img>                                
                      </section>
                  </div>
              </div>
              <div class="item width100 w-height">
                <div class="col-md-12 appWrap px-0">
                      <section class="introItem1 container-fluid px-0">
                        <img width="100%" src={imageLink.banner_imcodingit}></img>                                
                      </section>
                  </div>
              </div>
              <div class="item width100 w-height">
                  <div class="col-md-12 appWrap px-0">
                      <section class="introItem1 container-fluid px-0">
                        <img width="100%" src={imageLink.banner_mokumokukai}></img>                                
                      </section>
                  </div>
              </div>                
          </div>                
      </div>
      {/* fp-carousel */}

      {/* about */}
      <div className="about-5x">
        <div className="title text-center mt-5">
          <h4>關於五倍紅寶石 About 5xRuby</h4>
          <div className="justify-content-center d-flex">
            <span className="line"></span>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-3">
              <div className="group-vertical text-center">                
                <img src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img1-0d20ab19.png"></img>
                <div className="mt-3">
                  <h4 className="mb-0">網頁設計</h4>        
                  <h4 className="mb-0">前後端課程教學</h4>
                </div>
                <div className="mt-3">
                  <p>帶你掌握程式技能轉職工程師，程式課程從入門到進階讓你快速上手，學員好評推薦轉職課程！</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="group-vertical text-center">
                <img src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img2-26e4ca80.png"></img>
                <div className="mt-3">
                  <h4 className="mb-0">頂尖技術</h4>
                  <h4 className="mb-0">網頁製作、專案開發</h4>
                </div>
                <div className="mt-3">
                  <p>網站開發到行動裝置 App 工程服務、系統設計開發甚至系統架設，提供專業的建議與頂尖的技術。</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="group-vertical text-center">
                <img src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img3-d0a4089e.png"></img>
                <div className="mt-3">
                  <h4 className="mb-0">資訊軟體開發</h4>
                  <h4 className="mb-0">技術顧問</h4>
                </div>
                <div className="mt-3">
                  <p>協助您將現有人力快速打造為 Ruby/Rails 團隊，無須經歷繁瑣的人才招募就有即戰力！</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="group-vertical text-center">
                <img src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img4-13321bf0.png"></img>
                <div className="mt-3">
                  <h4 className="mb-0">前後端工程師</h4>
                  <h4 className="mb-0">社群經營</h4>
                </div>
                <div className="mt-3">
                  <p>Ruby 社群經營、舉辦各類活動，促進 Ruby 社群發展，歡迎前後端工程師分享交流。</p>
                </div>
              </div>
            </div>        
          </div>  
        </div>  
      </div>
      {/* about */}      
    </div>
  );
}
export default Home;