$('.slider').slick({
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true, // スライドを中心に表示して部分的に前後のスライドが見えるように設定（奇数番号のスライドに使用）
        centerPadding: '5%', // センターモード時のサイドパディング。見切れるスライドの幅。’px’または’％’。
        dots: true, // ドットインジケーターの表示
        autoplay: true, // 自動再生を設定
        autoplaySpeed: 3000, // 自動再生のスピード（ミリ秒単位）
        speed: 1000, // スライド/フェードアニメーションの速度を設定
        infinite: true // スライドのループを有効にするか
      }
    },
    {
      breakpoint: 640,
      settings: {
        centerMode: true, // スライドを中心に表示して部分的に前後のスライドが見えるように設定（奇数番号のスライドに使用）
        centerPadding: '5%', // センターモード時のサイドパディング。見切れるスライドの幅。’px’または’％’。
        dots: true, // ドットインジケーターの表示
        autoplay: true, // 自動再生を設定
        autoplaySpeed: 3000, // 自動再生のスピード（ミリ秒単位）
        speed: 1000, // スライド/フェードアニメーションの速度を設定
        infinite: true // スライドのループを有効にするか
      }
    },
  ]
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var button = document.getElementById("scroll-to-top");
  if (window.innerWidth < 768) {
    button.style.display = "none";
  } else {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }
}

document.getElementById("scroll-to-top").onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};

// bottom-navのリンククリック時にスクロール位置を調整
var headerHeight = document.querySelector('header').offsetHeight;

document.querySelectorAll('.bottom-nav a').forEach(function(anchor) {
  anchor.addEventListener('click', function(event) {
      event.preventDefault();
      var targetId = this.getAttribute('href').split('#')[1];
      if (targetId == 'Top') {
        window.scrollTo({top: 0, behavior: 'smooth'});
      } else {
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        }
      }
  });
});

// ページが完全に読み込まれた後にスクロール位置を調整
window.addEventListener('load', function() {
  var headerHeight = document.querySelector('header').offsetHeight;

  function adjustScrollPosition() {
      if (window.location.hash) {
          var targetId = window.location.hash.substring(1);
          var targetElement = document.getElementById(targetId);
          if (targetId == 'Top') {
            window.scrollTo({top: 0, behavior: 'instant'});
          } else {
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'instant'
                });
            }
          }
      }
  }

  // ページ読み込み時にスクロール位置を調整
  setTimeout(adjustScrollPosition, 100);44
});