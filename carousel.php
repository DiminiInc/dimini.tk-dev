<style>
.carousel-wrapper{position:relative;margin-bottom:15px;}
.carousel-wrapper .carousel-item{position:absolute;top:0;bottom:0;left:0;right:0;padding:0px 50px;opacity:0;transition:all 0.5s ease-in-out;overflow:hidden;}
.carousel-wrapper .carousel-item .arrow{position:absolute;top:0;display:block;width:50px;height:100%;-webkit-tap-highlight-color:transparent;background: rgba(255,255,255,0.65) url("/site_files/carousel-arrow-dark.png") 50% 50%/20px no-repeat}
.carousel-wrapper .carousel-item .arrow.arrow-prev{left:0}.carousel-wrapper .carousel-item .arrow.arrow-next{right:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}
.carousel-wrapper .carousel-item.light{color:white}
.carousel-wrapper .carousel-item.light .arrow{background:rgba(255,255,255,0.65) url("/site_files/carousel-arrow-light.png") 50% 50%/20px no-repeat}
@media (max-width: 500px){
  .carousel-wrapper .carousel-item .arrow,.carousel-wrapper .carousel-item.light .arrow{background-size:10px;background-position:10px 50%}}
  .carousel-wrapper [id^="target-item"]{display:none}
  .carousel-wrapper .item-1{z-index:2;opacity:1}
  .carousel-wrapper *:target ~ .item-1{opacity:0}
  .carousel-wrapper #target-item-1:target ~ .item-1{opacity:1}
  .carousel-wrapper #target-item-2:target ~ .item-2,.carousel-wrapper #target-item-3:target ~ .item-3{z-index:3;opacity:1}
  .carousel-wrapper h2,.carousel-wrapper p{
    color:#000;
background:rgba(255,255,255,0.65);
 box-shadow: 0px 0px 60px 50px rgba(255,255,255,0.65);
  }
  .carousel-wrapper .pagelink{
    display:block; height:100%; padding:25px 0px; text-decoration: none;
    
  }
  /*.carousel-wrapper .arrow.arrow-next,.carousel-wrapper .arrow.arrow-prev{
    background:rgba(255,255,255,0.65);
  }*/

</style>

<div class="carousel-wrapper" style="height: 400px;">
  <span class="hidden-target" id="target-item-1"></span>
  <span class="hidden-target" id="target-item-2"></span>
  <span class="hidden-target" id="target-item-3"></span>
  <div class="carousel-item item-1" style="background-color: #ffffff; background-image: url(/site_files/browsers.png); background-size: 100%; background-position:center;">
    <a class="pagelink" href="/testdrive/browsers">
    <h2>Browsers comparison</h2>
    <p>Comparison of various browsers on different operating systems.</p>
    </a>
    <a class="arrow arrow-prev" href="#target-item-3"></a>
    <a class="arrow arrow-next" href="#target-item-2"></a>
  </div>
  <div class="carousel-item item-2" style="background-color: #ffffff; background-image: url(/site_files/snake_logo.png); background-size: auto; background-repeat: no-repeat; background-position:center;">
  <a class="pagelink" href="/software/snake" style="background-color:red;">
    <h2>Snake</h2>
    <p>Popular game "Snake"</p>
     </a>
    <a class="arrow arrow-prev" href="#target-item-1"></a>
    <a class="arrow arrow-next" href="#target-item-3"></a>
  </div>
  <div class="carousel-item item-3" style="background-color: #ffffff; background-image: url(/site_files/disearch_logo.png); background-size: auto; background-repeat: no-repeat; background-position:center;">
  <a class="pagelink" href="/software/disearch">
    <h2>Dimini Search</h2>
    <p>Program to perform fast search in different search engines</p>
     </a>
    <a class="arrow arrow-prev" href="#target-item-2"></a>
    <a class="arrow arrow-next" href="#target-item-1"></a>
  </div>
</div>